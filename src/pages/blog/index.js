import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { FaEye } from "react-icons/fa";
import moment from "moment";
import axios from "axios";
import { baseUrl } from "../../api-url/base-url.js";
import "./blog.css";
function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    useEffect(() => {
        const fecthDataBlog = async () => {
            try {
                const response = await axios.get(
                    `${baseUrl}/blog/get-all-blog`
                );
                setBlogs(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error("Error saving blog:", error);
            }
        };
        fecthDataBlog();
    }, []);
    return (
        <div>
            {isMobile ? (
                <div
                    className={`${
                        isDarkMode
                            ? "dark-mode-main-self-blog-mobile"
                            : "main-self-blog-mobile"
                    }`}
                >
                    <div className="blog-mobile">
                        <div className="blog-title-mobile">
                            <h1>Bài viết</h1>
                        </div>
                        <div class="warningg-mobile">
                        <p>Chức năng đang được bảo trì...</p>
                        </div>
                        <div className="my-blog-mobile">
                            <div className="blog-content-mobile">
                                {blogs?.map((blog) => (
                                    <Link
                                        to={`/blog-detail/${blog.title}`}
                                        className="link-blog"
                                        key={blog.id}
                                    >
                                        <div
                                            className={`${
                                                isDarkMode
                                                    ? "dark-mode-blog-item-mobile"
                                                    : "blog-item-mobile"
                                            }`}
                                        >
                                            <div className="name-blog-mobile">
                                                <h3>{blog.title}</h3>
                                                <div className="content-blog-mobile">
                                                    <span>
                                                        {blog.description}
                                                    </span>
                                                </div>
                                                <div className="date-submitted-mobile">
                                                    <em>
                                                        Ngày đăng{" "}
                                                        {moment(
                                                            blog.createdAt
                                                        ).format("DD/MM/YYYY")}
                                                    </em>
                                                    <em
                                                        style={{
                                                            marginLeft: "20px",
                                                        }}
                                                    >
                                                        {blog.view} lượt xem
                                                    </em>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div style={{ width: "100%", height: "50px" }}></div>
                    </div>
                </div>
            ) : (
                <div
                    className={`${
                        isDarkMode
                            ? "dark-mode-main-self-blog"
                            : "main-self-blog"
                    }`}
                >
                    <div className="blog">
                        <div className="blog-title">
                            <h1>Bài viết</h1>
                        </div>
                        <div class="warningg">
                        <p>Chức năng đang được bảo trì...</p>
                        </div>
                        <div className="my-blog">
                            <div className="blog-content">
                                {blogs?.map((blog) => (
                                    <Link
                                        to={`/blog-detail/${blog.title}`}
                                        className="link-blog"
                                        key={blog.id}
                                    >
                                        <div
                                            className={`${
                                                isDarkMode
                                                    ? "dark-mode-blog-item"
                                                    : "blog-item"
                                            }`}
                                        >
                                            <div className="name-blog">
                                                <h3>{blog.title}</h3>
                                                <div className="content-blog">
                                                    <span>
                                                        {blog.description}
                                                    </span>
                                                </div>
                                                <div className="date-submitted">
                                                    <em>
                                                        Ngày đăng{" "}
                                                        {moment(
                                                            blog.createdAt
                                                        ).format("DD/MM/YYYY")}
                                                    </em>
                                                    <em
                                                        style={{
                                                            marginLeft: "50px",
                                                        }}
                                                    >
                                                        {blog.view} lượt xem
                                                    </em>
                                                </div>
                                            </div>
                                            <div className="image-blog">
                                                <img
                                                    src={blog.urlImageBanner}
                                                ></img>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "100%", height: "50px" }}></div>
                </div>
            )}
        </div>
    );
}

export default Blog;
<div></div>;
