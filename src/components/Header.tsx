import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (!section) return;

    const yOffset = -80;
    const y =
      (section as HTMLElement).getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-xl border-b
        bg-(--card-color)]
        text-(--text-color)
        border-(--border-color)
        transition-all
      "
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        <button
          onClick={() => scrollToSection("#home")}
          className="text-xl font-bold"
        >
          Rangga.dev
        </button>

        <nav className="hidden md:flex gap-6 font-medium">
          {["Home", "Experience", "Projects", "Skills", "Contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                className="hover:text-[var(--accent-color)]"
              >
                {item}
              </button>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border bg-[var(--card-color)]"
          >
            {darkMode ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} />
            )}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md border"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[var(--card-color)] border-t">
          <nav className="flex flex-col items-center gap-4 py-4 font-medium">
            {["Home", "Experience", "Projects", "Skills", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                  className="hover:text-[var(--accent-color)]"
                >
                  {item}
                </button>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
