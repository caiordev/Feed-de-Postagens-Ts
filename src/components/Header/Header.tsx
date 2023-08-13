import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img
        src="https://as2.ftcdn.net/v2/jpg/03/20/88/33/1000_F_320883393_q7ROQwEkFchU1WGGSfwxCG9X9CLUW0JD.jpg"
        alt="Logotipo do ignite"
      />
    </header>
  );
}
