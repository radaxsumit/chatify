import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import {generateToken} from "../lib/utils.js";
import {sendWelcomeEmail} from "../emails/emailHandlers.js";
import {ENV} from "../lib/env.js";


export const signup = async (req, res) => {
  const { userName, email, password } = req.body;
  const name = typeof userName === "string" ? userName.trim() : "";
  const normalizedEmail = typeof email === "string" ? email.trim().toLocaleLowerCase() : "";

  // Here you would typically add logic to save the user to a database
  // For demonstration, we'll just return the received data
  try {
    if (!name || !normalizedEmail || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    }

    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizedEmail)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Here you would typically check if the email/User already exists in the database

      const user = await User.findOne({ email: normalizedEmail });
    if (user) return res.status(400).json({ message: "Email already in use" })

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
        userName:name,
        email:normalizedEmail,
        password: hashedPassword
    })

    if(newUser) {
        //before First Generate the Token and then save the user
        // generateToken(newUser._id, res);
        // await newUser.save();

        //After first save the User then generate the Token , Persist user first, then issue the auth cookie
        const savedUser = await newUser.save();
        generateToken(savedUser._id, res);
        res.status(201).json({
            _id: savedUser._id,
            userName: savedUser.userName,
            email: savedUser.email,
            password: savedUser.password,
            profilePic: savedUser.profilePic,
         });

        try{
            await sendWelcomeEmail(savedUser.email, savedUser.userName, ENV.CLIENTURL);
        } catch (error) {
            console.error("Failed to send email email", error);
        }

    } else {
        return res.status(400).json({ message: "Error creating user" });
    }

  } catch (error) {
    console.error("Error during signup controller :", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
