import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useUser } from "../../Users/UserContext.js";
import { ToastContainer, toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import "./profile.css";
import axios from "axios";
import { baseUrl } from "../../api-url/base-url.js";
import LoginPage from "../login/index.js";
function Profile() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [commentByUser, setCommentByUser] = useState([]);
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const location = useLocation();
    const navigate = useNavigate();
    const { login, logout } = useUser();
    const userData = localStorage.getItem("user");
    const userDataParse = JSON.parse(userData);
    useEffect(() => {
        // Lấy thông tin từ URL và lưu vào localStorage
        const params = new URLSearchParams(location.search);
        const token = params.get("token");
        const id = params.get("id");
        const name = params.get("name");
        const email = params.get("email");
        const avatar = params.get("avatar");

        if (token) {
            localStorage.setItem("token", token);
            setToken(token);
        } else {
            console.log("Token is missing");
        }

        if (id && name && email && avatar) {
            const userCurrent = { id, name, email, avatar };
            login(userCurrent);
        } else {
            console.log(
                "Missing user information, nothing saved to localStorage"
            );
        }
    }, [location]);

    useEffect(() => {
        // Lấy thông tin từ localStorage và cập nhật state khi trang được tải lại
        const savedToken = localStorage.getItem("token");
        const savedUser = localStorage.getItem("user");

        if (savedToken) {
            setToken(savedToken);
        }
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);
    useEffect(() => {
        const fecthCommentByUser = async () => {
            if (user && user.id) {
                const response = await axios.get(
                    `${baseUrl}/blog/get-comment-by-user/${user.id}`
                );
                setCommentByUser(response.data);
            } else {
                console.log("Thông tin người dùng chưa sẵn sàng");
            }
        };
        fecthCommentByUser();
    }, [user]);
    const handleLogout = async () => {
        try {
            const token = localStorage.getItem("token");
            await axios.post(`${baseUrl}/auth/logout`, null, {
                headers: { Authorization: `Bearer ${token}` },
            });
            logout();
            navigate("/login");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };
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
                                <div className="users-mobile">
                                    <img
                                        src={user.avatar}
                                        alt="avatar"
                                        className="avatar-user-current-mobile"
                                    ></img>
                                    <div className="name&email-mobile">
                                        <h3>{user.name}</h3>
                                        <em>{user.email}</em>
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
                                            >
                                                <div className="comment-mobile">
                                                    <div>
                                                        <img
                                                            src={user.avatar}
                                                            alt="avatar"
                                                            className="avatar-user-comment-mobile"
                                                        ></img>
                                                    </div>
                                                    <div>
                                                        <em>
                                                            "{item.commentText}"
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
                                            <em style={{ color: "green" }}>
                                                Chưa có bình luận nào
                                            </em>
                                        </div>
                                    )}
                                </div>
                                <div className="btn-mobile">
                                    <button
                                        onClick={handleLogout}
                                        className="btn-logout-mobile"
                                    >
                                        Đăng xuất
                                    </button>
                                </div>
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
                                <div className="users">
                                    <img
                                        src={user.avatar}
                                        alt="avatar"
                                        className="avatar-user-current"
                                    ></img>
                                    <div className="name&email">
                                        <h3>{user.name}</h3>
                                        <em>{user.email}</em>
                                    </div>
                                </div>
                                <div className="list-comment">
                                    <h3>Bình luận đã viết</h3>
                                    {commentByUser &&
                                    commentByUser.length > 0 ? (
                                        commentByUser?.map((item) => (
                                            <Link
                                                to={`/blog-detail/${item.MarkDownBlog.title}`}
                                                className="comment-link"
                                            >
                                                <div className="comment">
                                                    <div>
                                                        <img
                                                            src={user.avatar}
                                                            alt="avatar"
                                                            className="avatar-user-comment"
                                                        ></img>
                                                    </div>
                                                    <div>
                                                        <em>
                                                            "{item.commentText}"
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
                                            <em style={{ color: "green" }}>
                                                Chưa có bình luận nào
                                            </em>
                                        </div>
                                    )}
                                </div>
                                <div className="btn">
                                    <button
                                        onClick={handleLogout}
                                        className="btn-logout"
                                    >
                                        Đăng xuất
                                    </button>
                                </div>
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

export default Profile;
