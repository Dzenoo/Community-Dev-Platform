"use server";

import User from "../models/user";
import { connectToDb } from "../mongoose";
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
    if (!name || !email || !username || !password) return;

    // Chech if user exist and check errors
    const existingUser = await User.findOne({ email: email });

    if (existingUser) return;

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
    throw new Error("Signup failed");
  }
}

export async function fetchUser<Uid extends string>(userId: Uid) {
  try {
    connectToDb();

    const user = await User.findById(userId).select("-password");

    if (!user) return;

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Fetching user failed");
  }
}
