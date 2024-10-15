import React from "react";

interface FromComponentProps extends React.FormHTMLAttributes<HTMLFormElement> {
  name?: string;
}

const FormData: React.FC<FromComponentProps> = ({
  name,
  children,
  ...props
}) => {
  return (
    <form name={name} {...props}>
      {children}
    </form>
  );
};

export default FormData;
