function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      className="btn btn-ghost"
      aria-label="Basculer le thème"
      onClick={onToggle}
    >
      {theme === 'dark' ? (
        <>
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M21 12.79A9 9 0 0 1 12.79 3A7 7 0 1 0 21 12.79Z"
            />
          </svg>
          Mode sombre
        </>
      ) : (
        <>
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm0 4a1 1 0 0 1-1-1v-1h2v1a1 1 0 0 1-1 1Zm0-20a1 1 0 0 1 1-1h1v2h-1a1 1 0 0 1-1-1Zm10 9a1 1 0 0 1-1 1h-1v-2h1a1 1 0 0 1 1 1ZM4 12a1 1 0 0 1-1 1H2v-2h1a1 1 0 0 1 1 1Zm15.07 6.07l-1.41-1.41l1-1l1.41 1.41l-1 1Zm-1-11.73l-1-1l1.41-1.41l1 1l-1.41 1.41ZM4.93 17.07l-1 1l-1.41-1.41l1-1l1.41 1.41Zm-1-11.73L2.52 3.93l1-1l1.41 1.41l-1 1Z"
            />
          </svg>
          Mode clair
        </>
      )}
    </button>
  )
}

export default ThemeToggle
