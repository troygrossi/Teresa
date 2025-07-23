import React from "react";
import { BaseUIProps } from "./types";
import { Section } from "./Section";

interface TextProps extends BaseUIProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'subtitle1' | 'subtitle2';
  component?: keyof JSX.IntrinsicElements;
  truncate?: boolean;
  maxLines?: number;
  gradient?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
}

const variantStyles = {
  h1: {
    fontSize: 48,
    fontWeight: 'bold',
    lineHeight: 1.2,
    as: 'h1' as const,
    mobile: { fontSize: 36 }
  },
  h2: {
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: 1.3,
    as: 'h2' as const,
    mobile: { fontSize: 28 }
  },
  h3: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 1.4,
    as: 'h3' as const,
    mobile: { fontSize: 24 }
  },
  h4: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 1.4,
    as: 'h4' as const,
    mobile: { fontSize: 20 }
  },
  h5: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 1.5,
    as: 'h5' as const,
    mobile: { fontSize: 18 }
  },
  h6: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 1.5,
    as: 'h6' as const,
    mobile: { fontSize: 16 }
  },
  body1: {
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 1.6,
    as: 'p' as const,
    mobile: { fontSize: 14 }
  },
  body2: {
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 1.6,
    as: 'p' as const,
    mobile: { fontSize: 13 }
  },
  caption: {
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: 1.5,
    as: 'span' as const,
    mobile: { fontSize: 11 }
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 1.5,
    as: 'p' as const,
    mobile: { fontSize: 15 }
  },
  subtitle2: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 1.5,
    as: 'p' as const,
    mobile: { fontSize: 13 }
  }
};

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'body1',
  component,
  truncate = false,
  maxLines,
  gradient = false,
  gradientFrom = 'primary',
  gradientTo = 'secondary',
  className,
  mobile,
  style,
  ...props
}) => {
  const variantStyle = variantStyles[variant];
  
  const textStyles: React.CSSProperties = {
    margin: 0,
    ...(truncate && {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }),
    ...(maxLines && !truncate && {
      display: '-webkit-box',
      WebkitLineClamp: maxLines,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }),
    ...(gradient && {
      background: `linear-gradient(135deg, var(--color-${gradientFrom}), var(--color-${gradientTo}))`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    }),
    ...style
  };

  const textProps = {
    className: `text ${variant} ${className || ''}`,
    as: component || variantStyle.as,
    fontSize: variantStyle.fontSize,
    fontWeight: variantStyle.fontWeight,
    lineHeight: variantStyle.lineHeight,
    style: textStyles,
    mobile: {
      fontSize: variantStyle.mobile.fontSize,
      ...mobile
    },
    ...props
  };

  return (
    <Section {...textProps}>
      {children}
    </Section>
  );
};

Text.displayName = 'Text';