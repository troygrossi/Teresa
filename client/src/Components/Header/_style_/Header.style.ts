import { styled } from "@mui/material";
import { paletteSC, palette, font } from "../../../palette/palette";
import { IWindowState } from "../../../redux/slice/window.slice";

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
    height: "150px",
    width: "100%",
    ...paletteSC.header.one(window),
    //
    transition: "height 0.15s ease-out",
    ...(window?.tabletBig && {
      height: "100px",
    }),
    ...(window?.tabletSmall && {
      height: "80px",
    }),
    ...(window?.mobile && {
      borderRadius: '0px',
      height: "75px",
    }),
  }));
  HeaderSC.displayName = "HeaderSC";
  const leftSideContainer = ({ window }: IStyle): React.CSSProperties => ({
    position: "absolute",
    left: "1%",
    width: "50%",
    maxWidth: "800px",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    //
    boxSizing: "border-box",
    ...(window?.mobile && {
      left: "4%",
      width: "70%",
    }),
  });
  const HomeIconSC = styled("div")<IStyle>(({ window }) => ({
    height: "50%",
    aspectRatio: "1 / 1",
    cursor: "pointer",
    borderRadius: "10px",
    padding: "10px",
    zIndex: 100,
    border: `5px solid ${palette.tertiary()}`,

    transition:
      "box-shadow 0.1s ease-out, background 0.1s ease-out, padding 0.1s ease-out",
    "&:hover": {
      background: "rgb(50, 50, 50, .2)",
      boxShadow: "0px 0px 20px 5px rgb(255, 255, 255, .2)",
    },
    ...(window?.tabletSmall && {
      padding: "5px",
      height: "50%",
      border: `4px solid ${palette.tertiary()}`,
    }),
    ...(window?.mobile && {
      padding: "7px",
      height: "50%",
      border: `3px solid ${palette.tertiary()}`,
      cursor: "auto",
    }),
  }));
  HomeIconSC.displayName = "HomeIconSC";
  const TitleSC = styled("div")<IStyle>(({ window }) => ({
    color: palette.tertiary(),
    height: "90%",
    display: "flex",
    alignItems: "center",
    //
    paddingTop: "50px",
    marginLeft: "50px",
    fontSize: "clamp(10px, 5vw, 70px)",
    ...(window?.tabletBig && {
      marginLeft: "25px",
      paddingTop: "30px",
    }),
    ...(window?.tabletSmall && {
      marginLeft: "20px",
      paddingTop: "30px",
    }),
    ...(window?.mobile && {
      marginLeft: "15px",
      fontSize: "7vw",
      paddingTop: "25px",
    }),
  }));
  TitleSC.displayName = "TitleSC";

  const rightSideContainer = ({ window }: IStyle): React.CSSProperties => ({
    position: "absolute",
    right: "5%",
    width: "45%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    //
    boxSizing: "border-box",

    transition: "right 0.15s ease-out",
    ...(window?.tabletBig && {
      right: "3%",
    }),
    ...(window?.tabletSmall && {
      right: "3%",
    }),
    ...(window?.mobile && {
      right: "7%",
    }),
  });

  const LinkSC = styled("div")<IStyle>(({ window }) => ({
    fontSize: "clamp(14px, 2vw, 50px)",
    margin: "0px 20px 0px 20px",
    color: palette.tertiary(),
    height: "40px",
    display: "flex",
    alignItems: "center",
    borderRadius: "10px",
    cursor: "pointer",
    boxSizing:'border-box',
    padding: "2px",
    marginTop: '75px',
    transition:
      "box-shadow 0.15s ease-out, background 0.15s ease-out, margin 0.15s ease-out",
    "&:hover": {
      background: "rgb(150, 150, 150, .17)",
      boxShadow: "0px 0px 20px 7px rgb(160, 160, 160, .19)",
    },
    ...(window?.tabletBig &&
      {
        // margin: "0px 12px 0px 12px",
        // fontSize: "23px",
        marginTop: '55px',
      }),
    ...(window?.tabletSmall && {
      margin: "0px 7px 0px 7px",
      marginTop: '40px',
      // fontSize: "14px",
    }),
    ...(window?.mobile && {
      margin: "0px 4px 0px 4px",
      
      // fontSize: "11px",
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
    transition: 'max-height .2s ease-out',
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

    transition: 'height .2s ease-out',
    color:'none',
    ...(dropDown && {
      height: '70px',
      color: palette.tertiary(),
    }),
  }));
  const LinkTitleSC = styled("div")<IStyle>(({dropDown}) => ({

    fontSize: '25px',
    // border: `1px solid ${palette.tertiary()}`,
    borderBottom: `1px solid ${palette.tertiary()}`,

    color:'none',
    transition: 'color .2s ease-out',
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
