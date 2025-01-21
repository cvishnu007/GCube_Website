import {v2 as cloudinary} from "cloudinary";

import fs from "fs"; 

 cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
 })


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            return null;
        }
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",  
        });
        console.log("File uploaded on Cloudinary:", response.url);
        fs.unlinkSync(localFilePath);
        return response;
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        fs.unlinkSync(localFilePath);    
       
        throw error;  
    }
};

const deleteFromCloudinary= async(cloudinaryFilePath)=>{
    try{
        if(!cloudinaryFilePath) return null;
        const filename=cloudinaryFilePath.split("/").pop().spilt(".")[0];
        const response=await cloudinary.uploader.destroy(filename);
        return response;
    }catch(error){
        console.log("Error in deleting from cloudinary "+ error);   
        return null;
    }
}

export {uploadOnCloudinary, deleteFromCloudinary};