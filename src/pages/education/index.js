import React, { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { useMediaQuery } from "react-responsive";
import "./education.css";
import graduationIcon from "../../assets/images/graduation.png";
import schoolBagIcon from "../../assets/images/school-bag.png";

function Education() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };
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
                    <div className="education-self-mobile">
                        <div className="education-title-mobile">
                            <h1>Học vấn</h1>
                        </div>
                        <div className="education-content-mobile">
                            <div className="history-education-mobile">
                                <div className="title-history-edu-mobile">
                                    <img src={graduationIcon}></img>
                                    <h2>Giáo dục</h2>
                                </div>
                                <div className="content-history-edu-mobile">
                                    <ul>
                                        <li>
                                            <div>
                                                <h4>Trường Đại Học Đại Nam</h4>
                                                <span
                                                    className={`${
                                                        isDarkMode
                                                            ? "dark-mode-date"
                                                            : "date"
                                                    }`}
                                                >
                                                    2022 - nay
                                                </span>
                                                <br></br>
                                                <p>
                                                    Vào học từ 2022 đến nay
                                                    những năm đầu của sinh viên,
                                                    học tập chưa rõ ràng định
                                                    hướng sẽ làm gì trong ngành
                                                    nghề này..., cho đến nay tập
                                                    trung vào con đường Web
                                                    Developer.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4>F8 </h4>
                                                <span
                                                    className={`${
                                                        isDarkMode
                                                            ? "dark-mode-date"
                                                            : "date"
                                                    }`}
                                                >
                                                    6/2023 - 2/2024
                                                </span>
                                                <p>
                                                    Biết đến F8 từ khi học HTML
                                                    CSS năm nhất ở trường, khi
                                                    đó tìm tòi kênh youtube dạy
                                                    HTML CSS may mắn biết đến
                                                    anh Sơn F8, sau đó anh Sơn
                                                    có mở lớp BackEnd Offline,
                                                    liền đăng ký và trở thành
                                                    học viên BackEnd khóa đầu
                                                    tiên.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="experience-education-mobile">
                                <div className="title-experience-edu-mobile">
                                    <img src={schoolBagIcon}></img>
                                    <h2>Kinh nghiệm</h2>
                                </div>
                                <div className="content-experience-edu-mobile">
                                    <ul>
                                        <li>
                                            <div>
                                                <h4>Rửa bát thuê</h4>
                                                <span
                                                    className={`${
                                                        isDarkMode
                                                            ? "dark-mode-date"
                                                            : "date"
                                                    }`}
                                                >
                                                    3/2022 - 5/2022
                                                </span>
                                                <p>
                                                    Từ 3/2022 đến 5/2022 em là
                                                    CEO của tổ chức rửa bát
                                                    thuê, tổng số bát đã rửa là
                                                    vô số kể, không đếm xuể...
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4>Phụ hồ</h4>
                                                <span
                                                    className={`${
                                                        isDarkMode
                                                            ? "dark-mode-date"
                                                            : "date"
                                                    }`}
                                                >
                                                    8/2021 - 12/2021
                                                </span>
                                                <p>
                                                    Tham gia công ty 2 tay 2 xô
                                                    vì thấy bảo nghề này hót,
                                                    làm được một thời gian thì
                                                    ra hót thật,....
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4>Học web</h4>
                                                <span
                                                    className={`${
                                                        isDarkMode
                                                            ? "dark-mode-date"
                                                            : "date"
                                                    }`}
                                                >
                                                    6/2023 - nay
                                                </span>
                                                <p>
                                                    Tìm tòi học hỏi về web vì
                                                    lúc đó học HTML CSS thấy
                                                    cuốn, sau một thời gian thì
                                                    không còn cảm thấy cuốn nữa.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="box-mobile-3"></div>
                    </div>
                </div>
            ) : (
                <div
                    className={`${
                        isDarkMode ? "dark-mode-main-self" : "main-self"
                    }`}
                >
                    <div className="education-self">
                        <div className="education-title">
                            <h1>Học vấn</h1>
                        </div>
                        <div className="education-content">
                            <div className="history-education">
                                <div className="title-history-edu">
                                    <img src={graduationIcon}></img>
                                    <h2>Giáo dục</h2>
                                </div>
                                <div className="content-history-edu">
                                    <ul>
                                        <li>
                                            <div>
                                                <h4>Trường Đại Học Đại Nam</h4>
                                                <span
                                                    className={`${
                                                        isDarkMode
                                                            ? "dark-mode-date"
                                                            : "date"
                                                    }`}
                                                >
                                                    2022 - nay
                                                </span>
                                                <br></br>
                                                <p>
                                                    Vào học từ 2022 đến nay
                                                    những năm đầu của sinh viên,
                                                    học tập chưa rõ ràng định
                                                    hướng sẽ làm gì trong ngành
                                                    nghề này..., cho đến nay tập
                                                    trung vào con đường Web
                                                    Developer.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4>F8 </h4>
                                                <span
                                                    className={`${
                                                        isDarkMode
                                                            ? "dark-mode-date"
                                                            : "date"
                                                    }`}
                                                >
                                                    6/2023 - 2/2024
                                                </span>
                                                <p>
                                                    Biết đến F8 từ khi học HTML
                                                    CSS năm nhất ở trường, khi
                                                    đó tìm tòi kênh youtube dạy
                                                    HTML CSS may mắn biết đến
                                                    anh Sơn F8, sau đó anh Sơn
                                                    có mở lớp BackEnd Offline,
                                                    liền đăng ký và trở thành
                                                    học viên BackEnd khóa đầu
                                                    tiên.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="experience-education">
                                <div className="title-experience-edu">
                                    <img src={schoolBagIcon}></img>
                                    <h2>Kinh nghiệm</h2>
                                </div>
                                <div className="content-experience-edu">
                                    <ul>
                                        <li>
                                            <div>
                                                <h4>Rửa bát thuê</h4>
                                                <span
                                                    className={`${
                                                        isDarkMode
                                                            ? "dark-mode-date"
                                                            : "date"
                                                    }`}
                                                >
                                                    3/2022 - 5/2022
                                                </span>
                                                <p>
                                                    Từ 3/2022 đến 5/2022 em là
                                                    CEO của tổ chức rửa bát
                                                    thuê, tổng số bát đã rửa là
                                                    rất nhiều...
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4>Phụ hồ</h4>
                                                <span
                                                    className={`${
                                                        isDarkMode
                                                            ? "dark-mode-date"
                                                            : "date"
                                                    }`}
                                                >
                                                    8/2021 - 12/2021
                                                </span>
                                                <p>
                                                    Tham gia công ty 2 tay 2 xô
                                                    vì thấy bảo nghề này hót,
                                                    làm được một thời gian thì
                                                    ra hót thật,....
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4>Học web</h4>
                                                <span
                                                    className={`${
                                                        isDarkMode
                                                            ? "dark-mode-date"
                                                            : "date"
                                                    }`}
                                                >
                                                    6/2023 - nay
                                                </span>
                                                <p>
                                                    Tìm tòi học hỏi về web vì
                                                    lúc đó học HTML CSS thấy
                                                    cuốn, sau một thời gian thì
                                                    không còn cảm thấy cuốn nữa.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                style={{ width: "100%", height: "40px" }}
                            ></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Education;
