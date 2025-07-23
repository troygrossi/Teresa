import React, { useState } from "react";
import { BaseUIProps, FormProps } from "./types";
import { Section } from "./Section";

interface InputProps extends BaseUIProps, FormProps {
  label?: string;
  placeholder?: string;
  error?: string;
  variant?: 'outlined' | 'filled' | 'standard';
  size?: 'sm' | 'md' | 'lg';
  multiline?: boolean;
  rows?: number;
  fullWidth?: boolean;
  required?: boolean;
  disabled?: boolean;
}

const variantStyles = {
  outlined: {
    border: true,
    borderColor: 'contrast',
    borderAlpha: '0.3',
    bg: 'transparent',
    focus: {
      borderColor: 'tertiary',
      borderAlpha: '1',
      boxShadow: '0 0 8px rgba(90, 103, 216, 0.3)'
    }
  },
  filled: {
    bg: 'contrast',
    bgAlpha: '0.1',
    border: false,
    focus: {
      bg: 'white',
      boxShadow: '0 0 8px rgba(90, 103, 216, 0.3)'
    }
  },
  standard: {
    bg: 'transparent',
    border: false,
    focus: {}
  }
};

const sizeStyles = {
  sm: {
    padding: '8px 12px',
    fontSize: 14,
    height: '36px'
  },
  md: {
    padding: '12px 16px',
    fontSize: 16,
    height: '48px'
  },
  lg: {
    padding: '16px 20px',
    fontSize: 18,
    height: '56px'
  }
};

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  error,
  variant = 'outlined',
  size = 'md',
  multiline = false,
  rows = 4,
  fullWidth = true,
  required = false,
  disabled = false,
  type = 'text',
  value,
  onChange,
  onFocus,
  onBlur,
  className,
  mobile,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!value);

  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  const handleFocus = React.useCallback((e: React.FocusEvent) => {
    setFocused(true);
    onFocus?.(e);
  }, [onFocus]);

  const handleBlur = React.useCallback((e: React.FocusEvent) => {
    setFocused(false);
    setHasValue(!!value);
    onBlur?.(e);
  }, [onBlur, value]);

  const handleChange = React.useCallback((e: React.ChangeEvent) => {
    setHasValue(!!(e.target as HTMLInputElement | HTMLTextAreaElement).value);
    onChange?.(e);
  }, [onChange]);

  const inputStyles = {
    width: fullWidth ? '100%' : 'auto',
    boxSizing: 'border-box' as const,
    transition: 'all 0.3s ease',
    outline: 'none',
    fontFamily: 'inherit',
    borderRadius: variant === 'standard' ? 0 : '8px',
    opacity: disabled ? 0.6 : 1,
    cursor: disabled ? 'not-allowed' : 'text',
    resize: multiline ? 'vertical' as const : 'none' as const,
    ...sizeStyle,
    ...(multiline && { height: 'auto', minHeight: sizeStyle.height }),
    ...(variant === 'standard' && { borderBottom: '2px solid #ccc' }),
    ...(variant === 'standard' && focused && { borderBottom: '2px solid #5a67d8' }),
  };

  const containerProps = {
    className: `input-container ${className || ''}`,
    position: 'relative' as const,
    width: fullWidth ? '100%' : 'auto',
    mobile,
    ...props
  };

  return (
    <Section {...containerProps}>
      {/* Label */}
      {label && (
        <Section
          as="label"
          className="input-label"
          position="absolute"
          color={focused ? 'tertiary' : error ? 'white' : 'contrast'}
          colorAlpha={focused ? '1' : '0.7'}
          fontSize={focused || hasValue ? 12 : sizeStyle.fontSize}
          fontWeight="bold"
          leftPos={variant === 'standard' ? 0 : 16}
          topPos={focused || hasValue ? -8 : '50%'}
          transform={focused || hasValue ? 'translateY(0)' : 'translateY(-50%)'}
          padding="0 4px"
          bg={variant === 'outlined' && (focused || hasValue) ? 'white' : 'transparent'}
          zIndex={1}
          transition="all 0.3s ease"
          style={{ pointerEvents: 'none' }}
        >
          {label}{required && ' *'}
        </Section>
      )}

      {/* Error Message */}
      {error && (
        <Section
          className="input-error"
          position="absolute"
          color="white"
          fontSize={12}
          topPos={-20}
          leftPos={16}
          style={{
            filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.5))'
          }}
        >
          {error}
        </Section>
      )}

      {/* Input/Textarea */}
      {multiline ? (
        <textarea
          rows={rows}
          value={value}
          placeholder={!label ? placeholder : undefined}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          readOnly={disabled}
          disabled={disabled}
          className="input-field"
          style={inputStyles}
        />
      ) : (
        <input
          type={type}
          value={value}
          placeholder={!label ? placeholder : undefined}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          readOnly={disabled}
          disabled={disabled}
          className="input-field"
          style={inputStyles}
        />
      )}
    </Section>
  );
};

Input.displayName = 'Input';