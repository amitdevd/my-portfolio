import { useState, useEffect } from 'react';

const themes = [
  { id: 'dark', label: 'Option 2 (Bold Red & Crimson)', badge: 'Red Edition 🔥', icon: '🔴' },
  { id: 'option3', label: 'Option 3 (Modern Sage & Rose)', badge: 'Clean Minimalist', icon: '🌿' },
  { id: 'option1', label: 'Option 1 (Crisp Tech Light)', badge: 'Silicon Valley', icon: '⚡' },
  { id: 'original', label: 'Original Theme', badge: 'Vintage Earthy', icon: '📜' },
];

function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'dark';
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('portfolio_theme', currentTheme);
  }, [currentTheme]);

  return (
    <div className="theme-switcher-container">
      <button
        type="button"
        className="theme-switcher-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Preview and switch color themes"
      >
        <span className="theme-toggle-icon">🎨</span>
        <span className="theme-toggle-label">Theme: {themes.find(t => t.id === currentTheme)?.badge || 'Option 3'}</span>
      </button>

      {isOpen && (
        <div className="theme-switcher-modal">
          <div className="theme-modal-header">
            <h4>Live Theme Switcher</h4>
            <button type="button" className="close-btn" onClick={() => setIsOpen(false)} aria-label="Close">
              ×
            </button>
          </div>
          <p className="theme-modal-desc">
            Option 3 default active hai. Kisi bhi theme par click karke live preview test kar sakte hain:
          </p>
          <div className="theme-options-list">
            {themes.map((theme) => (
              <button
                key={theme.id}
                type="button"
                className={`theme-option-item ${currentTheme === theme.id ? 'active' : ''}`}
                onClick={() => {
                  setCurrentTheme(theme.id);
                  setIsOpen(false);
                }}
              >
                <div className="theme-option-left">
                  <span className="theme-icon">{theme.icon}</span>
                  <div>
                    <span className="theme-name">{theme.label}</span>
                    <span className="theme-badge">{theme.badge}</span>
                  </div>
                </div>
                {currentTheme === theme.id && <span className="theme-check">✓</span>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ThemeSwitcher;
