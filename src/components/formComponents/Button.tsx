import { useEffect, useState, ReactNode, ButtonHTMLAttributes } from "react";

type ButtonVariant = "default" | "outline" | "ghost" | "link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children?: ReactNode;
  loading?: boolean;
}

const Button = ({
  variant = "default",
  children,
  className = "",
  loading = false,
  type = "submit", // ✅ FORCE SUBMIT
  ...props
}: ButtonProps) => {
  const variants = {
    default: "bg-primary text-white hover:bg-primary/90",
    outline:
      "border dark:border-gray-500 hover:bg-pale-sky dark:hover:bg-primary/20",
    ghost: "hover:bg-primary/10 hover:text-accent-foreground",
    link: "text-primary dark:text-white underline-offset-4 underline",
  };

  const [activeVariant, setActiveVariant] = useState(variants[variant]);

  useEffect(() => {
    setActiveVariant(variants[variant]);
  }, [variant]);

  return (
    <button
      type={type}
      disabled={loading || props.disabled}
      className={`${activeVariant} ${className} relative h-10 rounded text-sm font-semibold px-3 transition-transform active:scale-95`}
      {...props}
    >
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-t-white border-gray-200 rounded-full animate-spin" />
        </span>
      )}
      <span className={loading ? "opacity-0" : "opacity-100"}>{children}</span>
    </button>
  );
};

export default Button;
