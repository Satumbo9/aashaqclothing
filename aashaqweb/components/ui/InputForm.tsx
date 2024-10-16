import React from "react";

interface FieldValues extends React.HTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
}

const InputForm = React.forwardRef<HTMLInputElement, FieldValues>(
  ({ id, type = "text", label, placeholder, className, ...props }, ref) => {
    return (
      <div className="max flex gap-3 max-sm:w-full">
        <div className="w-[400px]">
          <input
            className={`h-[40px] w-[400px] px-5 py-1 text-2xl text-black max-sm:w-[300px] ${className}`}
            type={type}
            placeholder={placeholder}
            id={id}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    );
  },
);

export default InputForm;
