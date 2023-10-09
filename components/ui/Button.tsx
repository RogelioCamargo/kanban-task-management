interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
}

export default function Button({
  variant,
  children,
  className,
  ...props
}: ButtonProps) {
  if (variant === "secondary") {
    return (
      <button
        className={[
          "bg-primary bg-opacity-10 dark:bg-white text-[13px] font-bold text-primary py-2.5 px-5 rounded-full",
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={[
        "bg-primary hover:bg-primary-hover text-[13px] font-bold text-white py-2.5 px-5 rounded-full",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
