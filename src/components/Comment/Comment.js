import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";
export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);
    function handleDeleteComment() {
        onDeleteComment(content);
    }
    function handleLikeCommnet() {
        setLikeCount(likeCount + 1);
    }
    return (_jsxs("div", { className: styles.comment, children: [_jsx(Avatar, { hasBorder: false, src: "https://github.com/caiordev.png", alt: "" }), _jsxs("div", { className: styles.commentBox, children: [_jsxs("div", { className: styles.commentContent, children: [_jsxs("header", { children: [_jsxs("div", { className: styles.authorAndTime, children: [_jsx("strong", { children: "Caio Reis" }), _jsx("time", { title: "11 de Maio \u00E0s 09:13h", dateTime: "2022-05-11 08:13:38", children: "Cerca de 1h atr\u00E1s" })] }), _jsx("button", { onClick: handleDeleteComment, title: "Deletar coment\u00E1rio", children: _jsx(Trash, { size: 24 }) })] }), _jsx("p", { children: content })] }), _jsx("footer", { children: _jsxs("button", { onClick: handleLikeCommnet, children: [_jsx(ThumbsUp, {}), "Aplaudir ", _jsx("span", { children: likeCount })] }) })] })] }));
}
