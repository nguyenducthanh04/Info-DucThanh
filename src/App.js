import React, { useState, useEffect } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { apiProject, apiInterest } from "./url-api";
import axios from "axios";
import "./App.css";
import avatar from "../src/assets/images/thanh3.jpg";
import facebookIcon from "../src/assets/images/facebook.png";
import instagramIcon from "../src/assets/images/instagram.png";
import tiktokIcon from "../src/assets/images/video.png";
import githubIcon from "../src/assets/images/github.png";
import personIcon from "../src/assets/images/person.png";
import bookIcon from "../src/assets/images/open-book.png";
import heartIcon from "../src/assets/images/heart.png";
import project3 from "../src/assets/images/project_3.jpeg";
import tbt from "../src/assets/images/tbt_nguyenphutrong.jpg";
import presidentHoChiMinh from "../src/assets/images/chu-tich-ho-chi-minh.jpeg";
import graduationIcon from "../src/assets/images/graduation.png";
import schoolBagIcon from "../src/assets/images/school-bag.png";
import filmIcon from "../src/assets/images/watching-a-movie.png";
import moDomDom from "../src/assets/images/modomdom.jpg";
import dragonBall from "../src/assets/images/dragonball.jpg";
import hvSieuAnhHung from "../src/assets/images/hocvienanhhung2.jpg";
import hunter from "../src/assets/images/hunter.webp";
import kimetsu from "../src/assets/images/kimetsu.webp";
import worldDark from "../src/assets/images/globe.png";
import worldLight from "../src/assets/images/earth.png";
function App() {
    const [activeSection, setActiveSection] = useState("about");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [projects, setProjects] = useState([]);
    const [interests, setInterests] = useState([]);

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
    useEffect(() => {
        document.body.style.backgroundColor = isDarkMode ? "black" : "white";
    }, [isDarkMode]);

    return (
        <div className="App">
            <div className={`${isDarkMode ? "dark-mode-info" : "info"}`}>
                <div className="personal-info">
                    <div className="avatar">
                        <img src={avatar} alt="avatar"></img>
                    </div>
                    <div className="person-name-social">
                        <div className="name">
                            <h2>Nguyễn Đức Thanh</h2>
                        </div>
                        <div className="jobs">
                            <em>Sinh Viên</em>
                        </div>
                        <div className="social">
                            <a
                                href="https://www.facebook.com/profile.php?id=100029011241481"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="icon">
                                    <img
                                        src={facebookIcon}
                                        className="icon-facebook"
                                        alt="facebook"
                                    ></img>
                                </div>
                            </a>
                            <a
                                href="https://www.instagram.com/thah_dng/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="icon">
                                    <img
                                        src={instagramIcon}
                                        className="icon-instagram"
                                        alt="instagram"
                                    ></img>
                                </div>
                            </a>
                            <a href="">
                                <div className="icon">
                                    <img
                                        src={tiktokIcon}
                                        className="icon-tiktok"
                                        alt="tiktok"
                                    ></img>
                                </div>
                            </a>
                            <a
                                href="https://github.com/nguyenducthanh04"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="icon">
                                    <img
                                        src={githubIcon}
                                        className="icon-github"
                                        alt="github"
                                    ></img>
                                </div>
                            </a>
                            {isDarkMode ? (
                                <div className="icon" onClick={toggleTheme}>
                                    <img
                                        src={worldLight}
                                        className="icon-world-light"
                                        alt="world"
                                    ></img>
                                </div>
                            ) : (
                                <div className="icon" onClick={toggleTheme}>
                                    <img
                                        src={worldDark}
                                        className="icon-world-dark"
                                        alt="world"
                                    ></img>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="vertical-inline"></div>
                <div className="info-text">
                    <div className="info-text-1">
                        <div className="email">
                            <h5 className="title-info-text">EMAIL</h5>
                            <span>dducthanh04@gmail.com</span>
                        </div>
                        <div className="birth-day">
                            <h5 className="title-info-text">NGÀY SINH</h5>
                            <span>08/10/2004</span>
                        </div>
                    </div>
                    <div className="info-text-2">
                        <div className="phone">
                            <h5 className="title-info-text">SỐ ĐIỆN THOẠI</h5>
                            <span>058**6*666</span>
                        </div>
                        <div className="country">
                            <h5 className="title-info-text">QUÊ QUÁN</h5>
                            <span>Hưng Yên, Việt Nam</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div
                    className={`${
                        isDarkMode ? "dark-mode-sidebar" : "sidebar"
                    }`}
                >
                    <div
                        className="self"
                        onClick={() => setActiveSection("about")}
                    >
                        <div className="icon-self">
                            <img
                                src={personIcon}
                                className="person-icon"
                                alt="self"
                            ></img>
                        </div>
                        <div className="title-self">
                            <h3>BẢN THÂN</h3>
                        </div>
                    </div>
                    <div
                        className="education"
                        onClick={() => setActiveSection("education")}
                    >
                        <div className="icon-edu">
                            <img
                                src={bookIcon}
                                className="book-icon"
                                alt="education"
                            ></img>
                        </div>
                        <div className="title-edu">
                            <h3>HỌC VẤN</h3>
                        </div>
                    </div>
                    <div
                        className="interest"
                        onClick={() => setActiveSection("interest")}
                    >
                        <div className="icon-interest">
                            <img
                                src={heartIcon}
                                className="heart-icon"
                                alt="interest"
                            ></img>
                        </div>
                        <div className="title-interest">
                            <h3>SỞ THÍCH</h3>
                        </div>
                    </div>
                </div>
                <div
                    className={`${
                        isDarkMode ? "dark-mode-main-self" : "main-self"
                    }`}
                >
                    {activeSection === "about" && (
                        <div className="about-self">
                            <div className="general">
                                <div className="about-title">
                                    <h1>Giới thiệu</h1>
                                </div>
                                <div className="about-content">
                                    <p className="p-1">
                                        Mình là một sinh viên của trường đại học
                                        Đại Nam. Mình đang học tập chuyên ngành
                                        Công Nghệ Thông Tin.
                                    </p>
                                    <p className="p-2">
                                        Nhưng ước mơ của mình vẫn là được đứng
                                        trong hàng ngũ của lực lượng CAND, mình
                                        luôn phấn đấu hết mình để không phải hối
                                        tiếc điều gì ở tuổi trẻ.
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
                        </div>
                    )}
                    {activeSection === "education" && (
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
                                                    <h4>
                                                        Trường Đại Học Đại Nam
                                                    </h4>
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
                                                        những năm đầu của sinh
                                                        viên, học tập chưa rõ
                                                        ràng định hướng sẽ làm
                                                        gì trong ngành nghề
                                                        này..., cho đến nay tập
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
                                                        Biết đến F8 từ khi học
                                                        HTML CSS năm nhất ở
                                                        trường, khi đó tìm tòi
                                                        kênh youtube dạy HTML
                                                        CSS may mắn biết đến anh
                                                        Sơn F8, sau đó anh Sơn
                                                        có mở lớp BackEnd
                                                        Offline, liền đăng ký và
                                                        trở thành học viên
                                                        BackEnd khóa đầu tiên.
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
                                                        Từ 3/2022 đến 5/2022 em
                                                        là CEO của tổ chức rửa
                                                        bát thuê, tổng số bát đã
                                                        rửa là rất nhiều...
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
                                                        Tham gia công ty 2 tay 2
                                                        xô vì thấy bảo nghề này
                                                        hót, làm được một thời
                                                        gian thì ra hót
                                                        thật,....
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
                                                        Tìm tòi học hỏi về web
                                                        vì lúc đó học HTML CSS
                                                        thấy cuốn, sau một thời
                                                        gian thì không còn cảm
                                                        thấy cuốn nữa.
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeSection === "interest" && (
                        <div className="interest-self">
                            <div className="interest-title">
                                <h1>Sở thích</h1>
                            </div>
                            <div className="interest-film">
                                <div className="film-title">
                                    <img src={filmIcon}></img>
                                    <h2>Xem phim</h2>
                                </div>
                                <div className="film-content">
                                    <a
                                        href="https://ndthah.vercel.app/detail/mo-dom-dom"
                                        target="_blank"
                                        className="link-film"
                                    >
                                        <div
                                            className={`${
                                                isDarkMode
                                                    ? "dark-mode-film-item"
                                                    : "film-item"
                                            }`}
                                        >
                                            <div className="image-film">
                                                <img src={moDomDom}></img>
                                            </div>
                                            <div className="name-film">
                                                <h3>Mộ đom đóm</h3>
                                                <div className="content-film">
                                                    <span>
                                                        Mộ đom đóm là một bộ
                                                        phim hoạt hình Nhật Bản
                                                        của hãng phim hoạt hình
                                                        Ghibli sản xuất năm 1988
                                                        do đạo diễn Takahata
                                                        Isao viết kịch bản và
                                                        đạo diễn. Bộ phim được
                                                        dựa theo cuốn tiểu
                                                        thuyết cùng tên của
                                                        Nosaka Akiyuki vốn được
                                                        tác giả viết dưới dạng
                                                        bán tự truyện như là một
                                                        lời xin lỗi với người em
                                                        gái của chính tác giả.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        href="https://ndthah.vercel.app/detail/dragon-ball-kai"
                                        target="_blank"
                                        className="link-film"
                                    >
                                        <div
                                            className={`${
                                                isDarkMode
                                                    ? "dark-mode-film-item"
                                                    : "film-item"
                                            }`}
                                        >
                                            <div className="image-film">
                                                <img src={dragonBall}></img>
                                            </div>
                                            <div className="name-film">
                                                <h3>Dragon Ball</h3>
                                                <div className="content-film">
                                                    <span>
                                                        Bộ này phải gọi là huyền
                                                        thoại của anh em rồi..
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        href="https://ndthah.vercel.app/detail/hoc-vien-sieu-anh-hung-mua-7"
                                        target="_blank"
                                        className="link-film"
                                    >
                                        <div
                                            className={`${
                                                isDarkMode
                                                    ? "dark-mode-film-item"
                                                    : "film-item"
                                            }`}
                                        >
                                            <div className="image-film">
                                                <img src={hvSieuAnhHung}></img>
                                            </div>
                                            <div className="name-film">
                                                <h3>Học viện siêu anh hùng</h3>
                                                <div className="content-film">
                                                    <span>
                                                        Bộ truyện này được
                                                        chuyển thể thành phim
                                                        truyền hình Anime bởi
                                                        Studio Bones. Mùa đầu
                                                        tiên lên sóng tại Nhật
                                                        Bản từ 3 tháng 4 đến 26
                                                        tháng 6 năm 2016, theo
                                                        sau bởi mùa thứ hai từ 1
                                                        tháng 4 đến 30 tháng 9
                                                        năm 2017. Mùa thứ ba bắt
                                                        đầu lên sóng từ 7 tháng
                                                        4 năm 2018, đồng thời
                                                        một bộ phim hoạt hình có
                                                        tựa đề Boku no Hero
                                                        Academia: Futari no Hero
                                                        cũng được ra mắt cùng
                                                        năm.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        href="https://ndthah.vercel.app/detail/tho-san-ti-hon"
                                        target="_blank"
                                        className="link-film"
                                    >
                                        <div
                                            className={`${
                                                isDarkMode
                                                    ? "dark-mode-film-item"
                                                    : "film-item"
                                            }`}
                                        >
                                            <div className="image-film">
                                                <img src={hunter}></img>
                                            </div>
                                            <div className="name-film">
                                                <h3>Hunter X Hunter</h3>
                                                <div className="content-film">
                                                    <span>
                                                        Bản anime đầu tiên của
                                                        Hunter × Hunter được sản
                                                        xuất bởi công ty Nippon
                                                        Animation và đạo diện
                                                        bởi Furuhashi Kazuhiro.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        href="https://ndthah.vercel.app/detail/thanh-guom-diet-quy-dai-tru-dac-huan"
                                        target="_blank"
                                        className="link-film"
                                    >
                                        <div
                                            className={`${
                                                isDarkMode
                                                    ? "dark-mode-film-item"
                                                    : "film-item"
                                            }`}
                                        >
                                            <div className="image-film">
                                                <img src={kimetsu}></img>
                                            </div>
                                            <div className="name-film">
                                                <h3>Thanh Gươm Diệt Quỷ</h3>
                                                <div className="content-film">
                                                    <span>
                                                        Bộ này combat phải gọi
                                                        là mê luôn.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
