import { firestore } from "@/utils/firebase/firebase-admin-configuration";

// Set the rate limit and rate limit period
const RATE_LIMIT = 5;
const RATE_LIMIT_PERIOD_MS = 60 * 60 * 1000; // 1 hour

// Function to update the Firestore rate limit
export async function updateFirestoreRateLimit(): Promise<boolean> {
  // Get the current date in "YYYY-MM-DD" format
  const currentDate = new Date().toISOString().slice(0, 10);

  // Create a reference to the Firestore document using the current date
  const rateLimiterRef = firestore.doc(`rateLimiter/${currentDate}`);

  // Retrieve the document snapshot
  const snapshot = await rateLimiterRef.get();
  // Get the document data, or initialize it with an empty array if not exists
  const data = snapshot.data() || { timestamps: [] };

  // Get the current timestamp
  const now = Date.now();
  // Filter the timestamps array to keep only the entries within the rate limit period
  const newTimestamps = data.timestamps.filter(
    (timestamp: number) => now - timestamp < RATE_LIMIT_PERIOD_MS,
  );

  // Check if the number of API calls within the rate limit period exceeds the limit
  if (newTimestamps.length >= RATE_LIMIT) {
    return false;
  }

  // Add the current timestamp to the timestamps array
  newTimestamps.push(now);

  // Update the Firestore document with the new timestamps array
  await rateLimiterRef.set({
    timestamps: newTimestamps,
  });

  // Return true to indicate that the rate limit update was successful
  return true;
}
