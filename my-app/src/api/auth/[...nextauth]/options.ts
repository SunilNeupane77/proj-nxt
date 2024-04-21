import { NextAuthOptions } from "next-auth";
import Credentials, { CredentialsProvider } from "next-auth/providers/credentials";
import {bcrypt} from "bcryptjs"
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export const authOptions:NextAuthOptions={
    providers:[
        Credentials({
            id:"credentials",
            name:"credentials",
            Credentials:{
           username:{label:"username"}
            }
        })
    ]
}