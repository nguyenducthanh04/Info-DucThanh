import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import LoginPage from "../login/index.js";
function Blog() {
    const userData = localStorage.getItem("user");
    const userDataParse = JSON.parse(userData);
    return (
        <div>
            <h1 style={{ color: "white" }}>
                Welcome, {userDataParse.name} đẹp trai
            </h1>
            <img
                src={userDataParse.avatar}
                alt="avatar"
                style={{ width: "100px", height: "100px" }}
            ></img>
        </div>
    );
}

export default Blog;
<div></div>;
