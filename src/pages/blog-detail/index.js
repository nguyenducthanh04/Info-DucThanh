import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./blog-detail.css";
import axios from "axios";
function BlogDetail() {
    const { title } = useParams();
    const [blogDataDetail, setBlogDataDetail] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await axios.get(
                    `http://127.0.0.1:3005/blog/get-blog/${title}`
                );
                setBlogDataDetail(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching blog data:", error);
            }
        };

        fetchBlogData();
    }, [title]);
    const user = localStorage.getItem("user");
    const userParse = JSON.parse(user);
    const token = localStorage.getItem("token");
    return (
        <div>
            {isMobile ? (
                <div
                    className={`${
                        isDarkMode
                            ? "dark-mode-main-self-blog-detail-mobile"
                            : "main-self-blog-detail-mobile"
                    }`}
                >
                    <div class="container-mobile" style={{ padding: "20px" }}>
                        {blogDataDetail ? (
                            <div class="container">
                                <h2 className="title">
                                    {blogDataDetail.title}
                                </h2>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: blogDataDetail.contentHTML,
                                    }}
                                />
                            </div>
                        ) : (
                            <div>
                                <h4>Nội dung chưa được hiển thị...</h4>
                            </div>
                        )}
                        <div className="comment-user-mobile">
                            {token ? (
                                <div style={{ display: "flex" }}>
                                    <div className="avatar-user-mobile">
                                        <img src={userParse.avatar}></img>
                                    </div>
                                    <div className="comment-input-mobile">
                                        <div className="input-wrapper-mobile">
                                            <textarea placeholder="Nhập bình luận của bạn..."></textarea>
                                            <button className="btn-comment-mobile">
                                                Bình luận
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <em>Vui lòng đăng nhập để thêm bình luận.</em>
                            )}
                        </div>
                        <div style={{ width: "100%", height: "50px" }}></div>
                    </div>
                </div>
            ) : (
                <div
                    className={`${
                        isDarkMode
                            ? "dark-mode-main-self-blog-detail"
                            : "main-self-blog-detail"
                    }`}
                >
                    {blogDataDetail ? (
                        <div class="container" style={{ padding: "20px" }}>
                            <h2 className="title">{blogDataDetail.title}</h2>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: blogDataDetail.contentHTML,
                                }}
                            />
                        </div>
                    ) : (
                        <div>
                            <h4>Nội dung chưa được hiển thị...</h4>
                        </div>
                    )}
                    <div className="comment-user">
                        {token ? (
                            <div style={{ display: "flex" }}>
                                <div className="avatar-user">
                                    <img src={userParse.avatar}></img>
                                </div>
                                <div className="comment-input">
                                    <div className="input-wrapper">
                                        <textarea placeholder="Nhập bình luận của bạn..."></textarea>
                                        <button className="btn-comment">
                                            Bình luận
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <em>Vui lòng đăng nhập để thêm bình luận.</em>
                        )}
                    </div>
                    <div style={{ width: "100%", height: "50px" }}></div>
                </div>
            )}
        </div>
    );
}

export default BlogDetail;
