import {
    Client,
    Account,
    ID,
    Databases,
    OAuthProvider,
    Avatars,
    Query,
    Storage,
  } from "react-native-appwrite";
  import * as Linking from "expo-linking";
  import { openAuthSessionAsync } from "expo-web-browser";
  
  export const config = {
    platform: "com.neo.restate",
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    // databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
    // galleriesCollectionId:
    //   process.env.EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID,
    // reviewsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID,
    // agentsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID,
    // propertiesCollectionId:
    //   process.env.EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID,
    // bucketId: process.env.EXPO_PUBLIC_APPWRITE_BUCKET_ID,
  };
  export const client = new Client();
client
  .setEndpoint(config.endpoint!)
  .setProject(config.projectId!)
  .setPlatform(config.platform!);

export const avatar = new Avatars(client);
export const account = new Account(client);


export async function login() {
  try {
    const redirectUri = Linking.createURL("/");

    const response = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirectUri
    );
    if (!response) throw new Error("Create OAuth2 token failed");

    console.log("OAuth Response: ", response); // Add a log here to check the response object

    const browserResult = await openAuthSessionAsync(
      response.toString(),
      redirectUri
    );
    
    if (browserResult.type !== "success") {
      throw new Error("OAuth2 authentication failed");
    }

    // Check if browserResult.url exists
    if (!browserResult.url) throw new Error("URL is undefined in browserResult");

    const url = new URL(browserResult.url);
    const secret = url.searchParams.get("secret")?.toString();
    const userId = url.searchParams.get("userId")?.toString();

    if (!secret || !userId) {
      throw new Error("Missing parameters in the URL");
    }

    const session = await account.createSession(userId, secret);
    if (!session) throw new Error("Failed to create session");

    return true;
  } catch (error) {
    console.error("Login Error:", error);
    return false;
  }
}

  
  export async function logout() {
    try {
      const result = await account.deleteSession("current");
      return result;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  
  export async function getCurrentUser() {
    try {
      const result = await account.get();
      if (result.$id) {
        // Check if result.name exists, and provide a fallback if it doesn't
        const userAvatar = result.name ? avatar.getInitials(result.name) : avatar.getInitials("Default User");
  
        return {
          ...result,
          avatar: userAvatar.toString(),
        };
      }
  
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  