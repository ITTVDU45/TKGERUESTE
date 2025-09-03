import React from "react";
import Link from "next/link";

type ButtonProps = (React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement>) & {
  variant?: "primary" | "ghost";
  href?: string;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  href,
  ...props
}) => {
  const base = "inline-flex items-center justify-center px-5 py-3 rounded-2xl font-medium shadow-sm transition-transform active:scale-95 disabled:opacity-50";
  const variants: Record<string, string> = {
    primary: "bg-brand-orange text-white hover:brightness-95",
    ghost: "bg-white/6 text-brand-ink border border-white/8",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as any)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as any)}>
      {children}
    </button>
  );
};

export default Button;


