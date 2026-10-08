'use client';

import { useSyncExternalStore } from 'react';

const themeEvent = 'portfolio-theme-change';

function subscribe(onChange: () => void) {
  window.addEventListener(themeEvent, onChange);
  return () => window.removeEventListener(themeEvent, onChange);
}

function isDarkMode() {
  return document.documentElement.dataset.theme === 'dark';
}

export function ThemeToggle() {
  const darkMode = useSyncExternalStore<boolean | undefined>(
    subscribe,
    isDarkMode,
    () => undefined,
  );

  function changeTheme(dark: boolean) {
    const theme = dark ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      // The switch still works when browser storage is unavailable.
    }
    window.dispatchEvent(new Event(themeEvent));
  }

  return (
    <label className="theme-toggle">
      <input
        type="checkbox"
        checked={darkMode ?? false}
        disabled={darkMode === undefined}
        onChange={(event) => changeTheme(event.currentTarget.checked)}
      />
      Dark mode
    </label>
  );
}
