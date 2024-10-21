import { UserType } from '../models/userModel'; // Assuming Post is imported from another file
import { handleJsonResponse } from '../handleJsonResponse'; // Import the response handler

// Backend URL from the environment variable
const BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL;
export const USERS_API_URL = `${BACKEND_URL}/users`;

// Function to create a new post with Firebase authorization token, including price and size
export const createUser = async (token: string, user: UserType): Promise<UserType> => {
  try {
    const response = await fetch(USERS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Firebase Authorization token
      },
      body: JSON.stringify(user), // user
    });

    return await handleJsonResponse(response);
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

export const updateUser = async (token: string, user_id: number, user: UserType): Promise<UserType> => {
  try {
    const response = await fetch(`${USERS_API_URL}/${user_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Firebase Authorization token
      },
      body: JSON.stringify(user), // Post now includes price and size
    });

    return await handleJsonResponse(response);
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};
