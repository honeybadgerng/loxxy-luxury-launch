
import React, { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors hover:bg-muted"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-foreground" />
      ) : (
        <Sun size={20} className="text-foreground" />
      )}
    </button>
  );
};

export default ThemeToggle;
