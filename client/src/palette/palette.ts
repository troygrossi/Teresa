
export const palette = {
  primary: (a: string = "1") => {
    return `rgb(30, 30, 30, ${a})`;
  },
  tertiary: (a = "1") => {
    return `rgba(212, 175, 55, ${a})`;
  },
  secondary: (a = "1") => {
    return `rgb(0, 150, 150, ${a})`;
  },
  contrast: (a = "1") => {
    return `rgba(230, 230, 230, ${a})`;
  },
  black: (a = "1") => {
    return `rgba(0, 0, 0, ${a})`;
  },
  white: (a = "1") => {
    return `rgba(255, 255, 255, ${a})`;
  },
  copper: (a = "1") => {
    return `rgba(76, 48, 21, ${a})`;
  },
  
};
export const font = {
  primary: "Times New Roman, Times, serif",
};
