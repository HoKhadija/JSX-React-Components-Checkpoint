import React from "react";
import MyPic from "./MyPic.jpg"; 
    /*using dot & slash beacause the pic is inside the folder */

export default function MyPicture() {
    return (
        <>
            {/* Adding the pic & fixing the width and the height */}
            <img src={MyPic} style={{ width:260, height: 280}} alt="MyPicture" />
        </>
    )
}