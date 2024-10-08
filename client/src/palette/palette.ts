import { IWindowState } from "../redux/slice/window.slice";
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

export const paletteSC = {
  header: {
    one: (window: IWindowState["windowQuery"] | undefined) => ({
      background: `linear-gradient(45deg, ${palette.primary(
      ".9"
    )} 30%, ${palette.primary(".5")} 40%, ${palette.primary(
      ".9"
    )} 70%, ${palette.primary(".9")} 100%)`,
      boxShadow: `0 8px 32px  ${palette.primary('.3')}`,
      backdropFilter: "blur( 4.5px )",
      webkitBackdropFilter: "blur( 4.5px )",
   
      border: "3px solid rgba( 255, 255, 255, 0.18 )",
      borderTop: "none",

      // ...(window?.tabletBig && {

      //   background: `linear-gradient(45deg, ${palette.primary(
      //     ".9"
      //   )} 35%, rgb(150, 150, 150, .8) 45%, ${palette.primary(".9")} 60%)`,
      // }),
      // ...(window?.tabletSmall && {

      //   background: `linear-gradient(45deg, ${palette.primary(
      //     ".9"
      //   )} 35%, rgb(150, 150, 150, .8) 45%, ${palette.primary(".9")} 60%)`,
      // }),
      // ...(window?.mobile && {

      //   background: `linear-gradient(45deg, ${palette.primary(
      //     ".9"
      //   )} 50%, rgb(150, 150, 150, .8) 65%, ${palette.primary(".9")} 80%)`,
      // }),
    }),
  },
  dropDown: {
    one: {
      background: palette.primary(".9"),
      boxShadow: `0 8px 20px rgb(0, 0, 0), 0 -8px 10px rgb(0, 0, 0)`,
      backdropFilter: "blur( 4.5px )",
      webkitBackdropFilter: "blur( 4.5px )",


      transition: 'height .15s ease-out'
    },
  },
};
