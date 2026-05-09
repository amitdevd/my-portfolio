function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="/">Amit Dwivedi</a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="/#about">About</a>
        <a href="/#experience">Experience</a>
        <a href="/#projects">Projects</a>
        <a href="/#skills">Skills</a>
        <a href="/#education">Education</a>
        <a href="/blog">Blog</a>
        <a href="/#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
