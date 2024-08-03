import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import LoginPage from "../login/index.js";
import { ToastContainer, toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";
import { baseUrl } from "../../api-url/base-url.js";
import "react-toastify/dist/ReactToastify.css";
import "./sendmail.css";

function SendMail() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    const userDataParse = userData ? JSON.parse(userData) : {};

    const [formData, setFormData] = useState({
        email: userDataParse.email || "",
        name: userDataParse.name || "",
        content: "",
    });

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${baseUrl}/send-mail/send-mail-to-Thanh`,
                formData
            );

            setFormData({
                ...formData,
                content: "",
            });
            toast.success("Gửi tin nhắn thành công đến Đức Thanh.", {
                icon: <FaCheckCircle style={{ color: "green" }} />,
            });
        } catch (error) {
            console.error("Error sending email:", error);
            alert("An error occurred while sending the email");
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
                                    ? "dark-mode-main-self-send-mail-mobile"
                                    : "main-self-send-mail-mobile"
                            }`}
                        >
                            <div className="contact-section">
                                <div className="send-email-title-mobile">
                                    <h4>
                                        Hãy gửi những điều tốt đẹp đến với
                                        mình...
                                    </h4>
                                </div>
                                <div className="contact-method">
                                    <div className="bg-wrapper">
                                        <div className="content-container">
                                            <div className="display-screen-mobile">
                                                <div className="display-header">
                                                    <div className="header-left">
                                                        <div className="header-button close-btn"></div>
                                                        <div className="header-button maximize-btn"></div>
                                                        <div className="header-button minimize-btn"></div>
                                                    </div>
                                                    <div className="header-right">
                                                        <div className="header-ellipsis"></div>
                                                        <div className="header-ellipsis"></div>
                                                        <div className="header-ellipsis"></div>
                                                    </div>
                                                </div>
                                                <div className="display-body">
                                                    <div className="body-section">
                                                        <div className="application-form">
                                                            <form
                                                                id="contactForm"
                                                                onSubmit={
                                                                    handleSubmit
                                                                }
                                                            >
                                                                <div className="form-group">
                                                                    <input
                                                                        id="email"
                                                                        name="email"
                                                                        value={
                                                                            formData.email
                                                                        }
                                                                        className="form-control"
                                                                        placeholder="YOUR EMAIL"
                                                                        required
                                                                        readOnly
                                                                    />
                                                                </div>
                                                                <div className="form-group">
                                                                    <input
                                                                        id="name"
                                                                        name="name"
                                                                        value={
                                                                            formData.name
                                                                        }
                                                                        className="form-control"
                                                                        placeholder="YOUR NAME"
                                                                        required
                                                                        readOnly
                                                                    />
                                                                </div>
                                                                <div className="form-group message-group">
                                                                    <textarea
                                                                        id="content"
                                                                        name="content"
                                                                        className="form-control"
                                                                        placeholder="MESSAGE"
                                                                        value={
                                                                            formData.content
                                                                        }
                                                                        onChange={
                                                                            handleChange
                                                                        }
                                                                        required
                                                                    ></textarea>
                                                                </div>
                                                                <div className="form-group action-buttons">
                                                                    <button
                                                                        className="form-button"
                                                                        type="submit"
                                                                    >
                                                                        SEND
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div
                            className={`${
                                isDarkMode
                                    ? "dark-mode-main-self"
                                    : "main-self-send-mail"
                            }`}
                        >
                            <div className="contact-section">
                                <div className="send-email-title">
                                    <h4>
                                        Hãy gửi những điều tốt đẹp đến với
                                        mình...
                                    </h4>
                                </div>
                                <div className="contact-method">
                                    <div className="bg-wrapper">
                                        <div className="content-container">
                                            <div className="display-screen">
                                                <div className="display-header">
                                                    <div className="header-left">
                                                        <div className="header-button close-btn"></div>
                                                        <div className="header-button maximize-btn"></div>
                                                        <div className="header-button minimize-btn"></div>
                                                    </div>
                                                    <div className="header-right">
                                                        <div className="header-ellipsis"></div>
                                                        <div className="header-ellipsis"></div>
                                                        <div className="header-ellipsis"></div>
                                                    </div>
                                                </div>
                                                <div className="display-body">
                                                    <div className="body-section left-side">
                                                        <div className="application-title">
                                                            <span>CONTACT</span>
                                                            <span>THANH</span>
                                                        </div>
                                                        <div className="application-contact">
                                                            CONTACT INFO :
                                                            0777566061
                                                        </div>
                                                    </div>
                                                    <div className="body-section">
                                                        <div className="application-form">
                                                            <form
                                                                id="contactForm"
                                                                onSubmit={
                                                                    handleSubmit
                                                                }
                                                            >
                                                                <div className="form-group">
                                                                    <input
                                                                        id="email"
                                                                        name="email"
                                                                        value={
                                                                            formData.email
                                                                        }
                                                                        className="form-control"
                                                                        placeholder="YOUR EMAIL"
                                                                        required
                                                                        readOnly
                                                                    />
                                                                </div>
                                                                <div className="form-group">
                                                                    <input
                                                                        id="name"
                                                                        name="name"
                                                                        value={
                                                                            formData.name
                                                                        }
                                                                        className="form-control"
                                                                        placeholder="YOUR NAME"
                                                                        required
                                                                        readOnly
                                                                    />
                                                                </div>
                                                                <div className="form-group message-group">
                                                                    <textarea
                                                                        id="content"
                                                                        name="content"
                                                                        className="form-control"
                                                                        placeholder="MESSAGE"
                                                                        value={
                                                                            formData.content
                                                                        }
                                                                        onChange={
                                                                            handleChange
                                                                        }
                                                                        required
                                                                    ></textarea>
                                                                </div>
                                                                <div className="form-group action-buttons">
                                                                    <button
                                                                        className="form-button"
                                                                        type="submit"
                                                                    >
                                                                        SEND
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default SendMail;
