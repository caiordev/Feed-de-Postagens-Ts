import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img
        src="https://global-uploads.webflow.com/61d83a2ebb0ae01ab96e841a/63c86196beb3fd7cbcd3a1dd_Logo-ignite.svg"
        alt="Logotipo do ignite"
      />
    </header>
  );
}
