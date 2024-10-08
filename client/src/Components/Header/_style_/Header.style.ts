import { styled } from "@mui/material";
import { paletteSC, palette, font } from "../../../palette/palette";
import { IWindowState } from "../../../redux/slice/window.slice";
import { resizeRatio } from "../../../modules/resizeRatio";

interface IStyle {
  window?: IWindowState["windowQuery"];
  dropDown?: boolean,
  count?: number
}

export const Style = () => {
  const HeaderSC = styled("div")<IStyle>(({ window }) => ({
    zIndex: 10,
    position: "fixed",
    boxSizing: "border-box",
    fontFamily: font.primary,
    height: resizeRatio('120px'),
    width: "100%",
    ...paletteSC.header.one(window),
    //
    transition:
    "all  0.1s ease-out",
    ...(window?.mobile && {
      borderRadius: '0px',
      height: "60px",
    }),
  }));
  HeaderSC.displayName = "HeaderSC";
  const leftSideContainer = ({ window }: IStyle): React.CSSProperties => ({
    position: "absolute",
    width: "50%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    //
    fontSize: resizeRatio('60px'),
    boxSizing: "border-box",
    ...(window?.mobile && {
      left: "3%",
      width: "70%",
    }),
  });
  const HomeIconSC = styled("div")<IStyle>(({ window }) => ({
    height: resizeRatio('55px'),
    aspectRatio: "1 / 1",
    cursor: "pointer",
    borderRadius: ".2em",
    padding: resizeRatio("10px"),
    zIndex: 100,
    border: `${resizeRatio('7px')} solid ${palette.tertiary()}`,


    transition:
      "all  0.1s ease-out",
    marginLeft: resizeRatio('10px'),
    "&:hover": {
      background: "rgb(50, 50, 50, .2)",
      boxShadow: "0px 0px 20px 5px rgb(255, 255, 255, .2)",
    },

    ...(window?.mobile && {
      padding: "7px",
      height: "40%",
      border: `3px solid ${palette.tertiary()}`,
      cursor: "auto",
    }),
  }));
  HomeIconSC.displayName = "HomeIconSC";
  const TitleSC = styled("div")<IStyle>(({ window }) => ({
    color: palette.tertiary(),
    display: "flex",
    alignItems: "center",
    filter: `drop-shadow(-1px 10px 10px ${palette.black()})`,
    
    // 
    transform: 'translateY(.3em)',
    transition:
    "all .15s ease-out",
    marginLeft: resizeRatio("40px"),
    ...(window?.mobile && {
      marginLeft: "10px",

      transform: 'translateY(.4em)'
      // paddingTop: "25px",
    }),
  }));
  TitleSC.displayName = "TitleSC";

  const rightSideContainer = ({ window }: IStyle): React.CSSProperties => ({
    position: "absolute",
    right: "5%",
    width: "50%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    //
    fontSize: resizeRatio('40px'),
    boxSizing: "border-box",

    transition:
    "all  0.1s ease-out",
    ...(window?.mobile && {
      right: "7%",
    }),
  });

  const LinkSC = styled("div")<IStyle>(({ window }) => ({

    
    color: palette.tertiary(),
    height: "40px",
    display: "flex",
    alignItems: "center",
    borderRadius: "10px",
    cursor: "pointer",
    boxSizing:'border-box',
    padding: "2px",
    // 
    transition:
    "all  0.1s ease-out",
    marginLeft: resizeRatio('20px'),
    marginRight: resizeRatio('20px'),

    transform: 'translateY(.67em)',
    "&:hover": {
      background: "rgb(150, 150, 150, .17)",
      boxShadow: "0px 0px 20px 7px rgb(160, 160, 160, .19)",
    },
    ...(window?.mobile && {
      margin: "0px 4px 0px 4px",
    }),
  }));

  TitleSC.displayName = "CalendarNavSC";
  const DropDownSC = styled("div")<IStyle>(() => ({
    width: "10vw",
    height: "10vw",
    display: "flex",
    background: "none",
    flexDirection: "column",
    justifyContent: "space-around",
    "&:hover": {
      background: "rgb(150, 150, 150, .17)",
      boxShadow: "0px 0px 20px 7px rgb(160, 160, 160, .19)",
    },
  }));
  TitleSC.displayName = "DropDownSC";
  const dropDownLine = (): React.CSSProperties=>({
    padding: '2px',
    background: palette.tertiary()

  })
  const DropDownListSC = styled("div")<IStyle>(({dropDown}) => ({
    position: 'absolute',
    top: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: "hidden",
    maxHeight: '0px',
    ...paletteSC.dropDown.one,
    transition:
      "all  0.1s ease-out",
    ...(dropDown && {
      maxHeight: '1000px',
    })
  }));
  const DropDownLinkSC = styled("div")<IStyle>(({dropDown}) => ({
    height:'0px',
    paddingLeft: '20px',
    overflow: "hidden",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    // border: `1px solid ${palette.tertiary()}`,

    transition:
    "all  0.1s ease-out",
    color:'none',
    ...(dropDown && {
      height: '70px',
      color: palette.tertiary(),
    }),
  }));
  const LinkTitleSC = styled("div")<IStyle>(({dropDown}) => ({

    // border: `1px solid ${palette.tertiary()}`,
    borderBottom: `1px solid ${palette.tertiary()}`,

    color:'none',
    transition:
    "all  0.1s ease-out",
    "&:hover": {
      background: "rgb(200, 200, 200, .2)",
      boxShadow: "0px 0px 20px 5px rgb(255, 255, 255, .2)",
    },
    ...(dropDown && {
      color: palette.tertiary(),
    }),

  }));

  return {
    leftSideContainer,
    HomeIconSC,
    HeaderSC,
    TitleSC,
    rightSideContainer,
    LinkSC,
    DropDownSC,
    dropDownLine,
    DropDownListSC,
    DropDownLinkSC,
    LinkTitleSC
  };
};
