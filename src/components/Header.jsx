import { useState, useEffect } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="topbar">
      <div className="topbar-header">
        <a className="brand" href="/" onClick={closeMenu}>
          <img src="/img/logo.svg" alt="Amit Dwivedi" width="140" height="60" />
        </a>
        <button
          type="button"
          className={`menu-toggle ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              className="toggle-icon close-icon"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              className="toggle-icon hamburger-icon"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>
      <nav className={`nav-links ${isOpen ? 'nav-open' : ''}`} aria-label="Primary navigation">
        <a href="/#about" onClick={closeMenu}>About</a>
        <a href="/#experience" onClick={closeMenu}>Experience</a>
        <a href="/#projects" onClick={closeMenu}>Projects</a>
        <a href="/#skills" onClick={closeMenu}>Skills</a>
        <a href="/#achievements" onClick={closeMenu}>Achievements</a>
        <a href="/#education" onClick={closeMenu}>Education</a>
        <a href="/blog" onClick={closeMenu}>Blog</a>
        <a href="/#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;

