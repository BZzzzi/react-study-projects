import styles from "./Button.module.css";

function Button({ className = "", variant = "primary", ...props }) {
  const classNames = `${styles.button} ${styles[variant]} ${className}`;

  return (
    <div>
      <button className={classNames} {...props} />
    </div>
  );
}

export default Button;
