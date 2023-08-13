import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./Avatar.module.css";
export function Avatar({ hasBorder = true, ...props }) {
    return (_jsx("img", { className: hasBorder ? styles.avatarWithBorder : styles.avatar, ...props }));
}
