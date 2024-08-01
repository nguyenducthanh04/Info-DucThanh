// src/App.js
import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./Users/UserContext.js";
import Header from "../src/component/header/index.js";
import SideBar from "./component/sidebar/index.js";
import Self from "./pages/self/index.js";
import Education from "./pages/education/index.js";
import Interest from "./pages/interest/index.js";
import SendMail from "./pages/sendmail/index.js";
import Login from "./pages/login/index.js";
import Profile from "./pages/profile/index.js";
import Blog from "./pages/blog/index.js";
import BlogDetail from "./pages/blog-detail/index.js";
const App = () => {
    return (
        <UserProvider>
            <Router>
                <div className="app">
                    <Header />
                    <div
                        style={{
                            display: "flex",
                            marginTop: "30px",
                            margin: "0",
                        }}
                    >
                        <SideBar />
                        <Routes>
                            <Route path="/" element={<Self />} />
                            <Route path="/education" element={<Education />} />
                            <Route path="/interest" element={<Interest />} />
                            <Route path="/send-mail" element={<SendMail />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route
                                path="/blog-detail/:title"
                                element={<BlogDetail />}
                            />
                        </Routes>
                    </div>
                </div>
            </Router>
        </UserProvider>
    );
};

export default App;
