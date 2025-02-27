import Logo from "./Logo";
import Nav from "./Nav";

export const Header = () => {
  return (
    <header className="sticky top-0 z-[1] mx-auto flex w-full flex-wrap items-center justify-between border-b border-gray-100 bg-background p-[1em] font-sans font-semibold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary">
      {/* <Logo /> */}
      <span className="font-mono tracking-tight text-lg">Nikhil Studio</span>
      <Nav />
    </header>
  );
};

export default Header;