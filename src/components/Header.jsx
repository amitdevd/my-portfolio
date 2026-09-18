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

        <div className="topbar-actions">
          {/* Quick Action Icons for Mobile */}
          <div className="header-quick-actions">
            <a
              href="/#contact"
              className="quick-action-btn hire-btn"
              title="Hire Me"
              aria-label="Hire Me"
              onClick={closeMenu}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </a>

            <a
              href="/img/amit_resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="quick-action-btn cv-btn"
              title="Download CV"
              aria-label="Download CV"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <polyline points="9 15 12 18 15 15" />
              </svg>
            </a>

            <a
              href="https://wa.me/917827841274"
              target="_blank"
              rel="noreferrer"
              className="quick-action-btn whatsapp-btn"
              title="Chat on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.04C9.36 7.04 9.09 7.1 8.87 7.34C8.65 7.58 8.02 8.16 8.02 9.36C8.02 10.55 8.89 11.71 9.01 11.87C9.13 12.03 10.72 14.5 13.2 15.54C13.79 15.79 14.25 15.95 14.61 16.06C15.2 16.25 15.74 16.22 16.17 16.16C16.65 16.09 17.65 15.55 17.86 14.97C18.07 14.39 18.07 13.9 18.01 13.79C17.95 13.68 17.78 13.62 17.53 13.5C17.28 13.37 16.05 12.77 15.82 12.69C15.6 12.6 15.43 12.56 15.26 12.81C15.1 13.06 14.62 13.62 14.47 13.79C14.33 13.95 14.18 13.97 13.93 13.85C13.69 13.72 12.89 13.46 11.94 12.62C11.2 11.96 10.7 11.14 10.56 10.89C10.41 10.65 10.54 10.51 10.66 10.39C10.77 10.28 10.91 10.1 11.03 9.95C11.16 9.81 11.2 9.71 11.28 9.55C11.36 9.38 11.32 9.24 11.26 9.12C11.2 9 10.73 7.84 10.53 7.37C10.34 6.91 10.14 6.98 9.99 6.97C9.85 6.97 9.69 7.04 9.53 7.04Z" />
              </svg>
            </a>
          </div>

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

