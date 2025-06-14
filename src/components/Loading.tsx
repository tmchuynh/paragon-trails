interface LoadingProps {
  size?: "sm" | "md" | "lg";
  fullScreen?: boolean;
  text?: string;
}

export default function Loading({
  size = "md",
  fullScreen = true,
  text = "Loading...",
}: LoadingProps) {
  const sizeClasses = {
    sm: "w-8 h-8 border-2",
    md: "w-16 h-16 border-2",
    lg: "w-24 h-24 border-4",
  };

  const containerClasses = fullScreen
    ? "flex flex-col justify-center items-center min-h-screen gap-4"
    : "flex flex-col justify-center items-center gap-4 p-8";

  return (
    <div className={containerClasses}>
      <div
        className={`
          border-primary border-t-transparent rounded-full animate-spin
          ${sizeClasses[size]}
        `}
        role="status"
        aria-label="Loading"
      />
      {text && (
        <p className="font-medium text-muted-foreground text-sm animate-pulse">
          {text}
        </p>
      )}
      <span className="sr-only">Loading...</span>
    </div>
  );
}
