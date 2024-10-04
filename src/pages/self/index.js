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
                setInterests(response.data.data);
            } catch (error) {
                console.error("Error fetching interests:", error);
            }
        };
        fetchInterestData();
    }, []);
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
                                    Mình luôn phấn đấu hết mình học hỏi các công nghệ mới nhất, để bổ sung thật nhiều vào kiến thức công nghệ của mình.
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
                                    {/* {interests?.map((interest) => ( */}
                                        <div
                                            className="each-slide-effect-mobile"
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
                                                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJuDEjucREp6YH0a2abgVax1k6KJc8yzEFw&s"
                                                            }
                                                        ></img>
                                                    </div>
                                                    <div className="person-info-mobile">
                                                        <h3 className="name-person-mobile">
                                                                Chủ tịch Hồ Chí Minh    
                                                        </h3>
                                                        <div
                                                            classname="said-mobile"
                                                            style={{
                                                                width: "150px",
                                                            }}
                                                        >
                                                            <em>
                                                                "
                                                                Học để làm việc, làm người, làm cán bộ. Học để phụng sự Đoàn thể. Giai cấp nhân dân. Tổ quốc và nhân loại. Muốn đạt được mục đích phải cần, kiệm, liêm chính, chí công vô tư.
                                                                "
                                                            </em>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="each-slide-effect-mobile"
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
                                                                "https://nld.mediacdn.vn/291774122806476800/2024/7/18/1-1693191071441870096385-1721285198080592141214.jpeg"
                                                            }
                                                        ></img>
                                                    </div>
                                                    <div className="person-info-mobile">
                                                        <h3 className="name-person-mobile">
                                                                Tổng bí thư Nguyễn Phú Trọng   
                                                        </h3>
                                                        <div
                                                            classname="said-mobile"
                                                            style={{
                                                                width: "150px",
                                                            }}
                                                        >
                                                            <em>
                                                                "
                                                                Cái quý nhất của con người là cuộc sống và danh dự sống, bởi đời người chỉ sống có 1 lần. Phải sống sao cho khỏi xót xa, ân hận vì những năm tháng đã sống hoài, sống phí, để khỏi hổ thẹn vì những việc làm ty tiện, đớn hèn, cả đời ta, tất cả sức ta, ta đã hiến dâng cho sự nghiệp cao đẹp nhất trên đời - sự nghiệp đấu tranh giải phóng dân tộc, giải phóng con người, mang lại hạnh phúc cho Nhân dân!"
                                                                "
                                                            </em>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    {/* ))} */}
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
                                Mình luôn phấn đấu hết mình học hỏi các công nghệ mới nhất, để bổ sung thật nhiều vào kiến thức công nghệ của mình.
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
                                    {/* {interests?.map((interest) => ( */}
                                        <div
                                            className="each-slide-effect"
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
                                                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJuDEjucREp6YH0a2abgVax1k6KJc8yzEFw&s"
                                                            }
                                                        ></img>
                                                    </div>
                                                    <div className="person-info">
                                                        <h3 className="name-person">
                                                            Chủ tịch Hồ Chí Minh
                                                        </h3>
                                                        <div classname="said">
                                                            <em>
                                                                "
                                                                Học để làm việc, làm người, làm cán bộ. Học để phụng sự Đoàn thể. Giai cấp nhân dân. Tổ quốc và nhân loại. Muốn đạt được mục đích phải cần, kiệm, liêm chính, chí công vô tư.
                                                                "
                                                            </em>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="each-slide-effect"
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
                                                                "https://nld.mediacdn.vn/291774122806476800/2024/7/18/1-1693191071441870096385-1721285198080592141214.jpeg"
                                                            }
                                                        ></img>
                                                    </div>
                                                    <div className="person-info">
                                                        <h3 className="name-person">
                                                            Tổng bí thư Nguyễn Phú Trọng
                                                        </h3>
                                                        <div classname="said">
                                                            <em>
                                                                "
                                                                Cái quý nhất của con người là cuộc sống và danh dự sống, bởi đời người chỉ sống có 1 lần. Phải sống sao cho khỏi xót xa, ân hận vì những năm tháng đã sống hoài, sống phí, để khỏi hổ thẹn vì những việc làm ty tiện, đớn hèn, cả đời ta, tất cả sức ta, ta đã hiến dâng cho sự nghiệp cao đẹp nhất trên đời - sự nghiệp đấu tranh giải phóng dân tộc, giải phóng con người, mang lại hạnh phúc cho Nhân dân!"
                                                                "
                                                            </em>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    {/* ))} */}
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
