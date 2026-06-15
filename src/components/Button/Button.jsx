import s from "./Button.module.css";

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <button
      className={`${s.button} ${s[variant]} ${s[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
