export function ErrorMessage({ message }) {
  return (
    <div className="error-msg">
      <span>☹️</span>
      {message}
    </div>
  );
}
