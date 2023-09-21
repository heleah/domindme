import styles from "./TodoButton.module.scss";

export default function TodoButton({ children, handleClick }: any) {
  return (
    <button className={styles.todoButton} onClick={handleClick}>
      {children}
    </button>
  );
}
