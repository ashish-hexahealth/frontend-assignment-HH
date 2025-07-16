import React from 'react'

type Props<T> = {
  options: Options
  value: string
  onChange: (value: T) => void
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>

export default function Dropdown<T>({
  value,
  onChange,
  options,
  ...rest
}: Props<T>) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as T)}
      className={'w-full h-[35px] rounded-md cursor-pointer'}
      {...rest}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}
