import * as sdk from 'node-appwrite'

export const {
    PROJECT_ID, 
    API_KEY,
    DATABASE_ID,
    PATIENT_COLLECTION,
    DOCTOR_COLLECTION,
    APPOINTMENT_COLLECTION,
    SHYANCARE_BUCKET_ID: BUCKET_ID,
    SHYANCARE_ENDPOINT: ENDPOINT

} = process.env;


const client = new sdk.Client();

client
    .setEndpoint(ENDPOINT!)
    .setProject(PROJECT_ID!)
    .setKey(API_KEY!)

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);