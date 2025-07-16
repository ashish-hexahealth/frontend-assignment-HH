import clsx from 'clsx';
import React, { useId } from 'react';

type InputFieldProps = {
  onChange: (val: string) => void;
  err: string;
  rootClass?: string;
  options?: string[]; // for radio options
  label?: string;     // label to show for radio group
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

export default function Inputfield({
  onChange,
  err,
  rootClass,
  options,
  label,
  type,
  ...props
}: InputFieldProps) {
  const id = useId();

  if (type === 'radio' && options) {
    return (
      <div className={clsx('mt-3 mb-3', rootClass)}>
        {label && <label className="block text-base mb-1">{label}</label>}
        <div className="flex gap-4">
          {options.map((opt) => (
            <label key={opt} className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                value={opt}
                onChange={(e) => onChange(e.target.value)}
                name={props.name}
              />
              {opt}
            </label>
          ))}
        </div>
        <span className="text-xs text-red-500 mt-0.5">{err}</span>
      </div>
    );
  }

  // Default input
  return (
    <div className={clsx('mt-3', rootClass)}>
      <input
        id={id}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        {...props}
        className={clsx('w-full h-[35px] rounded-md px-2 border border-slate-400', err && 'border border-red-500')}
      />
      <span className="text-xs text-red-500 mt-0.5">{err}</span>
    </div>
  );
}
