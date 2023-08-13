import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./Post.module.css";
import { Comment } from "../Comment/Comment";
import { Avatar } from "../Avatar/Avatar";
import { useState } from "react";
export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState(["Post muito bacana, hein?!"]);
    const [newCommentText, setNewCommentText] = useState("");
    const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });
    function handleCreateNewComment(event) {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText("");
    }
    function handleNewCommentChange(event) {
        event.target.setCustomValidity("");
        setNewCommentText(event.target.value);
    }
    function handleNewCommentInvalid(event) {
        event.target.setCustomValidity("Esse campo é obrigatório");
    }
    function deleteComment(commentToDelete) {
        const commentsWithouDeleteOne = comments.filter((comment) => {
            return comment !== commentToDelete;
        });
        setComments(commentsWithouDeleteOne);
    }
    const isNewCommentEmpty = newCommentText.length === 0;
    return (_jsxs("article", { className: styles.post, children: [_jsxs("header", { children: [_jsxs("div", { className: styles.author, children: [_jsx(Avatar, { src: author.avatarUrl }), _jsxs("div", { className: styles.authorInfo, children: [_jsx("strong", { children: author.name }), _jsx("span", { children: author.role })] })] }), _jsx("time", { title: publishedDateFormat, dateTime: publishedAt.toISOString(), children: publishedDateRelativeToNow })] }), _jsx("div", { className: styles.content, children: content.map((line) => {
                    if (line.type === "paragraph") {
                        return _jsx("p", { children: line.content }, line.content);
                    }
                    else if (line.type === "link") {
                        return (_jsx("p", { children: _jsx("a", { href: "#", children: line.content }) }, line.content));
                    }
                }) }), _jsxs("form", { onSubmit: handleCreateNewComment, className: styles.commentForm, children: [_jsx("strong", { children: "Deixe seu coment\u00E1rio" }), _jsx("textarea", { name: "comment", placeholder: "Deixe um coment\u00E1rio", value: newCommentText, onChange: handleNewCommentChange, onInvalid: handleNewCommentInvalid, required: true }), _jsx("footer", { children: _jsx("button", { type: "submit", disabled: isNewCommentEmpty, children: "Publicar" }) })] }), _jsx("div", { className: styles.commentList, children: comments.map((comment) => {
                    return (_jsx(Comment, { content: comment, onDeleteComment: deleteComment }, comment));
                }) })] }));
}
