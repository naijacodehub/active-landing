import React, {
  ChangeEvent,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

type CommonInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'value'> & {
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    value: string;
    type?: string;
  };

interface BaseInputProps extends CommonInputProps {
  error?: string;
}

const BaseInput: React.FC<BaseInputProps> = ({
  placeholder,
  value,
  onChange,
  error,
  type = 'text',
  ...props
}) => {
  const isTextarea = type === 'textarea';

  return (
    <div>
      {isTextarea ? (
        <textarea
          {...props}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full bg-pale-sky placeholder:text-sm border dark:border-gray-500 px-2 py-1 focus:outline-none ${
            error ? 'border border-red-500' : ''
          }`}
        />
      ) : (
        <input
          {...props}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`h-10 w-full bg-pale-sky placeholder:text-sm border dark:border-gray-500 px-2 py-1 focus:outline-none ${
            error ? 'border border-red-500' : ''
          }`}
        />
      )}
      {error && <div className='text-sm text-red-500'>{error}</div>}
    </div>
  );
};

export default BaseInput;
