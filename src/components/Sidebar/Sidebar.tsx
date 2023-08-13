import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import styles from "../Sidebar/Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/caiordev.png" />
        <strong>Caio Reis</strong>
        <span>Web developer</span>
        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar perfil
          </a>
        </footer>
      </div>
    </aside>
  );
}
