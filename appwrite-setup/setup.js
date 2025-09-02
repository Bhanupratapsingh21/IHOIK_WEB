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
  collectionId: '68a0a985001211bdfg42',
  name: 'Blogs',
  attributes: [
    { key: 'title', type: 'string', size: 250, required: true },
    { key: 'summary', type: 'string', size: 25000, required: false },
    { key: 'content', type: 'string', size: 5000000, required: true },
    { key: 'tags', type: 'string', size: 1000, required: false, array: true },
    { key: 'coverImage', type: 'string', size: 1000, required: false },
    { key: 'status', type: 'string', required: false },
    { key: 'publishedAt', type: 'datetime', required: true },
    { key: 'createdBy', type: 'string', size: 1200, required: true },
    { key: 'upvotes', type: 'integer', min: 0, required: false, default: 0 },
    { key: 'slug', type: 'string', size: 767, required: true },
    { key: 'authorName', type: 'string', size: 12000, required: true },
    { key: 'createdAt', type: 'datetime', required: false },
    { key: 'updatedAt', type: 'datetime', required: false }
  ],
  indexes: [
    { key: 'slug', type: 'unique', attributes: ['slug'], orders: ['ASC'] },
    { key: 'publishedAt', type: 'key', attributes: ['publishedAt'], orders: ['DESC'] }
  ]
};

// News Collection Schema
const newsSchema = {
  databaseId: process.env.APPWRITE_DATABASE_ID,
  collectionId: '68a0a985001211beeg23',
  name: 'News',
  attributes: [
    { key: 'title', type: 'string', size: 250, required: true },
    { key: 'summary', type: 'string', size: 25000, required: false },
    { key: 'content', type: 'string', size: 5000000, required: true },
    { key: 'tags', type: 'string', size: 1000, required: false, array: true },
    { key: 'coverImage', type: 'string', size: 1000, required: false },
    { key: 'status', type: 'string', required: false },
    { key: 'publishedAt', type: 'datetime', required: true },
    { key: 'createdBy', type: 'string', size: 1200, required: true },
    { key: 'upvotes', type: 'integer', min: 0, required: false, default: 0 },
    { key: 'slug', type: 'string', size: 767, required: true },
    { key: 'authorName', type: 'string', size: 12000, required: true },
    { key: 'createdAt', type: 'datetime', required: false },
    { key: 'updatedAt', type: 'datetime', required: false }
  ],
  indexes: [
    { key: 'slug', type: 'unique', attributes: ['slug'], orders: ['ASC'] },
    { key: 'publishedAt', type: 'key', attributes: ['publishedAt'], orders: ['DESC'] }
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