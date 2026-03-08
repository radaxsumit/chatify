import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import {generateToken} from "../lib/utils.js";


export const signup = async (req, res) => {
  const { userName, email, password } = req.body;

  // Here you would typically add logic to save the user to a database
  // For demonstration, we'll just return the received data
  try {
    if (!userName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    }

    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Here you would typically check if the email/User already exists in the database

    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "Email already in use" })
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
        userName,
        email,
        password: hashedPassword
    })

    if(newUser) {
        generateToken(newUser._id, res);
        await newUser.save();
        res.status(201).json({ 
            _id: newUser._id,
            userName: newUser.userName,
            email: newUser.email,
            password: newUser.password,
            profilePic: newUser.profilePic,
         });

    } else {
        return res.status(400).json({ message: "Error creating user" });
    }

  } catch (error) {
    console.error("Error during signup controller :", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
