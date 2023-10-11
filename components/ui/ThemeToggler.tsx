import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { DarkThemeIcon, LightThemeIcon } from "./Icons";

export default function ThemeToggler() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex justify-center items-center gap-5 bg-gray-100 dark:bg-gray-600 py-3 rounded-md">
      <LightThemeIcon />
      <label className="switch">
        <input
          type="checkbox"
          checked={resolvedTheme === "dark"}
          onChange={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        />
        <span className="slider round"></span>
      </label>
      <DarkThemeIcon />
    </div>
  );
}
