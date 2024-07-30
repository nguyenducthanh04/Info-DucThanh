// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../src/component/header/index.js";
import SideBar from "./component/sidebar/index.js";
import Self from "./pages/self/index.js";
import Education from "./pages/education/index.js";
import Interest from "./pages/interest/index.js";
import SendMail from "./pages/sendmail/index.js";
const App = () => {
    return (
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
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
