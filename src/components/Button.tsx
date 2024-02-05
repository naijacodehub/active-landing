import { useEffect, useState, ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'default' | 'outline' | 'ghost' | 'link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children?: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  children,
  className = '',
  ...props
}) => {
  const variants = {
    default: 'bg-primary text-white hover:bg-primary/90',
    outline:
      'border dark:border-gray-500  hover:bg-pale-sky dark:hover:bg-primary/20',
    ghost: 'hover:bg-primary/10 hover:text-accent-foreground',
    link: 'text-primary dark:text-white underline-offset-4 underline',
  };

  const [activeVariant, setActiveVariant] = useState(variants[variant]);

  useEffect(() => {
    setActiveVariant(variants[variant]);
  }, [variant]);

  return (
    <button
      {...props}
      className={` ${activeVariant} ${className} h-10 rounded text-sm font-semibold px-3`}
    >
      {children}
    </button>
  );
};

export default Button;
