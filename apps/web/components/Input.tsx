import React from "react";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
});

interface InputProps {
  id: string;
  placeholder: string;
  title: string;
  value: any;
  onChange: any | undefined;
  autoFocus?: boolean;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  type: string;
}

const Input = ({
  id,
  placeholder,
  title,
  value,
  onChange,
  disabled,
  required = true,
  type,
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col items-start justify-center w-full gap-2">
      <h1 className={`font-[switzer] text-cNeutral-200 font-normal text-xs`}>
        {title}
      </h1>
      <input
        id={id}
        name={id}
        className={`font-[switzer] placeholder-cBlack-32 dark:placeholder-cNeutral-400 block w-full p-4 text-base text-cNeutral-100 border border-cNeutral-600 rounded-xl bg-cNeutral-900`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...props}
        required={required}
        type={type}
      />
    </div>
  );
};

export default Input;
