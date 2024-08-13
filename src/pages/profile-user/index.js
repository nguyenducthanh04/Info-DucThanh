import React, { useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./profile-user.css";
import axios from "axios";
import { baseUrl } from "../../api-url/base-url.js";
import LoginPage from "../login/index.js";
function ProfileUser() {
    const { name } = useParams();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [userProfile, setUserProfile] = useState(null);
    const [commentByUser, setCommentByUser] = useState([]);
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    useEffect(() => {
        const fecthUser = async () => {
            const response = await axios.get(
                `${baseUrl}/users/get-user/${name}`
            );
            setUserProfile(response.data.data);
        };
        fecthUser();
    }, [name]);
    useEffect(() => {
        if (userProfile) {
            setCommentByUser(userProfile.comments);
        }
    }, [userProfile]);
    const token = localStorage.getItem("token");
    return (
        <div>
            {token ? (
                <div>
                    {isMobile ? (
                        <div
                            className={`${
                                isDarkMode
                                    ? "dark-mode-main-self-login-mobile"
                                    : "main-self-profile-mobile"
                            }`}
                        >
                            <div className="info-user-mobile">
                                {userProfile ? (
                                    <Fragment>
                                        <div className="title-profile-mobile">
                                            <h2>
                                                Trang cá nhân của:{" "}
                                                {userProfile.username}
                                            </h2>
                                        </div>
                                        <div className="users-mobile">
                                            <img
                                                src={userProfile.avatar}
                                                alt="avatar"
                                                className="avatar-user-current-mobile"
                                            ></img>
                                            <div className="name&email-mobile">
                                                <h3>{userProfile.username}</h3>
                                                <em>{userProfile.email}</em>
                                            </div>
                                        </div>
                                        <div className="list-comment-mobile">
                                            <h3>Bình luận đã viết</h3>
                                            {commentByUser &&
                                            commentByUser.length > 0 ? (
                                                commentByUser?.map((item) => (
                                                    <Link
                                                        to={`/blog-detail/${item.MarkDownBlog.title}`}
                                                        className="comment-link-mobile"
                                                        key={item.id}
                                                    >
                                                        <div className="comment-mobile">
                                                            <div>
                                                                <img
                                                                    src={
                                                                        userProfile.avatar
                                                                    }
                                                                    alt="avatar"
                                                                    className="avatar-user-comment-mobile"
                                                                ></img>
                                                            </div>
                                                            <div>
                                                                <em>
                                                                    "
                                                                    {
                                                                        item.commentText
                                                                    }
                                                                    "
                                                                </em>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))
                                            ) : (
                                                <div
                                                    style={{
                                                        width: "100%",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <em
                                                        style={{
                                                            color: "green",
                                                        }}
                                                    >
                                                        Chưa có bình luận nào
                                                    </em>
                                                </div>
                                            )}
                                        </div>
                                        <div
                                            style={{
                                                width: "100%",
                                                height: "40px",
                                            }}
                                        ></div>
                                    </Fragment>
                                ) : (
                                    <p>Loading user data...</p>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div
                            className={`${
                                isDarkMode
                                    ? "dark-mode-main-self-login"
                                    : "main-self-profile"
                            }`}
                        >
                            <div className="info-user">
                                {userProfile ? (
                                    <>
                                        <div className="title-profile">
                                            <h2>
                                                Trang cá nhân của:{" "}
                                                {userProfile.username}
                                            </h2>
                                        </div>
                                        <div className="users">
                                            <img
                                                src={userProfile.avatar}
                                                alt="avatar"
                                                className="avatar-user-current"
                                            />
                                            <div className="name&email">
                                                <h3>{userProfile.username}</h3>
                                                <em>{userProfile.email}</em>
                                            </div>
                                        </div>
                                        <div className="list-comment">
                                            <h3>Bình luận đã viết</h3>
                                            {commentByUser &&
                                            commentByUser.length > 0 ? (
                                                commentByUser.map((item) => (
                                                    <Link
                                                        to={`/blog-detail/${item.MarkDownBlog.title}`}
                                                        className="comment-link"
                                                        key={item.id}
                                                    >
                                                        <div className="comment">
                                                            <div>
                                                                <img
                                                                    src={
                                                                        userProfile.avatar
                                                                    }
                                                                    alt="avatar"
                                                                    className="avatar-user-comment"
                                                                />
                                                            </div>
                                                            <div>
                                                                <em>
                                                                    "
                                                                    {
                                                                        item.commentText
                                                                    }
                                                                    "
                                                                </em>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))
                                            ) : (
                                                <div
                                                    style={{
                                                        width: "100%",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <em
                                                        style={{
                                                            color: "green",
                                                        }}
                                                    >
                                                        Chưa có bình luận nào
                                                    </em>
                                                </div>
                                            )}
                                        </div>
                                    </>
                                ) : (
                                    <p>Loading user data...</p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <LoginPage />
            )}
            <ToastContainer />
        </div>
    );
}

export default ProfileUser;
