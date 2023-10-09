import React from "react";

export default function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
			type="text"
      className={[
        "block text-gray-500 dark:text-white outline-primary w-full text-[13px] py-2 px-4 rounded-md dark:bg-gray-500 border dark:border-gray-400 mt-2 placeholder-gray-300",
        className,
      ].join(" ")}
      {...props}
    />
  );
}
