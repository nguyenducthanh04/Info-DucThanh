import React, { useState, useEffect } from "react";
import "react-slideshow-image/dist/styles.css";
import { useMediaQuery } from "react-responsive";
import { apiProject, apiInterest } from "../../url-api";
import axios from "axios";
import "./interest.css";
import filmIcon from "../../assets/images/watching-a-movie.png";
import moDomDom from "../../assets/images/modomdom.jpg";
import dragonBall from "../../assets/images/dragonball.jpg";
import hvSieuAnhHung from "../../assets/images/hocvienanhhung2.jpg";
import hunter from "../../assets/images/hunter.webp";
import kimetsu from "../../assets/images/kimetsu.webp";

function Interest() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };
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
                    <div className="interest-self-mobile">
                        <div className="interest-title-mobile">
                            <h1>Sở thích</h1>
                        </div>
                        <div className="interest-film-mobile">
                            <div className="film-title-mobile">
                                <img src={filmIcon}></img>
                                <h2>Xem phim</h2>
                            </div>
                            <div className="film-content-mobile">
                                <a
                                    href="https://ndthah.vercel.app/detail/mo-dom-dom"
                                    target="_blank"
                                    className="link-film"
                                >
                                    <div
                                        className={`${
                                            isDarkMode
                                                ? "dark-mode-film-item-mobile"
                                                : "film-item-mobile"
                                        }`}
                                    >
                                        <div className="image-film-mobile">
                                            <img src={moDomDom}></img>
                                        </div>
                                        <div className="name-film-mobile">
                                            <h3>Mộ đom đóm</h3>
                                            <div className="content-film-mobile">
                                                <span>
                                                    Mộ đom đóm là một bộ phim
                                                    hoạt hình Nhật Bản của hãng
                                                    phim hoạt hình Ghibli sản
                                                    xuất năm 1988 do đạo diễn
                                                    Takahata Isao viết kịch bản
                                                    và đạo diễn. Bộ phim được
                                                    dựa theo cuốn tiểu thuyết
                                                    cùng tên của Nosaka Akiyuki
                                                    vốn được tác giả viết dưới
                                                    dạng bán tự truyện như là
                                                    một lời xin lỗi với người em
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
                                                ? "dark-mode-film-item-mobile"
                                                : "film-item-mobile"
                                        }`}
                                    >
                                        <div className="image-film-mobile">
                                            <img src={dragonBall}></img>
                                        </div>
                                        <div className="name-film-mobile">
                                            <h3>Dragon Ball</h3>
                                            <div className="content-film-mobile">
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
                                                ? "dark-mode-film-item-mobile"
                                                : "film-item-mobile"
                                        }`}
                                    >
                                        <div className="image-film-mobile">
                                            <img src={hvSieuAnhHung}></img>
                                        </div>
                                        <div className="name-film-mobile">
                                            <h3>Học viện siêu anh hùng</h3>
                                            <div className="content-film-mobile">
                                                <span>
                                                    Bộ truyện này được chuyển
                                                    thể thành phim truyền hình
                                                    Anime bởi Studio Bones. Mùa
                                                    đầu tiên lên sóng tại Nhật
                                                    Bản từ 3 tháng 4 đến 26
                                                    tháng 6 năm 2016, theo sau
                                                    bởi mùa thứ hai từ 1 tháng 4
                                                    đến 30 tháng 9 năm 2017. Mùa
                                                    thứ ba bắt đầu lên sóng từ 7
                                                    tháng 4 năm 2018, đồng thời
                                                    một bộ phim hoạt hình có tựa
                                                    đề Boku no Hero Academia:
                                                    Futari no Hero cũng được ra
                                                    mắt cùng năm.
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
                                                ? "dark-mode-film-item-mobile"
                                                : "film-item-mobile"
                                        }`}
                                    >
                                        <div className="image-film-mobile">
                                            <img src={hunter}></img>
                                        </div>
                                        <div className="name-film-mobile">
                                            <h3>Hunter X Hunter</h3>
                                            <div className="content-film-mobile">
                                                <span>
                                                    Bản anime đầu tiên của
                                                    Hunter × Hunter được sản
                                                    xuất bởi công ty Nippon
                                                    Animation và đạo diện bởi
                                                    Furuhashi Kazuhiro.
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
                                                ? "dark-mode-film-item-mobile"
                                                : "film-item-mobile"
                                        }`}
                                    >
                                        <div className="image-film-mobile">
                                            <img src={kimetsu}></img>
                                        </div>
                                        <div className="name-film-mobile">
                                            <h3>Thanh Gươm Diệt Quỷ</h3>
                                            <div className="content-film-mobile">
                                                <span>
                                                    Bộ này combat phải gọi là mê
                                                    luôn.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="box-mobile-4"></div>
                    </div>
                </div>
            ) : (
                <div
                    className={`${
                        isDarkMode ? "dark-mode-main-self" : "main-self"
                    }`}
                >
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
                                                    Mộ đom đóm là một bộ phim
                                                    hoạt hình Nhật Bản của hãng
                                                    phim hoạt hình Ghibli sản
                                                    xuất năm 1988 do đạo diễn
                                                    Takahata Isao viết kịch bản
                                                    và đạo diễn. Bộ phim được
                                                    dựa theo cuốn tiểu thuyết
                                                    cùng tên của Nosaka Akiyuki
                                                    vốn được tác giả viết dưới
                                                    dạng bán tự truyện như là
                                                    một lời xin lỗi với người em
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
                                                    Bộ truyện này được chuyển
                                                    thể thành phim truyền hình
                                                    Anime bởi Studio Bones. Mùa
                                                    đầu tiên lên sóng tại Nhật
                                                    Bản từ 3 tháng 4 đến 26
                                                    tháng 6 năm 2016, theo sau
                                                    bởi mùa thứ hai từ 1 tháng 4
                                                    đến 30 tháng 9 năm 2017. Mùa
                                                    thứ ba bắt đầu lên sóng từ 7
                                                    tháng 4 năm 2018, đồng thời
                                                    một bộ phim hoạt hình có tựa
                                                    đề Boku no Hero Academia:
                                                    Futari no Hero cũng được ra
                                                    mắt cùng năm.
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
                                                    Animation và đạo diện bởi
                                                    Furuhashi Kazuhiro.
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
                                                    Bộ này combat phải gọi là mê
                                                    luôn.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "100%", height: "50px" }}></div>
                </div>
            )}
        </div>
    );
}

export default Interest;
