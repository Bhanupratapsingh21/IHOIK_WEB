const { Client, Databases, Permission, Role } = require('node-appwrite');
require('dotenv').config();

// Initialize the Client
const client = new Client();
client
  .setEndpoint(process.env.APPWRITE_ENDPOINT)
  .setProject(process.env.APPWRITE_PROJECT_ID)
  .setKey(process.env.APPWRITE_API_KEY);

const databases = new Databases(client);

// Blog Collection Schema
const blogSchema = {
  databaseId: process.env.APPWRITE_DATABASE_ID,
  collectionId: 'blogs',
  name: 'Blogs',
  permissions: {
    read: [Permission.read(Role.any())],
    write: [Permission.write(Role.users()), Permission.update(Role.users()), Permission.delete(Role.users())]
  },
  attributes: [
    { key: 'title', type: 'string', size: 255, required: true },
    { key: 'slug', type: 'string', size: 255, required: true },
    { key: 'excerpt', type: 'string', size: 500, required: true },
    { key: 'content', type: 'string', size: 100000, required: true },
    { key: 'author', type: 'string', size: 100, required: true },
    { key: 'authorId', type: 'string', size: 36, required: true },
    { key: 'featuredImage', type: 'string', size: 255, required: false },
    { key: 'category', type: 'string', size: 50, required: true },
    { key: 'tags', type: 'string', size: 50, required: false, array: true },
    { key: 'readTime', type: 'integer', min: 1, max: 60, required: true },
    { key: 'isPublished', type: 'boolean', required: true, default: false },
    { key: 'publishedAt', type: 'datetime', required: false },
    { key: 'views', type: 'integer', min: 0, required: true, default: 0 },
    { key: 'metaTitle', type: 'string', size: 255, required: false },
    { key: 'metaDescription', type: 'string', size: 500, required: false }
  ],
  indexes: [
    { key: 'slug', type: 'unique', attributes: ['slug'], orders: ['ASC'] },
    { key: 'category', type: 'key', attributes: ['category'], orders: ['ASC'] },
    { key: 'published', type: 'key', attributes: ['isPublished', 'publishedAt'], orders: ['ASC', 'DESC'] },
    { key: 'author', type: 'key', attributes: ['authorId'], orders: ['ASC'] }
  ]
};

// News Collection Schema
const newsSchema = {
  databaseId: process.env.APPWRITE_DATABASE_ID,
  collectionId: 'news',
  name: 'News',
  permissions: {
    read: [Permission.read(Role.any())],
    write: [Permission.write(Role.users()), Permission.update(Role.users()), Permission.delete(Role.users())]
  },
  attributes: [
    { key: 'title', type: 'string', size: 255, required: true },
    { key: 'slug', type: 'string', size: 255, required: true },
    { key: 'excerpt', type: 'string', size: 500, required: true },
    { key: 'content', type: 'string', size: 50000, required: true },
    { key: 'author', type: 'string', size: 100, required: true },
    { key: 'authorId', type: 'string', size: 36, required: true },
    { key: 'featuredImage', type: 'string', size: 255, required: false },
    { key: 'category', type: 'string', size: 50, required: true },
    { key: 'isBreaking', type: 'boolean', required: true, default: false },
    { key: 'isPublished', type: 'boolean', required: true, default: false },
    { key: 'publishedAt', type: 'datetime', required: false },
    { key: 'source', type: 'string', size: 100, required: false },
    { key: 'sourceUrl', type: 'url', size: 2000, required: false },
    { key: 'location', type: 'string', size: 100, required: false },
    { key: 'views', type: 'integer', min: 0, required: true, default: 0 },
    { key: 'metaTitle', type: 'string', size: 255, required: false },
    { key: 'metaDescription', type: 'string', size: 500, required: false }
  ],
  indexes: [
    { key: 'slug', type: 'unique', attributes: ['slug'], orders: ['ASC'] },
    { key: 'category', type: 'key', attributes: ['category'], orders: ['ASC'] },
    { key: 'breaking', type: 'key', attributes: ['isBreaking', 'publishedAt'], orders: ['ASC', 'DESC'] },
    { key: 'published', type: 'key', attributes: ['isPublished', 'publishedAt'], orders: ['ASC', 'DESC'] }
  ]
};

async function setupAppwriteCollections() {
  try {
    console.log('🚀 Starting Appwrite collection setup...');
    
    // Check if database exists, create if not
    let database;
    try {
      database = await databases.get(blogSchema.databaseId);
      console.log('✅ Database already exists:', database.name);
    } catch (error) {
      console.log('📦 Database not found, creating new database...');
      database = await databases.create(
        blogSchema.databaseId,
        'IHOIK Content Database'
      );
      console.log('✅ Database created:', database.name);
    }

    // Setup Blogs collection
    await setupCollection(blogSchema);
    
    // Setup News collection
    await setupCollection(newsSchema);
    
    console.log('🎉 Appwrite setup completed successfully!');
    return { success: true };
  } catch (error) {
    console.error('❌ Appwrite setup failed:', error);
    return { success: false, error };
  }
}

async function setupCollection(schema) {
  try {
    console.log(`\n📋 Setting up ${schema.name} collection...`);

    // Check if collection exists
    let collection;
    try {
      collection = await databases.getCollection(schema.databaseId, schema.collectionId);
      console.log(`✅ Collection ${schema.name} already exists`);
    } catch (error) {
      // Create collection if it doesn't exist
      try {
        // Try with minimal parameters first
        collection = await databases.createCollection(
          schema.databaseId,
          schema.collectionId,
          schema.name
        );
        console.log(`✅ Collection ${schema.name} created`);
      } catch (createError) {
        // If that fails, try with permissions
        console.log('Trying with permissions...');
        collection = await databases.createCollection(
          schema.databaseId,
          schema.collectionId,
          schema.name,
          schema.permissions.read
        );
        console.log(`✅ Collection ${schema.name} created with permissions`);
      }
      
      // Wait for collection to be ready
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    // Add attributes
    console.log(`📝 Adding attributes to ${schema.name}...`);
    for (const attr of schema.attributes) {
      try {
        // Check if attribute already exists
        const attributes = await databases.listAttributes(schema.databaseId, schema.collectionId);
        const attributeExists = attributes.attributes.some(a => a.key === attr.key);
        
        if (!attributeExists) {
          await createAttribute(schema.databaseId, schema.collectionId, attr);
          console.log(`   ✅ Attribute ${attr.key} (${attr.type}) added`);
          // Wait to avoid rate limiting
          await new Promise(resolve => setTimeout(resolve, 500));
        } else {
          console.log(`   ℹ️  Attribute ${attr.key} already exists`);
        }
      } catch (error) {
        console.error(`   ❌ Failed to create attribute ${attr.key}:`, error.message);
      }
    }

    // Add indexes
    console.log(`📊 Adding indexes to ${schema.name}...`);
    for (const index of schema.indexes) {
      try {
        // Check if index already exists
        const indexes = await databases.listIndexes(schema.databaseId, schema.collectionId);
        const indexExists = indexes.indexes.some(i => i.key === index.key);
        
        if (!indexExists) {
          await databases.createIndex(
            schema.databaseId,
            schema.collectionId,
            index.key,
            index.type,
            index.attributes,
            index.orders
          );
          console.log(`   ✅ Index ${index.key} added`);
          // Wait to avoid rate limiting
          await new Promise(resolve => setTimeout(resolve, 500));
        } else {
          console.log(`   ℹ️  Index ${index.key} already exists`);
        }
      } catch (error) {
        console.error(`   ❌ Failed to create index ${index.key}:`, error.message);
      }
    }

    console.log(`✅ ${schema.name} collection setup completed`);
  } catch (error) {
    console.error(`❌ Failed to setup collection ${schema.name}:`, error.message);
    throw error;
  }
}

async function createAttribute(databaseId, collectionId, attr) {
  const { key, type, required, array = false } = attr;
  
  switch (type) {
    case 'string':
      return await databases.createStringAttribute(
        databaseId,
        collectionId,
        key,
        attr.size,
        required,
        attr.default || null,
        array
      );
      
    case 'integer':
      return await databases.createIntegerAttribute(
        databaseId,
        collectionId,
        key,
        required,
        attr.min || null,
        attr.max || null,
        attr.default || null,
        array
      );
      
    case 'float':
      return await databases.createFloatAttribute(
        databaseId,
        collectionId,
        key,
        required,
        attr.min || null,
        attr.max || null,
        attr.default || null,
        array
      );
      
    case 'boolean':
      return await databases.createBooleanAttribute(
        databaseId,
        collectionId,
        key,
        required,
        attr.default || null,
        array
      );
      
    case 'datetime':
      return await databases.createDatetimeAttribute(
        databaseId,
        collectionId,
        key,
        required,
        attr.default || null,
        array
      );
      
    case 'email':
      return await databases.createEmailAttribute(
        databaseId,
        collectionId,
        key,
        required,
        attr.default || null,
        array
      );
      
    case 'url':
      return await databases.createUrlAttribute(
        databaseId,
        collectionId,
        key,
        required,
        attr.default || null,
        array
      );
      
    case 'ip':
      return await databases.createIpAttribute(
        databaseId,
        collectionId,
        key,
        required,
        attr.default || null,
        array
      );
      
    case 'enum':
      return await databases.createEnumAttribute(
        databaseId,
        collectionId,
        key,
        attr.elements,
        required,
        attr.default || null,
        array
      );
      
    default:
      throw new Error(`Unsupported attribute type: ${type}`);
  }
}

// Run the setup
if (require.main === module) {
  setupAppwriteCollections()
    .then(result => {
      if (result.success) {
        console.log('\n✨ Setup completed successfully!');
        process.exit(0);
      } else {
        console.log('\n💥 Setup failed!');
        process.exit(1);
      }
    })
    .catch(error => {
      console.error('\n💥 Unexpected error:', error);
      process.exit(1);
    });
}

// Export for use as module
module.exports = {
  setupAppwriteCollections,
  setupCollection,
  blogSchema,
  newsSchema
};