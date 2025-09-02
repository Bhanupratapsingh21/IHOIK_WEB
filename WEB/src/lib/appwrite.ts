// lib/appwrite.ts
import { Client, Account, Databases } from 'appwrite';

const client = new Client();
client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

export const account = new Account(client);
export const databases = new Databases(client);

export const APPWRITE = {
    DATABASE_ID: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
    BLOGS_COLLECTION_ID: process.env.NEXT_PUBLIC_APPWRITE_BLOGS_COLLECTION_ID!,
    NEWS_COLLECTION_ID: process.env.NEXT_PUBLIC_APPWRITE_NEWS_COLLECTION_ID!,
    USERS_COLLECTION_ID: process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION_ID!,
};