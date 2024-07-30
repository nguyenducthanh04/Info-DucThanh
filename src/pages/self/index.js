import React, { useState, useEffect } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { useMediaQuery } from "react-responsive";
import { apiProject, apiInterest } from "../../url-api";
import axios from "axios";
import "./self.css";

function Sefl() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [projects, setProjects] = useState([]);
    const [interests, setInterests] = useState([]);
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };
    useEffect(() => {
        const fetchProjectData = async () => {
            try {
                const response = await axios.get(`${apiProject}`);
                setProjects(response.data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };
        fetchProjectData();
    }, []);

    useEffect(() => {
        const fetchInterestData = async () => {
            try {
                const response = await axios.get(`${apiInterest}`);
                setInterests(response.data);
            } catch (error) {
                console.error("Error fetching interests:", error);
            }
        };
        fetchInterestData();
    }, []);
    // useEffect(() => {
    //     document.body.style.backgroundColor = isDarkMode ? "black" : "white";
    // }, [isDarkMode]);
    return (
        <div>
            {isMobile ? (
                <div
                    className={`${
                        isDarkMode
                            ? "dark-mode-main-self-mobile"
                            : "main-self-mobile"
                    }`}
                >
                    <div className="about-self-mobile">
                        <div className="general-mobile">
                            <div className="about-title-mobile">
                                <h1>Giới thiệu</h1>
                            </div>
                            <div className="about-content-mobile">
                                <p className="p-1-mobile">
                                    Mình là một sinh viên của trường đại học Đại
                                    Nam. Mình đang học tập chuyên ngành Công
                                    Nghệ Thông Tin.
                                </p>
                                <p className="p-2-mobile">
                                    Nhưng ước mơ của mình vẫn là được đứng trong
                                    hàng ngũ của lực lượng CAND, mình luôn phấn
                                    đấu hết mình để không phải hối tiếc điều gì
                                    ở tuổi trẻ.
                                </p>
                            </div>
                        </div>
                        <div className="project-mobile">
                            <div className="project-title-mobile">
                                <h3>Mình đã làm được</h3>
                            </div>
                            <div className="list-project-mobile">
                                {projects?.map((project) => (
                                    <div
                                        className="project-item-mobile"
                                        key={project.id}
                                    >
                                        <a
                                            href={project.pageUrl}
                                            target="_blank"
                                        >
                                            <div className="img-project-mobile">
                                                <img
                                                    src={project.imageUrl}
                                                    className="image-prj-mobile"
                                                ></img>
                                            </div>
                                        </a>
                                        <div className="name-project-mobile">
                                            <a
                                                href={project.pageUrl}
                                                target="_blank"
                                            >
                                                <h4
                                                    className={`${
                                                        isDarkMode
                                                            ? "dark-mode-name-project"
                                                            : ""
                                                    }`}
                                                >
                                                    {project.name}
                                                </h4>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="motivation-mobile">
                            <div className="motivation-title-mobile">
                                <h3>Những câu nói mình thích nhất</h3>
                            </div>
                            <div className="slide-mobile">
                                <Slide key={interests.length}>
                                    {interests?.map((interest) => (
                                        <div
                                            className="each-slide-effect-mobile"
                                            key={interest.id}
                                        >
                                            <div
                                                style={{
                                                    background: ``,
                                                    borderRadius: "20px",
                                                }}
                                            >
                                                <div className="motivation-item-mobile">
                                                    <div className="image-person-mobile">
                                                        <img
                                                            src={
                                                                interest.urlImagePerson
                                                            }
                                                        ></img>
                                                    </div>
                                                    <div className="person-info-mobile">
                                                        <h3 className="name-person-mobile">
                                                            {
                                                                interest.namePerson
                                                            }
                                                        </h3>
                                                        <div
                                                            classname="said-mobile"
                                                            style={{
                                                                width: "150px",
                                                            }}
                                                        >
                                                            <em>
                                                                "
                                                                {
                                                                    interest.content
                                                                }
                                                                "
                                                            </em>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slide>
                            </div>
                        </div>
                        <div className="box-mobile-2"></div>
                    </div>
                </div>
            ) : (
                <div
                    className={`${
                        isDarkMode ? "dark-mode-main-self" : "main-self"
                    }`}
                >
                    <div className="about-self">
                        <div className="general">
                            <div className="about-title">
                                <h1>Giới thiệu</h1>
                            </div>
                            <div className="about-content">
                                <p className="p-1">
                                    Mình là một sinh viên của trường đại học Đại
                                    Nam. Mình đang học tập chuyên ngành Công
                                    Nghệ Thông Tin.
                                </p>
                                <p className="p-2">
                                    Nhưng ước mơ của mình vẫn là được đứng trong
                                    hàng ngũ của lực lượng CAND, mình luôn phấn
                                    đấu hết mình để không phải hối tiếc điều gì
                                    ở tuổi trẻ.
                                </p>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project-title">
                                <h3>Mình đã làm được</h3>
                            </div>
                            <div className="list-project">
                                {projects?.map((project) => (
                                    <div
                                        className="project-item"
                                        key={project.id}
                                    >
                                        <a
                                            href={project.pageUrl}
                                            target="_blank"
                                        >
                                            <div className="img-project">
                                                <img
                                                    src={project.imageUrl}
                                                    className="image-prj"
                                                ></img>
                                            </div>
                                        </a>
                                        <div className="name-project">
                                            <a
                                                href={project.pageUrl}
                                                target="_blank"
                                            >
                                                <h4
                                                    className={`${
                                                        isDarkMode
                                                            ? "dark-mode-name-project"
                                                            : "name-mobile"
                                                    }`}
                                                >
                                                    {project.name}
                                                </h4>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="motivation">
                            <div className="motivation-title">
                                <h3>Những câu nói mình thích nhất</h3>
                            </div>
                            <div className="slide">
                                <Slide key={interests.length}>
                                    {interests?.map((interest) => (
                                        <div
                                            className="each-slide-effect"
                                            key={interest.id}
                                        >
                                            <div
                                                style={{
                                                    background: ``,
                                                    borderRadius: "20px",
                                                }}
                                            >
                                                <div className="motivation-item">
                                                    <div className="image-person">
                                                        <img
                                                            src={
                                                                interest.urlImagePerson
                                                            }
                                                        ></img>
                                                    </div>
                                                    <div className="person-info">
                                                        <h3 className="name-person">
                                                            {
                                                                interest.namePerson
                                                            }
                                                        </h3>
                                                        <div classname="said">
                                                            <em>
                                                                "
                                                                {
                                                                    interest.content
                                                                }
                                                                "
                                                            </em>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slide>
                            </div>
                        </div>
                        <div style={{ width: "100%", height: "10px" }}></div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Sefl;
