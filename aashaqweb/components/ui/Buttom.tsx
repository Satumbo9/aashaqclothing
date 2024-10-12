import React from "react";

interface ButtonValues extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  label: string;
  className: string;
  type: any;
}

const Buttom = React.forwardRef<HTMLButtonElement, ButtonValues>(
  ({ label, type, className, ...props }, ref) => {
    return (
      <button
        className={`text-2xl ${className}`}
        type={type}
        ref={ref}
        {...props}
      >
        {label}
      </button>
    );
  },
);

export default Buttom;
