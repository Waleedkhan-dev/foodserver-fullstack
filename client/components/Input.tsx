type Variant = 'default' | 'border' | 'underline';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: Variant;
}

const Input: React.FC<InputProps> = ({
  label,
  variant = 'default',
  placeholder,
  value,
  onChange,
  ...props
}) => {
  const base = 'w-full p-2 text-sm rounded-md outline-none';

  const styles: Record<Variant, string> = {
    default: 'border border-gray-50',
    border: 'border-[1px] border-[#E9E9E9]',
    underline: 'border-b-2 border-gray-400 rounded-none',
  };

  return (
    <div className='flex flex-col gap-1'>
      {label && <label className='text-sm font-medium'>{label}</label>}

      <input
        className={`${base} ${styles[variant]}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Input;
