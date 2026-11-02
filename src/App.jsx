import { Button, useTheme, useOverlayState } from "@heroui/react";
import Nav from "./components/Nav";
import Page from "./components/Page";

function App() {
  const menuState = useOverlayState();
  const { setTheme, resolvedTheme } = useTheme("system");

  // HeroUI's useTheme applies data-theme but may leave the inline bootstrap's
  // `dark` class on <html>. Docs require class + data-theme to stay in sync,
  // so we sync both ourselves on every toggle.
  const toggleTheme = () => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(next);
    const el = document.documentElement;
    el.classList.toggle("dark", next === "dark");
    el.classList.toggle("light", next === "light");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav state={menuState} />
      <Page />
      <Button
        id="btn"
        isIconOnly
        className="fixed right-2.5 top-3.75 z-998 h-12.5 w-12.5 rounded-md bg-accent text-accent-foreground"
        onPress={menuState.open}
        aria-label="Open navigation"
      >
        <i className="fa-solid fa-bars"></i>
      </Button>
      <Button
        className="fixed left-2.5 top-3.75 z-998"
        variant="secondary"
        onPress={toggleTheme}
        aria-label="Toggle theme"
      >
        {resolvedTheme === "dark" ? "Light" : "Dark"}
      </Button>
    </div>
  );
}

export default App;
