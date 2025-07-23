import React from "react";
import { BaseUIProps } from "./types";
import { Section } from "./Section";

interface BoxProps extends BaseUIProps {
  variant?: 'container' | 'card' | 'surface' | 'elevated';
  fullWidth?: boolean;
  fullHeight?: boolean;
  centered?: boolean;
}

const variantStyles = {
  container: {
    bg: 'transparent',
    padding: '0'
  },
  card: {
    bg: 'white',
    border: true,
    borderColor: 'contrast',
    borderAlpha: '0.2',
    borderRadius: '12px',
    padding: '24px',
    shadow: 'md'
  },
  surface: {
    bg: 'primary',
    bgAlpha: '0.05',
    borderRadius: '8px',
    padding: '16px'
  },
  elevated: {
    bg: 'white',
    borderRadius: '16px',
    padding: '32px',
    shadow: 'lg'
  }
};

export const Box: React.FC<BoxProps> = ({
  children,
  variant = 'container',
  fullWidth = false,
  fullHeight = false,
  centered = false,
  className,
  mobile,
  ...props
}) => {
  const variantStyle = variantStyles[variant];

  const boxProps = {
    className: `box ${variant} ${className || ''}`,
    width: fullWidth ? '100%' : 'auto',
    height: fullHeight ? '100%' : 'auto',
    ...(centered && {
      center: true,
      column: !props.row && !props.column ? true : props.column
    }),
    mobile: {
      padding: variant === 'card' ? '16px' : variant === 'elevated' ? '24px' : variantStyle.padding,
      ...mobile
    },
    ...variantStyle,
    ...props
  };

  return (
    <Section {...boxProps}>
      {children}
    </Section>
  );
};

Box.displayName = 'Box';