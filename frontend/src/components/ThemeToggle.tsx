import './ThemeToggle.css';

interface Props {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeToggle = ({ theme, toggleTheme }: Props) => {
  return (
    <label className="switch">
      <input 
        type="checkbox" 
        onChange={toggleTheme} 
        checked={theme === 'dark'} 
        aria-label="Toggle theme"
      />
      <span className="slider" aria-hidden="true">
        <span className="icon moon">🌙</span>
        <span className="icon sun">☀️</span>
      </span>
    </label>
  );
};

export default ThemeToggle;