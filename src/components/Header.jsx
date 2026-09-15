function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="/">
        <img src="/img/logo.svg" alt="Amit Dwivedi" width="140" height="60" />
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="/#about">About</a>
        <a href="/#experience">Experience</a>
        <a href="/#projects">Projects</a>
        <a href="/#skills">Skills</a>
        <a href="/#achievements">Achievements</a>
        <a href="/#education">Education</a>
        <a href="/blog">Blog</a>
        <a href="/#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
