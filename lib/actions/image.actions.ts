"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import { Update } from "next/dist/build/swc";
import User from "../database/models/user.model";
import Image from "../database/models/image.model";

export async function addImage({image,userId,path}: AddImageParams) {
    try {
        await connectToDatabase();
        const author = await User.findById(userId);
        if (!author) {
            throw new Error("User not found");
        }
        const newImage = await Image.create({...image, author : author._id});

        revalidatePath(path);
        return JSON.parse(JSON.stringify(newImage));
    } catch (error) {
        handleError(error);
    }
}
//Update
export async function UpdateImage({image,userId,path}: UpdateImageParams) {
    try {
        await connectToDatabase();
        revalidatePath(path);
        return JSON.parse(JSON.stringify(image));
    } catch (error) {
        handleError(error);
    }
}
export async function deleteImage(imageId : string) {
    try {
        await connectToDatabase();
        revalidatePath(path);
        return JSON.parse(JSON.stringify(image));
    } catch (error) {
        handleError(error);
    }
}
export async function getImageById(imageId : string) {
    try {
        await connectToDatabase();
        revalidatePath(path);
        return JSON.parse(JSON.stringify(image));
    } catch (error) {
        handleError(error);
    }
}