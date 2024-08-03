import React, { useState, useEffect, useCallback, useRef } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { ToastContainer, toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "../../api-url/base-url.js";
import "./blog-detail.css";
import axios from "axios";
function BlogDetail() {
    const { title } = useParams();
    const [blogDataDetail, setBlogDataDetail] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [replyTo, setReplyTo] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [comments, setComments] = useState([]);
    const [commentChild, setCommentChild] = useState([]);
    const [blogDataLoaded, setBlogDataLoaded] = useState(false);
    const [IdComment, setIdComment] = useState(null);
    const [isReplying, setIsReplying] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState("");
    const [currentCommentId, setCurrentCommentId] = useState(null);
    const commentInputRef = useRef(null);

    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const user = localStorage.getItem("user");
    const userParse = JSON.parse(user);
    const token = localStorage.getItem("token");
    const hasFetched = useRef(false);
    const replyInputRef = useRef(null);
    const fetchBlogData = async () => {
        try {
            if (!hasFetched.current) {
                hasFetched.current = true;
                console.log("Fetching blog data...");
                await axios.post(
                    `${baseUrl}/blog/increment-view/${title}`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const response = await axios.get(
                    `${baseUrl}/blog/get-blog/${title}`
                );
                setBlogDataDetail(response.data);
                setBlogDataLoaded(true);
            }
        } catch (error) {
            console.error("Error fetching blog data:", error);
            toast.error("Có lỗi xảy ra, vui lòng chờ tôi fix bug.");
        }
    };

    useEffect(() => {
        fetchBlogData();
    }, [title, token]);
    const fetchComments = async () => {
        try {
            if (blogDataDetail && blogDataDetail.id) {
                const response = await axios.get(
                    `${baseUrl}/blog/get-all-comment/${blogDataDetail.id}`
                );
                setComments(response.data);
                console.log("i:", response.data);
            }
        } catch (error) {
            console.error("Error fetching comments:", error);
            toast.error("Có lỗi xảy ra, vui lòng chờ tôi fix bug.");
        }
    };
    const fetchCommentChild = async () => {
        try {
            if (blogDataDetail && blogDataDetail.id) {
                const response = await axios.get(
                    `${baseUrl}/blog/get-comment-child/${blogDataDetail.id}`
                );
                setCommentChild(response.data);
            }
        } catch (error) {
            console.error("Error fetching comments:", error);
            toast.error("Có lỗi xảy ra, vui lòng chờ tôi fix bug.");
        }
    };
    useEffect(() => {
        if (blogDataLoaded) {
            fetchComments();
        }
    }, [blogDataLoaded, blogDataDetail]);
    useEffect(() => {
        if (blogDataLoaded) {
            fetchCommentChild();
        }
    }, [blogDataLoaded, blogDataDetail]);
    useEffect(() => {
        setIsReplying(inputValue.includes("@"));
    }, [inputValue]);
    function handleRocket() {
        scroll.scrollTo(replyInputRef.current.offsetTop, {
            duration: 500,
            offset: -100,
            smooth: true,
        });
    }
    useEffect(() => {
        if (commentInputRef.current && isEditing) {
            commentInputRef.current.value = editedContent;
        }
    }, [isEditing, editedContent]);
    const undoEdit = () => {
        setIsEditing(false);
    };
    const handleEditClick = (req) => {
        setIsEditing(true);
        setEditedContent(req.commentText);
        setCurrentCommentId(req.id);
    };
    const handleReplyClick = (username, commentId) => {
        setReplyTo(`@${username} `);
        setInputValue(`@${username} `);
        setIdComment(commentId);
        handleRocket();
    };
    const handleDeleteComment = async (commentId) => {
        try {
            const confirmed = window.confirm(
                "Bạn có chắc chắn muốn xóa bình luận này?"
            );
            if (!confirmed) {
                return;
            }
            await axios.delete(`${baseUrl}/blog/delete-comment`, {
                data: {
                    commentId,
                },
            });
            await fetchComments();
            await fetchCommentChild();
            toast.success("Xóa bình lụân thành công.", {
                icon: <FaCheckCircle style={{ color: "green" }} />,
            });
        } catch (error) {
            console.error(
                "An error occurred while deleting the comment:",
                error
            );
            toast.error("Có lỗi xảy ra, vui lòng chờ tôi fix bug.");
        }
    };
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${baseUrl}/blog/add-comment`, {
                blogId: blogDataDetail.id,
                userId: userParse.id,
                commentText: inputValue,
                parentCommentId: 0,
            });
            await fetchComments();
            toast.success("Bình lụân thành công.", {
                icon: <FaCheckCircle style={{ color: "green" }} />,
            });
            setInputValue("");
        } catch (error) {
            toast.error("Có lỗi xảy ra, vui lòng chờ tôi fix bug.");
            console.error("Error adding comment:", error);
        }
    };
    const handleSubmitCommentChild = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${baseUrl}/blog/rep-comment`, {
                blogId: blogDataDetail.id,
                userId: userParse.id,
                commentText: inputValue,
                parentCommentId: IdComment,
            });

            await fetchCommentChild();
            toast.success("Trả lời bình lụân thành công.", {
                icon: <FaCheckCircle style={{ color: "green" }} />,
            });

            setInputValue("");
        } catch (error) {
            toast.error("Có lỗi xảy ra, vui lòng chờ fix bug.");
            console.error("Error adding comment:", error);
        }
    };
    const handleSaveEdit = async () => {
        try {
            await axios.put(`${baseUrl}/blog/edit-comment`, {
                commentId: currentCommentId,
                content: editedContent,
            });
            await fetchComments();
            await fetchCommentChild();
            setIsEditing(false);
            toast.success("Cập nhật bình luận thành công.", {
                icon: <FaCheckCircle style={{ color: "green" }} />,
            });
        } catch (error) {
            toast.error("Có lỗi xảy ra, vui lòng chờ tôi fix bug.");
            console.error("Error editing comment:", error);
        }
    };

    return (
        <div>
            {isMobile ? (
                <div
                    className={`${
                        isDarkMode
                            ? "dark-mode-main-self-blog-detail-mobile"
                            : "main-self-blog-detail-mobile"
                    }`}
                >
                    <div class="container-mobile" style={{ padding: "20px" }}>
                        {blogDataDetail ? (
                            <div class="container">
                                <h2 className="title">
                                    {blogDataDetail.title}
                                </h2>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: blogDataDetail.contentHTML,
                                    }}
                                />
                            </div>
                        ) : (
                            <div>
                                <h4>Nội dung chưa được hiển thị...</h4>
                            </div>
                        )}
                        <div className="comment-user-mobile">
                            {token ? (
                                <div style={{ display: "flex" }}>
                                    <div className="avatar-user-mobile">
                                        <img src={userParse.avatar}></img>
                                    </div>
                                    <div className="comment-input-mobile">
                                        <div
                                            className="input-wrapper-mobile"
                                            ref={replyInputRef}
                                        >
                                            <textarea
                                                placeholder="Nhập bình luận của bạn..."
                                                value={inputValue}
                                                onChange={handleInputChange}
                                            ></textarea>
                                            {isReplying === true ? (
                                                <button
                                                    className="btn-comment-mobile"
                                                    onClick={
                                                        handleSubmitCommentChild
                                                    }
                                                >
                                                    Trả lời
                                                </button>
                                            ) : (
                                                <button
                                                    className="btn-comment-mobile"
                                                    onClick={handleSubmit}
                                                >
                                                    Bình luận
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <em>Vui lòng đăng nhập để thêm bình luận.</em>
                            )}
                        </div>
                        <div className="list-comment-mobile">
                            <div className="title-comment">
                                <h3>Bình luận</h3>
                            </div>
                            <div className="table-comment-mobile">
                                {comments && comments.length > 0 ? (
                                    comments?.map((comment) => (
                                        <React.Fragment key={comment.id}>
                                            <div className="comment-item-mobile">
                                                <div className="avatar-user-comment-item-mobile">
                                                    <img
                                                        src={
                                                            comment.User.avatar
                                                        }
                                                        alt="avatar"
                                                    ></img>
                                                </div>
                                                <div>
                                                    <h4
                                                        style={{
                                                            marginBottom: "8px",
                                                        }}
                                                    >
                                                        {comment.User.username}
                                                    </h4>
                                                    <em>
                                                        "{comment.commentText}"
                                                    </em>
                                                    <div
                                                        style={{
                                                            width: "60vw",
                                                            display: "flex",
                                                            justifyContent:
                                                                "flex-end",
                                                        }}
                                                    >
                                                        {comment &&
                                                        comment.User &&
                                                        comment.User.id &&
                                                        userParse &&
                                                        userParse.id &&
                                                        parseInt(
                                                            comment.User.id
                                                        ) ===
                                                            parseInt(
                                                                userParse.id
                                                            ) ? (
                                                            <div>
                                                                <span
                                                                    style={{
                                                                        color: "red",
                                                                        marginRight:
                                                                            "10px",
                                                                        cursor: "pointer",
                                                                    }}
                                                                    onClick={() =>
                                                                        handleDeleteComment(
                                                                            comment.id
                                                                        )
                                                                    }
                                                                >
                                                                    Xóa
                                                                </span>
                                                                <span
                                                                    style={{
                                                                        color: "yellow",
                                                                        marginRight:
                                                                            "10px",
                                                                        cursor: "pointer",
                                                                    }}
                                                                    onClick={() =>
                                                                        handleEditClick(
                                                                            comment
                                                                        )
                                                                    }
                                                                >
                                                                    Sửa
                                                                </span>
                                                            </div>
                                                        ) : (
                                                            ""
                                                        )}
                                                        {token ? (
                                                            <span
                                                                style={{
                                                                    color: "green",
                                                                    cursor: "pointer",
                                                                }}
                                                                onClick={() =>
                                                                    handleReplyClick(
                                                                        comment
                                                                            .User
                                                                            .username,
                                                                        comment.id
                                                                    )
                                                                }
                                                            >
                                                                Trả lời
                                                            </span>
                                                        ) : (
                                                            ""
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            {commentChild
                                                ?.filter(
                                                    (commentChildItem) =>
                                                        commentChildItem.parentCommentId ===
                                                        comment.id
                                                )
                                                .map((commentChildItem) => (
                                                    <div className="comment-item-child-mobile">
                                                        <div className="avatar-user-comment-item-mobile">
                                                            <img
                                                                src={
                                                                    commentChildItem
                                                                        .User
                                                                        .avatar
                                                                }
                                                                alt="avatar"
                                                            ></img>
                                                        </div>
                                                        <div>
                                                            <h4
                                                                style={{
                                                                    marginBottom:
                                                                        "8px",
                                                                }}
                                                            >
                                                                {
                                                                    commentChildItem
                                                                        .User
                                                                        .username
                                                                }
                                                            </h4>
                                                            <em>
                                                                "
                                                                {
                                                                    commentChildItem.commentText
                                                                }
                                                                "
                                                            </em>
                                                            <div
                                                                style={{
                                                                    width: "50vw",
                                                                    display:
                                                                        "flex",
                                                                    justifyContent:
                                                                        "flex-end",
                                                                }}
                                                            >
                                                                {commentChildItem &&
                                                                commentChildItem.User &&
                                                                commentChildItem
                                                                    .User.id &&
                                                                userParse &&
                                                                userParse.id &&
                                                                parseInt(
                                                                    commentChildItem
                                                                        .User.id
                                                                ) ===
                                                                    parseInt(
                                                                        userParse.id
                                                                    ) ? (
                                                                    <div>
                                                                        <span
                                                                            style={{
                                                                                color: "red",
                                                                                marginRight:
                                                                                    "10px",
                                                                                cursor: "pointer",
                                                                            }}
                                                                            onClick={() =>
                                                                                handleDeleteComment(
                                                                                    commentChildItem.id
                                                                                )
                                                                            }
                                                                        >
                                                                            Xóa
                                                                        </span>
                                                                        <span
                                                                            style={{
                                                                                color: "yellow",
                                                                                marginRight:
                                                                                    "10px",
                                                                                cursor: "pointer",
                                                                            }}
                                                                            onClick={() =>
                                                                                handleEditClick(
                                                                                    commentChildItem
                                                                                )
                                                                            }
                                                                        >
                                                                            Sửa
                                                                        </span>
                                                                    </div>
                                                                ) : (
                                                                    ""
                                                                )}
                                                                {token ? (
                                                                    <span
                                                                        style={{
                                                                            color: "green",
                                                                            cursor: "pointer",
                                                                        }}
                                                                        onClick={() =>
                                                                            handleReplyClick(
                                                                                commentChildItem
                                                                                    .User
                                                                                    .username,
                                                                                comment.id
                                                                            )
                                                                        }
                                                                    >
                                                                        Trả lời
                                                                    </span>
                                                                ) : (
                                                                    ""
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                        </React.Fragment>
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
                        </div>
                        {isEditing ? (
                            <div
                                style={{
                                    display: "flex",
                                    position: "fixed",
                                    bottom: "100px",
                                    marginLeft: "-20px",
                                }}
                            >
                                <div className="avatar-user-mobile">
                                    <img src={userParse.avatar}></img>
                                </div>
                                <div className="comment-input-mobile">
                                    <div
                                        className="input-wrapper-mobile-edit"
                                        ref={replyInputRef}
                                    >
                                        <textarea
                                            placeholder="Nhập bình luận của bạn..."
                                            id="comment-input"
                                            value={editedContent}
                                            onChange={(e) =>
                                                setEditedContent(e.target.value)
                                            }
                                            ref={commentInputRef}
                                        ></textarea>

                                        <button
                                            className="btn-comment-mobile-edit"
                                            onClick={handleSaveEdit}
                                        >
                                            Cập nhật
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        className="btn-undo"
                                        onClick={undoEdit}
                                    >
                                        Huỷ
                                    </button>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                        <div style={{ width: "100%", height: "50px" }}></div>
                    </div>
                </div>
            ) : (
                <div
                    className={`${
                        isDarkMode
                            ? "dark-mode-main-self-blog-detail"
                            : "main-self-blog-detail"
                    }`}
                >
                    {blogDataDetail ? (
                        <div class="container" style={{ padding: "20px" }}>
                            <h2 className="title">{blogDataDetail.title}</h2>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: blogDataDetail.contentHTML,
                                }}
                            />
                        </div>
                    ) : (
                        <div>
                            <h4>Nội dung chưa được hiển thị...</h4>
                        </div>
                    )}
                    <div className="comment-user">
                        {token ? (
                            <div style={{ display: "flex" }}>
                                <div className="avatar-user">
                                    <img src={userParse.avatar}></img>
                                </div>
                                <div className="comment-input">
                                    <div
                                        className="input-wrapper"
                                        ref={replyInputRef}
                                    >
                                        <textarea
                                            id="comment-input"
                                            placeholder="Nhập bình luận của bạn..."
                                            value={inputValue}
                                            onChange={handleInputChange}
                                        ></textarea>
                                        {isReplying === true ? (
                                            <button
                                                className="btn-comment"
                                                onClick={
                                                    handleSubmitCommentChild
                                                }
                                            >
                                                Trả lời
                                            </button>
                                        ) : (
                                            <button
                                                className="btn-comment"
                                                onClick={handleSubmit}
                                            >
                                                Bình luận
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <em>Vui lòng đăng nhập để thêm bình luận.</em>
                        )}
                    </div>
                    <div className="list-comment">
                        <div className="title-comment">
                            <h3>Bình luận</h3>
                        </div>
                        <div className="table-comment">
                            {comments && comments.length > 0 ? (
                                comments?.map((comment) => (
                                    <React.Fragment key={comment.id}>
                                        <div className="comment-item">
                                            <div>
                                                <img
                                                    src={comment.User.avatar}
                                                    alt="avatar"
                                                    className="avatar-user-comment-item"
                                                />
                                            </div>
                                            <div>
                                                <h4
                                                    style={{
                                                        marginBottom: "8px",
                                                    }}
                                                >
                                                    {comment.User.username}
                                                </h4>
                                                <em>"{comment.commentText}"</em>
                                                <div
                                                    style={{
                                                        width: "43vw",
                                                        display: "flex",
                                                        justifyContent:
                                                            "flex-end",
                                                    }}
                                                >
                                                    {comment &&
                                                    comment.User &&
                                                    comment.User.id &&
                                                    userParse &&
                                                    userParse.id &&
                                                    parseInt(
                                                        comment.User.id
                                                    ) ===
                                                        parseInt(
                                                            userParse.id
                                                        ) ? (
                                                        <div>
                                                            <span
                                                                style={{
                                                                    color: "red",
                                                                    marginRight:
                                                                        "10px",
                                                                    cursor: "pointer",
                                                                }}
                                                                onClick={() =>
                                                                    handleDeleteComment(
                                                                        comment.id
                                                                    )
                                                                }
                                                            >
                                                                Xóa
                                                            </span>
                                                            <span
                                                                style={{
                                                                    color: "yellow",
                                                                    marginRight:
                                                                        "10px",
                                                                    cursor: "pointer",
                                                                }}
                                                                onClick={() =>
                                                                    handleEditClick(
                                                                        comment
                                                                    )
                                                                }
                                                            >
                                                                Sửa
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        ""
                                                    )}
                                                    {token ? (
                                                        <span
                                                            style={{
                                                                color: "green",
                                                                cursor: "pointer",
                                                            }}
                                                            onClick={() =>
                                                                handleReplyClick(
                                                                    comment.User
                                                                        .username,
                                                                    comment.id
                                                                )
                                                            }
                                                        >
                                                            Trả lời
                                                        </span>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        {isEditing ? (
                                            <div
                                                style={{
                                                    display: "flex",
                                                    position: "fixed",
                                                    marginLeft: "-20px",
                                                    bottom: "0",
                                                }}
                                            >
                                                <div className="avatar-user">
                                                    <img
                                                        src={userParse.avatar}
                                                    ></img>
                                                </div>
                                                <div className="comment-input">
                                                    <div
                                                        className="input-wrapper"
                                                        ref={replyInputRef}
                                                    >
                                                        <textarea
                                                            id="comment-input"
                                                            value={
                                                                editedContent
                                                            }
                                                            onChange={(e) =>
                                                                setEditedContent(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            ref={
                                                                commentInputRef
                                                            }
                                                        ></textarea>

                                                        <button
                                                            className="btn-comment"
                                                            onClick={
                                                                handleSaveEdit
                                                            }
                                                        >
                                                            Cập nhật
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button
                                                        className="btn-undo"
                                                        onClick={undoEdit}
                                                    >
                                                        Huỷ
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                        {commentChild
                                            ?.filter(
                                                (commentChildItem) =>
                                                    commentChildItem.parentCommentId ===
                                                    comment.id
                                            )
                                            .map((commentChildItem) => (
                                                <div
                                                    key={commentChildItem.id}
                                                    className="comment-item-child"
                                                >
                                                    <div>
                                                        <img
                                                            src={
                                                                commentChildItem
                                                                    .User.avatar
                                                            }
                                                            alt="avatar"
                                                            className="avatar-user-comment-item"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4
                                                            style={{
                                                                marginBottom:
                                                                    "8px",
                                                            }}
                                                        >
                                                            {
                                                                commentChildItem
                                                                    .User
                                                                    .username
                                                            }
                                                        </h4>
                                                        <em>
                                                            "
                                                            {
                                                                commentChildItem.commentText
                                                            }
                                                            "
                                                        </em>
                                                        <div
                                                            style={{
                                                                width: "41vw",
                                                                display: "flex",
                                                                justifyContent:
                                                                    "flex-end",
                                                            }}
                                                        >
                                                            {commentChildItem &&
                                                            commentChildItem.User &&
                                                            commentChildItem
                                                                .User.id &&
                                                            userParse &&
                                                            userParse.id &&
                                                            parseInt(
                                                                commentChildItem
                                                                    .User.id
                                                            ) ===
                                                                parseInt(
                                                                    userParse.id
                                                                ) ? (
                                                                <div>
                                                                    <span
                                                                        style={{
                                                                            color: "red",
                                                                            marginRight:
                                                                                "10px",
                                                                            cursor: "pointer",
                                                                            display:
                                                                                "inline-block",
                                                                        }}
                                                                        onClick={() =>
                                                                            handleDeleteComment(
                                                                                commentChildItem.id
                                                                            )
                                                                        }
                                                                    >
                                                                        Xóa
                                                                    </span>
                                                                    <span
                                                                        style={{
                                                                            color: "yellow",
                                                                            marginRight:
                                                                                "10px",
                                                                            cursor: "pointer",
                                                                            display:
                                                                                "inline-block",
                                                                        }}
                                                                        onClick={() =>
                                                                            handleEditClick(
                                                                                commentChildItem
                                                                            )
                                                                        }
                                                                    >
                                                                        Sửa
                                                                    </span>
                                                                </div>
                                                            ) : (
                                                                ""
                                                            )}
                                                            {token ? (
                                                                <span
                                                                    style={{
                                                                        color: "green",
                                                                        cursor: "pointer",
                                                                    }}
                                                                    onClick={() =>
                                                                        handleReplyClick(
                                                                            commentChildItem
                                                                                .User
                                                                                .username,
                                                                            comment.id
                                                                        )
                                                                    }
                                                                >
                                                                    Trả lời
                                                                </span>
                                                            ) : (
                                                                ""
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                    </React.Fragment>
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
                    </div>

                    <div style={{ width: "100%", height: "50px" }}></div>
                    <ToastContainer />
                </div>
            )}
        </div>
    );
}

export default BlogDetail;
