import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import styles from "../Sidebar/Sidebar.module.css";
export function Sidebar() {
    return (_jsxs("aside", { className: styles.sidebar, children: [_jsx("img", { className: styles.cover, src: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }), _jsxs("div", { className: styles.profile, children: [_jsx(Avatar, { src: "https://github.com/caiordev.png" }), _jsx("strong", { children: "Caio Reis" }), _jsx("span", { children: "Web developer" }), _jsx("footer", { children: _jsxs("a", { href: "#", children: [_jsx(PencilLine, { size: 20 }), "Editar perfil"] }) })] })] }));
}
