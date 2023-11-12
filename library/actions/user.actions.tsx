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
  try {
    await connectToDb();

    if (!name || !email || !username || !password) {
      return;
    }

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

    const users = await User.find({}).select(
      "username name email biography goldBadges silverBadges bronzeBadges"
    );

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
  }
}

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

    const user = await User.findById(userId);

    if (!user) return;

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
