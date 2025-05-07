function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-2xl">
      <div className="h-9 w-9 animate-spin rounded-full border-4 border-[var(--color-Purple)] border-t-transparent"></div>
    </div>
  );
}

export default LoadingSpinner;
