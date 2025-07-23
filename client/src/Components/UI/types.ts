import React from "react";

export type InputType = "button" | "submit" | "reset" | "text" | "email" | "password" | "tel" | "url" | "search" | "number" | "date" | "time" | "datetime-local" | "month" | "week" | "color" | "file" | "range" | "hidden" | "checkbox" | "radio";

export type GenericMouseEventHandler = React.MouseEventHandler;
export type GenericFormEventHandler = React.FormEventHandler;
export type GenericChangeEventHandler = React.ChangeEventHandler;
export type GenericFocusEventHandler = React.FocusEventHandler;

export type PaletteColor = "primary" | "secondary" | "tertiary" | "contrast" | "black" | "white" | "copper";
export type ShadowSize = "sm" | "md" | "lg" | "xl";

export interface MobileStyles {
  height?: string | number;
  width?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  maxWidth?: string | number;
  padding?: string | number;
  paddingTop?: string | number;
  paddingRight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  margin?: string | number;
  marginTop?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  gap?: string | number;
  flex?: string | number;
  borderRadius?: string | number;
  shadow?: boolean | ShadowSize | string;
  border?: boolean | string;
  fontSize?: string | number;
  letterSpacing?: string | number;
  topPos?: string | number;
  bottomPos?: string | number;
  leftPos?: string | number;
  rightPos?: string | number;
}

export interface BaseUIProps {
  children?: React.ReactNode;
  className?: string;
  key?: string | number;
  style?: React.CSSProperties;
  onClick?: GenericMouseEventHandler;
  onMouseEnter?: GenericMouseEventHandler;
  onMouseLeave?: GenericMouseEventHandler;
  
  // Semantic element
  as?: keyof JSX.IntrinsicElements;
  
  // Accessibility props
  role?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  tabIndex?: number;
  
  // Layout direction
  column?: boolean;
  row?: boolean;
  
  // Alignment
  alignTop?: boolean;
  alignBottom?: boolean;
  left?: boolean;
  right?: boolean;
  center?: boolean;
  between?: boolean;
  around?: boolean;
  evenly?: boolean;
  
  // Dimensions
  height?: string | number;
  width?: string | number;
  minHeight?: string | number;
  maxWidth?: string | number;
  
  // Spacing
  padding?: string | number;
  paddingTop?: string | number;
  paddingRight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  margin?: string | number;
  marginTop?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  gap?: string | number;
  
  // Flex properties
  flex?: string | number;
  wrap?: boolean;
  
  // Visual styling
  bg?: PaletteColor | string;
  bgAlpha?: string;
  bgImage?: string;
  bgSize?: string;
  bgPosition?: string;
  bgAttachment?: "scroll" | "fixed" | "local";
  bgOpacity?: number;
  maskImage?: string;
  willChange?: string;
  color?: PaletteColor | string;
  colorAlpha?: string;
  borderRadius?: string | number;
  shadow?: boolean | ShadowSize | string;
  border?: boolean | string;
  borderColor?: PaletteColor | string;
  borderAlpha?: string;
  overflow?: "visible" | "hidden" | "scroll" | "auto";
  zIndex?: number;
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  
  // Responsive overrides
  mobileColumn?: boolean;
  mobile?: MobileStyles;
  
  // Transitions & effects
  transition?: boolean | string;
  filter?: string;
  backdropFilter?: string;
  transform?: string;
  
  // Layout positioning
  topPos?: string | number;
  bottomPos?: string | number;
  leftPos?: string | number;
  rightPos?: string | number;
  
  // Text styling
  fontSize?: string | number;
  fontWeight?: string | number;
  fontStyle?: "normal" | "italic" | "oblique";
  textAlign?: "left" | "center" | "right" | "justify";
  letterSpacing?: string | number;
  lineHeight?: string | number;
  
  // Debug
  debug?: boolean;
}

export interface FormProps {
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
}

export interface MediaProps {
  src?: string;
  alt?: string;
  loading?: "eager" | "lazy";
  decoding?: "async" | "auto" | "sync";
  fetchPriority?: "high" | "low" | "auto";
}

export interface ButtonHoverEffects {
  bg?: PaletteColor | string;
  color?: PaletteColor | string;
  boxShadow?: string;
  transform?: string;
  scale?: number;
}

export interface ISectionProps extends BaseUIProps, FormProps, MediaProps {}