# Appwrite Setup Tool

This tool sets up the necessary collections and attributes in your Appwrite database for the IHOIK application.

## Prerequisites

1. Node.js installed
2. Appwrite project created
3. API key with sufficient permissions

## Setup

1. Copy `.env.example` to `.env`
2. Update the environment variables with your Appwrite details
3. Run `npm install`
4. Run `npm run setup`

## Environment Variables

- `APPWRITE_ENDPOINT`: Your Appwrite endpoint URL
- `APPWRITE_PROJECT_ID`: Your Appwrite project ID
- `APPWRITE_API_KEY`: Your Appwrite API key with admin permissions
- `APPWRITE_DATABASE_ID`: Your Appwrite database ID

## What it creates

- A database (if it doesn't exist)
- `blogs` collection with all necessary attributes and indexes
- `news` collection with all necessary attributes and indexes