import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "./login.css";
function Login() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };
    const handleLogin = () => {
        window.location.href = "http://127.0.0.1:3005/auth/google/redirect";
    };
    return (
        <div>
            {isMobile ? (
                <div
                    className={`${
                        isDarkMode
                            ? "dark-mode-main-self-login-mobile"
                            : "main-self-login-mobile"
                    }`}
                >
                    <div className="login-container">
                        <div className="title-login">
                            <h4
                                style={{
                                    color: "white",
                                    paddingTop: "20px",
                                    textAlign: "center",
                                }}
                            >
                                Bạn hãy vui lòng đăng nhập !
                            </h4>
                        </div>
                        <div className="btn-login">
                            <button className="btn-login-google">
                                Đăng nhập với Google
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    className={`${
                        isDarkMode
                            ? "dark-mode-main-self-login"
                            : "main-self-login"
                    }`}
                >
                    <div className="login-container">
                        <h4 style={{ color: "white", marginTop: "30px" }}>
                            Bạn vui lòng đăng nhập để sử dụng các chức năng !
                        </h4>
                        <div className="btn-login">
                            <button
                                className="btn-login-google"
                                onClick={handleLogin}
                            >
                                Đăng nhập với Google
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;
