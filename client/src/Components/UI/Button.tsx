import React from "react";
import { BaseUIProps, FormProps, ButtonHoverEffects } from "./types";
import { Section } from "./Section";

interface ButtonProps extends BaseUIProps, Pick<FormProps, 'type' | 'value' | 'readOnly' | 'id'> {
  onHover?: ButtonHoverEffects;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const variantStyles = {
  primary: {
    bg: 'primary' as const,
    color: 'white' as const,
    hover: { bg: 'primary', bgAlpha: '0.9' }
  },
  secondary: {
    bg: 'secondary' as const,
    color: 'white' as const,
    hover: { bg: 'secondary', bgAlpha: '0.9' }
  },
  tertiary: {
    bg: 'tertiary' as const,
    color: 'black' as const,
    hover: { bg: 'tertiary', bgAlpha: '0.9' }
  },
  outline: {
    bg: 'transparent' as const,
    color: 'primary' as const,
    border: true,
    borderColor: 'primary' as const,
    hover: { bg: 'primary', color: 'white' }
  },
  ghost: {
    bg: 'transparent' as const,
    color: 'primary' as const,
    hover: { bg: 'primary', bgAlpha: '0.1' }
  }
};

const sizeStyles = {
  sm: {
    padding: '8px 16px',
    fontSize: 14,
    borderRadius: '6px'
  },
  md: {
    padding: '12px 24px',
    fontSize: 16,
    borderRadius: '8px'
  },
  lg: {
    padding: '16px 32px',
    fontSize: 18,
    borderRadius: '10px'
  }
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onHover,
  disabled = false,
  loading = false,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  const handleMouseEnter = React.useCallback((e: React.MouseEvent) => {
    if (disabled || loading) return;
    
    const element = e.currentTarget as HTMLElement;
    
    if (onHover) {
      if (onHover.bg) element.style.backgroundColor = onHover.bg;
      if (onHover.color) element.style.color = onHover.color;
      if (onHover.boxShadow) element.style.boxShadow = onHover.boxShadow;
      if (onHover.transform) element.style.transform = onHover.transform;
      if (onHover.scale) element.style.transform = `scale(${onHover.scale})`;
    }
    
    onMouseEnter?.(e);
  }, [disabled, loading, onHover, onMouseEnter]);

  const handleMouseLeave = React.useCallback((e: React.MouseEvent) => {
    if (disabled || loading) return;
    
    const element = e.currentTarget as HTMLElement;
    
    if (onHover) {
      element.style.backgroundColor = '';
      element.style.color = '';
      element.style.boxShadow = '';
      element.style.transform = '';
    }
    
    onMouseLeave?.(e);
  }, [disabled, loading, onHover, onMouseLeave]);

  const handleClick = React.useCallback((e: React.MouseEvent) => {
    if (disabled || loading) return;
    onClick?.(e);
  }, [disabled, loading, onClick]);

  return (
    <Section
      as="button"
      type={type}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      transition={true}
      style={{
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : loading ? 0.8 : 1,
        outline: 'none',
        border: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        ...props.style
      }}
      {...variantStyle}
      {...sizeStyle}
      {...props}
    >
      {loading ? (
        <span style={{ marginRight: children ? '8px' : '0' }}>...</span>
      ) : null}
      {children}
    </Section>
  );
};

Button.displayName = 'Button';