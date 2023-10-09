interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
}

export default function Button({
  variant,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "text-[13px] font-bold py-2.5 px-5 rounded-full",
        variant === "secondary"
          ? "bg-primary bg-opacity-10 dark:bg-white text-primary"
          : "bg-primary hover:bg-primary-hover text-white",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
