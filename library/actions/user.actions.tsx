"use server";

import Question from "../models/question";
import User from "../models/user";
import { connectToDb } from "../mongoose";
import { revalidatePath } from "next/cache";
import { hashPassword } from "../utility";

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
  // Connect to database and create a new user
  try {
    await connectToDb();

    // Check if all fields are filled
    if (!name || !email || !username || !password) {
      return;
    }

    // Chech if user exist and check errors
    const existingUserEmail = await User.findOne({
      email: email,
    });

    const existingUserUsername = await User.findOne({
      username: username,
    });

    if (existingUserEmail || existingUserUsername) {
      return;
    }

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

export async function fetchUsers<Path extends string>(path: Path) {
  try {
    connectToDb();

    const users = await User.find({}).select("username name biography");

    if (!users) return;

    revalidatePath(path);

    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Fetching users failed");
  }
}

export async function fetchUser<Uid extends string>(userId: Uid) {
  try {
    connectToDb();

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
    throw new Error("Fetching user failed");
  }
}

// Function for editing profile

export async function editProfile<
  Name extends string,
  Username extends string,
  Biography extends string,
  Location extends string
>(
  userId: string,
  name: Name,
  username: Username,
  biography: Biography,
  location: Location,
  path: string
) {
  try {
    connectToDb();

    const user = await User.findById(userId);

    if (!user) return;

    if (!name || !username || !biography || !location) return;

    if (
      user.username === username &&
      user.name === name &&
      user.biography === biography &&
      user.location === location
    )
      return;

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
