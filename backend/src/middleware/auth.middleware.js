import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import {ENV} from "../lib/env.js"

// Before uploading profile pic we check the user is valid or not then we go to NEXT...
export const protectRoute = async (req, res,next) => {
    try{
        // Check for the token if it's existed or not
        const token = req.cookies.token;
        if(!token) return res.status(401).json({message:"No token provided"});

        // then if it's Valid or not
        const decode = jwt.verify(token, ENV.JWT_SECRET)
        if(!decode) return res.status(401).json({message:"invalid token"});

        // then the user is in the Database or not
        const user = await User.findById(decode.userId).select("-password");
        if(!user) return res.status(401).json({message:"User not found"});

        req.user = user; // Adding this user to request, then we can call the next() Function method as the user is authenticated
        next()

    } catch (error) {
        console.log("Error in protectRoute middleware: ",error);
        res.status(500).json({message:"Internal server error"});
    }
}