import { IWindowState } from "../redux/slice/window.slice";
export const palette = {
  primary: (a = "1") => {
    return `rgb(30, 30, 30, ${a})`;
  },
  tertiary: (a = "1") => {
    return `rgba(212, 175, 55, ${a})`;
  },
  secondary: (a = "1") => {
    return `rgb(0, 128, 128, ${a})`;
  },
  contrast: (a = "1") => {
    return `rgba(230, 230, 230, ${a})`;
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
      )} 30%, rgb(150, 150, 150, .8) 40%, ${palette.primary(".9")} 60%)`,
      boxShadow: `0 8px 32px  ${palette.secondary('.4')}`,
      backdropFilter: "blur( 4.5px )",
      webkitBackdropFilter: "blur( 4.5px )",
      borderRadius: "0px 0px 15px 15px",
      border: "3px solid rgba( 255, 255, 255, 0.18 )",
      borderTop: "none",

      ...(window?.tabletBig && {

        background: `linear-gradient(45deg, ${palette.primary(
          ".9"
        )} 35%, rgb(150, 150, 150, .8) 45%, ${palette.primary(".9")} 60%)`,
      }),
      ...(window?.tabletSmall && {

        background: `linear-gradient(45deg, ${palette.primary(
          ".9"
        )} 35%, rgb(150, 150, 150, .8) 45%, ${palette.primary(".9")} 60%)`,
      }),
      ...(window?.mobile && {

        background: `linear-gradient(45deg, ${palette.primary(
          ".9"
        )} 35%, rgb(150, 150, 150, .8) 45%, ${palette.primary(".9")} 60%)`,
      }),
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
