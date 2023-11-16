// Importing necessary modules and models
import Question from "../models/question";
import User from "../models/user";
import { connectToDb } from "../mongoose";
import { revalidatePath } from "next/cache";
import { hashPassword } from "../utility";

// Function to sign up a user
export async function signupUser<
  Name extends string,
  Email extends string,
  Username extends string,
  Password extends string
>(
  name: Name,
  email: Email,
  username: Username,
  password: Password
): Promise<any> {
  try {
    await connectToDb();

    // If any of the required fields are missing, return
    if (!name || !email || !username || !password) {
      return;
    }

    // Check if user with the same email or username already exists
    const existingUserEmail = await User.findOne({
      email: email,
    });

    const existingUserUsername = await User.findOne({
      username: username,
    });

    if (existingUserEmail || existingUserUsername) {
      return;
    }

    // Hash the password and create a new user
    const hashedPassword = await hashPassword(password);

    const createdUser = await User.create({
      name,
      email,
      username,
      password: hashedPassword,
      biography: "Biography Profile",
      location: "Location",
      portfolio: "/",
    });

    await createdUser.save();

    return createdUser;
  } catch (error) {
    console.log(error);
  }
}

// Function to fetch all users
export async function fetchUsers<Path extends string>(path?: Path) {
  try {
    connectToDb();

    // Find all users and select only necessary fields
    const users = await User.find({}).select(
      "username name email biography goldBadges silverBadges bronzeBadges"
    );

    if (!users) return;

    // If a path is provided, revalidate the path
    if (path) {
      revalidatePath(path);
    }

    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Fetching users failed");
  }
}

// Function to fetch a single user by ID
export async function fetchUser<Uid extends string>(userId: Uid) {
  try {
    connectToDb();

    // Find the user by ID and populate their questions and saved questions
    const user = await User.findById(userId)
      .populate({
        path: "questions",
        model: Question,
        populate: { path: "user", select: "username name" },
      })
      .populate({
        path: "savedQuestions",
        model: Question,
        populate: { path: "user", select: "username name" },
      })
      .select("-password");

    if (!user) return;

    return user;
  } catch (error) {
    console.log(error);
  }
}

// Function to edit a user's profile
export async function editProfile<
  Name extends string,
  Username extends string,
  Biography extends string,
  Location extends string
>(
  userId: string | number,
  name: Name,
  username: Username,
  biography: Biography,
  location: Location,
  path: string
) {
  try {
    connectToDb();

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) return;

    // Check if another user already has the same name or username
    const existingUserWithName = await User.findOne({ name });
    const existingUserWithUsername = await User.findOne({ username });

    if (
      (existingUserWithName &&
        existingUserWithName._id.toString() !== userId) ||
      (existingUserWithUsername &&
        existingUserWithUsername._id.toString() !== userId)
    ) {
      return;
    }

    // If any of the required fields are missing, return
    if (!name || !username || !biography || !location) return;

    // If the user's profile has not changed, return
    if (
      user.username === username &&
      user.name === name &&
      user.biography === biography &&
      user.location === location
    )
      return;

    // Update the user's profile and revalidate the path
    user.name = name;
    user.username = username;
    user.biography = biography;
    user.location = location;

    await user.save();
    revalidatePath(path);

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Editing profile failed");
  }
}

// Function to fetch the top 10 users in the community
export async function fetchCommunity(): Promise<any> {
  try {
    await connectToDb();

    // Find all users and sort them by badge count, then select only necessary fields
    const community = await User.find({})
      .sort({ goldBadges: -1, silverBadges: -1, bronzeBadges: -1 })
      .limit(10)
      .select("username email name goldBadges silverBadges bronzeBadges");

    console.log(community);
    return community;
  } catch (error) {
    console.log(error);
  }
}

// Function to search for users in the community by name, email, or username
export async function fetchCommunityByParams<T extends string | undefined>(
  params?: T
) {
  try {
    await connectToDb();
    let community = [];

    if (params) {
      // Create a regular expression to search for the given parameter
      const search = new RegExp(params, "i");

      // Find all users that match the search parameter and select only necessary fields
      community = await User.find({
        $or: [{ username: search }, { email: search }, { name: search }],
      }).select("-password");
    } else {
      // If no parameter is provided, find all users and select only necessary fields
      community = await User.find({}).select("-password");
    }

    return community;
  } catch (error) {
    console.log(error);
  }
}
