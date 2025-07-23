import React from "react";
import { useSelector } from "../../redux/redux";
import { resizeRatio } from "../../modules/resizeRatio";
import { palette } from "../../palette/palette";
import { ISectionProps } from "./types";
import type { GenericMouseEventHandler, GenericFormEventHandler, GenericChangeEventHandler, GenericFocusEventHandler, InputType } from "./types";

// Helper functions
const convertValue = (value?: string | number) => {
  if (!value) return undefined;
  if (typeof value === "number") return resizeRatio(`${value}px`);
  if (value.includes("px")) return resizeRatio(value);
  return value;
};

const convertMobileValue = (value?: string | number) => {
  if (!value) return undefined;
  if (typeof value === "number") return resizeRatio(`${value}px`, { mobile: true });
  if (value.includes("px")) return resizeRatio(value, { mobile: true });
  return value;
};


const getPaletteColor = (color?: string, alpha?: string) => {
  if (!color) return undefined;
  
  // Check if it's a palette color with proper type safety
  if (color in palette) {
    const paletteKey = color as keyof typeof palette;
    return palette[paletteKey](alpha || "1");
  }
  
  // Return custom color as-is
  return color;
};

const getShadow = (shadow?: boolean | string) => {
  if (!shadow) return undefined;
  if (typeof shadow === "string") return shadow;
  
  const shadows = {
    sm: `0 1px 2px 0 ${palette.black("0.05")}`,
    md: `0 4px 6px -1px ${palette.black("0.1")}, 0 2px 4px -1px ${palette.black("0.06")}`,
    lg: `0 10px 15px -3px ${palette.black("0.1")}, 0 4px 6px -2px ${palette.black("0.05")}`,
    xl: `0 20px 25px -5px ${palette.black("0.1")}, 0 10px 10px -5px ${palette.black("0.04")}`,
  };
  
  return shadows.md; // Default shadow
};

// Helper function to filter props based on element type
const getElementProps = (Element: keyof JSX.IntrinsicElements, props: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: GenericMouseEventHandler;
  onMouseEnter?: GenericMouseEventHandler;
  onMouseLeave?: GenericMouseEventHandler;
  role?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  tabIndex?: number;
  onSubmit?: GenericFormEventHandler;
  type?: InputType;
  htmlFor?: string;
  readOnly?: boolean;
  id?: string;
  autoComplete?: string;
  value?: string | number;
  onChange?: GenericChangeEventHandler;
  onFocus?: GenericFocusEventHandler;
  onBlur?: GenericFocusEventHandler;
  src?: string;
  alt?: string;
  loading?: "eager" | "lazy";
  decoding?: "async" | "auto" | "sync";
  fetchPriority?: "high" | "low" | "auto";
}) => {
  const baseProps = {
    ...(props.id && { id: props.id }),
    ...(props.className && { className: props.className }),
    ...(props.style && { style: props.style }),
    ...(props.onClick && { onClick: props.onClick }),
    ...(props.onMouseEnter && { onMouseEnter: props.onMouseEnter }),
    ...(props.onMouseLeave && { onMouseLeave: props.onMouseLeave }),
    ...(props.role && { role: props.role }),
    ...(props.ariaLabel && { 'aria-label': props.ariaLabel }),
    ...(props.ariaLabelledBy && { 'aria-labelledby': props.ariaLabelledBy }),
    ...(props.ariaDescribedBy && { 'aria-describedby': props.ariaDescribedBy }),
    ...(props.tabIndex !== undefined && { tabIndex: props.tabIndex }),
  };

  // Form elements
  if (Element === 'form') {
    return {
      ...baseProps,
      ...(props.onSubmit && { onSubmit: props.onSubmit }),
    };
  }

  // Input elements
  if (Element === 'input') {
    return {
      ...baseProps,
      ...(props.type && { type: props.type }),
      ...(props.value !== undefined && { value: props.value }),
      ...(props.onChange && { onChange: props.onChange }),
      ...(props.onFocus && { onFocus: props.onFocus }),
      ...(props.onBlur && { onBlur: props.onBlur }),
      ...(props.readOnly !== undefined && { readOnly: props.readOnly }),
      ...(props.autoComplete && { autoComplete: props.autoComplete }),
    };
  }

  // Textarea elements
  if (Element === 'textarea') {
    return {
      ...baseProps,
      ...(props.value !== undefined && { value: props.value }),
      ...(props.onChange && { onChange: props.onChange }),
      ...(props.onFocus && { onFocus: props.onFocus }),
      ...(props.onBlur && { onBlur: props.onBlur }),
      ...(props.readOnly !== undefined && { readOnly: props.readOnly }),
    };
  }

  // Button elements
  if (Element === 'button') {
    return {
      ...baseProps,
      ...(props.type && ['button', 'submit', 'reset'].includes(props.type) && { type: props.type as 'button' | 'submit' | 'reset' }),
      ...(props.value !== undefined && { value: props.value }),
    };
  }

  // Label elements
  if (Element === 'label') {
    return {
      ...baseProps,
      ...(props.htmlFor && { htmlFor: props.htmlFor }),
    };
  }

  // Image elements
  if (Element === 'img') {
    return {
      ...baseProps,
      ...(props.src && { src: props.src }),
      ...(props.alt && { alt: props.alt }),
      ...(props.loading && { loading: props.loading }),
      ...(props.decoding && { decoding: props.decoding }),
      ...(props.fetchPriority && { fetchpriority: props.fetchPriority }),
    };
  }

  // For all other elements, just return base props
  return baseProps;
};

const SectionBase: React.FC<ISectionProps> = ({
  children,
  className,
  key: propKey,
  style,
  onClick,
  onMouseEnter,
  onMouseLeave,
  as: Element = "div",
  // Accessibility
  role,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  tabIndex,
  // Layout
  column,
  row,
  // Alignment
  alignTop,
  alignBottom,
  left,
  right,
  center,
  between,
  around,
  evenly,
  // Dimensions
  height,
  minHeight,
  width,
  // Spacing
  padding,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  gap,
  // Flex
  flex,
  wrap,
  // Visual
  bg,
  bgAlpha,
  bgImage,
  bgSize,
  bgPosition,
  bgAttachment,
  bgOpacity,
  maskImage,
  willChange,
  color,
  colorAlpha,
  borderRadius,
  shadow,
  border,
  borderColor,
  borderAlpha,
  overflow,
  zIndex,
  maxWidth,
  position,
  mobileColumn,
  transition,
  debug,
  // Form props
  onSubmit,
  type,
  htmlFor,
  readOnly,
  id,
  autoComplete,
  value,
  onChange,
  onFocus,
  onBlur,
  // Additional props
  src,
  alt,
  loading,
  decoding,
  fetchPriority,
  // Text styling
  fontSize,
  fontWeight,
  fontStyle,
  textAlign,
  letterSpacing,
  lineHeight,
  // Effects
  filter,
  backdropFilter,
  // Positioning
  topPos,
  bottomPos,
  leftPos,
  rightPos,
  transform,
  // Mobile styles
  mobile,
}) => {
  const window = useSelector((state) => state.window.windowQuery);

  const baseStyle: React.CSSProperties = {
    ...(transition && {
      transition: typeof transition === "string" 
        ? transition 
        : "transform .3s cubic-bezier(0.4, 0, 0.2, 1), width .3s cubic-bezier(0.4, 0, 0.2, 1), height .3s cubic-bezier(0.4, 0, 0.2, 1), margin .3s cubic-bezier(0.4, 0, 0.2, 1), padding .3s cubic-bezier(0.4, 0, 0.2, 1), opacity .3s cubic-bezier(0.4, 0, 0.2, 1)"
    }),
    position: position || "relative",
    display: "flex",
    boxSizing: "border-box",
    
    // Layout direction
    flexDirection: column ? "column" : row ? "row" : "row",
    flexWrap: wrap ? "wrap" : "nowrap",
    
    // Justify content
    justifyContent:
      left && !column
        ? "flex-start"
        : right && !column
        ? "flex-end"
        : alignTop && column
        ? "flex-start"
        : alignBottom && column
        ? "flex-end"
        : center
        ? "center"
        : between
        ? "space-between"
        : around
        ? "space-around"
        : evenly
        ? "space-evenly"
        : "normal",
    
    // Align items
    alignItems:
      left && column
        ? "flex-start"
        : right && column
        ? "flex-end"
        : alignTop && !column
        ? "flex-start"
        : alignBottom && !column
        ? "flex-end"
        : center
        ? "center"
        : "normal",
    
    // Dimensions
    height: convertValue(height) || "auto",
    minHeight: convertValue(minHeight),
    width: convertValue(width) || "auto",
    maxWidth: convertValue(maxWidth),
    
    // Spacing
    // Only use shorthand margin if no individual margin props are set
    ...(marginTop || marginRight || marginBottom || marginLeft 
      ? {
          marginTop: convertValue(marginTop),
          marginRight: convertValue(marginRight),
          marginBottom: convertValue(marginBottom),
          marginLeft: convertValue(marginLeft),
        }
      : {
          margin: convertValue(margin) || "0",
        }
    ),
    // Only use shorthand padding if no individual padding props are set
    ...(paddingTop || paddingRight || paddingBottom || paddingLeft 
      ? {
          paddingTop: convertValue(paddingTop),
          paddingRight: convertValue(paddingRight),
          paddingBottom: convertValue(paddingBottom),
          paddingLeft: convertValue(paddingLeft),
        }
      : {
          padding: convertValue(padding) || "0",
        }
    ),
    gap: convertValue(gap),
    
    // Flex
    flex: flex || "0 1 auto",
    
    // Visual styling
    background: getPaletteColor(bg, bgAlpha),
    color: getPaletteColor(color, colorAlpha),
    borderRadius: convertValue(borderRadius),
    overflow: overflow || "visible",
    zIndex,
    
    // Text styling
    fontSize: convertValue(fontSize),
    fontWeight,
    fontStyle,
    textAlign,
    letterSpacing: convertValue(letterSpacing),
    lineHeight,
    
    // Effects
    filter,
    backdropFilter,
    
    // Positioning
    top: convertValue(topPos),
    bottom: convertValue(bottomPos),
    left: convertValue(leftPos),
    right: convertValue(rightPos),
    
    // Transform
    transform,
    
    // Background image
    ...(bgImage && {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: bgSize || "cover",
      backgroundPosition: bgPosition || "center",
      backgroundAttachment: bgAttachment || "scroll",
      ...(bgOpacity !== undefined && {
        opacity: bgOpacity,
      }),
    }),
    
    // Mask image for gradient effects
    ...(maskImage && {
      maskImage: maskImage,
      WebkitMaskImage: maskImage, // Safari support
    }),
    
    // Performance optimization
    ...(willChange && {
      willChange: willChange,
    }),
    
    // Border
    ...(border && {
      border: typeof border === "string" ? border : `1px solid ${getPaletteColor(borderColor || "contrast", borderAlpha || "0.2")}`,
    }),
    
    // Shadow
    boxShadow: getShadow(shadow),
    
    // Debug border
    ...(debug && {
      border: "1px dotted red",
    }),
  };

  // Mobile responsive styles
  const mobileStyle: React.CSSProperties = window?.mobile && mobile ? {
    height: convertMobileValue(mobile.height || height) || "auto",
    minHeight: convertMobileValue(mobile.minHeight || minHeight),
    width: convertMobileValue(mobile.width || width) || "auto",
    maxWidth: convertMobileValue(mobile.maxWidth || maxWidth),
    // Only use shorthand margin if no individual margin props are set
    ...(mobile.marginTop || marginTop || mobile.marginRight || marginRight || mobile.marginBottom || marginBottom || mobile.marginLeft || marginLeft
      ? {
          marginTop: convertMobileValue(mobile.marginTop || marginTop),
          marginRight: convertMobileValue(mobile.marginRight || marginRight),
          marginBottom: convertMobileValue(mobile.marginBottom || marginBottom),
          marginLeft: convertMobileValue(mobile.marginLeft || marginLeft),
        }
      : {
          margin: convertMobileValue(mobile.margin || margin) || "0",
        }
    ),
    // Only use shorthand padding if no individual padding props are set
    ...(mobile.paddingTop || paddingTop || mobile.paddingRight || paddingRight || mobile.paddingBottom || paddingBottom || mobile.paddingLeft || paddingLeft
      ? {
          paddingTop: convertMobileValue(mobile.paddingTop || paddingTop),
          paddingRight: convertMobileValue(mobile.paddingRight || paddingRight),
          paddingBottom: convertMobileValue(mobile.paddingBottom || paddingBottom),
          paddingLeft: convertMobileValue(mobile.paddingLeft || paddingLeft),
        }
      : {
          padding: convertMobileValue(mobile.padding || padding) || "0",
        }
    ),
    gap: convertMobileValue(mobile.gap || gap),
    flex: mobile.flex || flex || "0 1 auto",
    flexDirection: mobileColumn ? "column" : column ? "column" : row ? "row" : "row",
    borderRadius: convertMobileValue(mobile.borderRadius || borderRadius),
    boxShadow: getShadow(mobile.shadow || shadow),
    // Mobile text styling
    fontSize: convertMobileValue(mobile.fontSize || fontSize),
    letterSpacing: convertMobileValue(mobile.letterSpacing || letterSpacing),
    // Mobile positioning
    top: convertMobileValue(mobile.topPos || topPos),
    bottom: convertMobileValue(mobile.bottomPos || bottomPos),
    left: convertMobileValue(mobile.leftPos || leftPos),
    right: convertMobileValue(mobile.rightPos || rightPos),
  } : {};

  const combinedStyle = {
    ...baseStyle,
    ...mobileStyle,
    ...style, // Custom style prop overrides everything
  };

  // Get filtered props based on element type
  const elementProps = getElementProps(Element, {
    className,
    style: combinedStyle,
    onClick,
    onMouseEnter,
    onMouseLeave,
    role,
    ariaLabel,
    ariaLabelledBy,
    ariaDescribedBy,
    tabIndex,
    onSubmit,
    type,
    htmlFor,
    readOnly,
    id,
    autoComplete,
    value,
    onChange,
    onFocus,
    onBlur,
    src,
    alt,
    loading,
    decoding,
    fetchPriority,
  });

  return (
    <Element 
      key={propKey || className}
      {...elementProps}
    >
      {children}
    </Element>
  );
};

// Create a cache for dynamic components
const componentCache = new Map<string, React.ComponentType<ISectionProps>>();

// Export with dynamic naming  
export const Section: React.FC<ISectionProps> = (props) => {
  if (process.env.NODE_ENV === 'development' && props.className) {
    const cacheKey = props.className;
    
    if (!componentCache.has(cacheKey)) {
      const DynamicComponent = React.memo(SectionBase);
      DynamicComponent.displayName = `Section[${props.className}]`;
      componentCache.set(cacheKey, DynamicComponent);
    }
    
    const CachedComponent = componentCache.get(cacheKey)!;
    return <CachedComponent {...props} />;
  }
  
  return <SectionBase {...props} />;
};

Section.displayName = 'Section';