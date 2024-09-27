import { styled } from "@mui/material";
import { palette } from "../../../palette/palette";
// import {palette} from '../../../palette/palette';
import { IWindowState } from "../../../redux/slice/window.slice";

interface IStyle {
  window?: IWindowState["windowQuery"];
  // flexDirection
  column?: boolean;
  row?: boolean;
  // justifyContent/alignItems
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  center?: boolean;
  between?: boolean;
  around?: boolean;
  //   height
  h?: string | number;
  hTB?: string | number;
  hTS?: string | number;
  hM?: string | number;
  //   width
  w?: string | number;
  wTB?: string | number;
  wTS?: string | number;
  wM?: string | number;
  //   padding
  p?: string | number;
  pTB?: string | number;
  pTS?: string | number;
  pM?: string | number;
  //   margin
  m?: string | number;
  mTB?: string | number;
  mTS?: string | number;
  mM?: string | number;
  //   flex
  flex?: string | number;
  flexTB?: string | number;
  flexTS?: string | number;
  flexM?: string | number;
  //   flexDirection
  fd?: "column" | "row";
  fdTB?: "column" | "row";
  fdTS?: "column" | "row";
  fdM?: "column" | "row";
  //   TB=window.tabletBig, TS=window.tabletSmall, M=window.mobile,
}

export const Style = () => {
  const PageLayoutSC = styled("div")<IStyle>(({ window }) => ({
    display: "flex",
    border: "5px, solid green",
    flexDirection: "column",
    marginTop: "50px",
    height: "100vh", // Adjust the height as needed
    boxSizing: "border-box",
    transition: 'all .1s',
    ...((window?.tabletSmall || window?.mobile) && {
      flexDirection: "column",
    }),
  }));

  const Section = styled("div")<IStyle>(
    ({
      row,
      column,
      top,
      bottom,
      left,
      right,
      center,
      h,
      hTB,
      hTS,
      hM,
      w,
      wTB,
      wTS,
      wM,
      p,
      pTB,
      pTS,
      pM,
      m,
      mTB,
      mTS,
      mM,
      flex,
      flexTB,
      flexTS,
      flexM,

      window,
    }) => ({
      border: "1px dotted yellow",
      transition: 'all .1s',
      //
      position: "relative",
      display: "flex",
      boxSizing: "border-box",
      //   justifyContent: "center",
      justifyContent:
        left && !column
          ? "flex-start"
          : right && !column
          ? "flex-end"
          : top && column
          ? "flex-start"
          : bottom && column
          ? "flex-end"
          : center
          ? "center"
          : "normal",
      alignItems:
        left && column
          ? "flex-start"
          : right && column
          ? "flex-end"
          : top && !column
          ? "flex-start"
          : bottom && !column
          ? "flex-end"
          : center
          ? "center"
          : "normal",
      //
      flexDirection: column ? "column" : row ? "row" : "row",
      //
      height: h || "100%",
      width: w || "auto",
      margin: m || "0px",
      padding: p || "0px",
      flex: flex || "0 1 auto",

      ...(window?.tabletBig && {

        height: hTB || h || "100%",
        width: wTB || w || "auto",
        margin: mTB || m || "0px",
        padding: pTB || p || "0px",
        flex: flexTB || flex || "0 1 auto",
      }),
      ...(window?.tabletSmall && {

        height: hTS || hTB || h || "100%",
        width: wTS || wTB || w || "auto",
        margin: mTS || mTB || m || "0px",
        padding: pTS || pTB || p || "0px",
        flex: flexTS || flexTB || flex || "0 1 auto",
      }),
      ...(window?.mobile && {

        height: hM || hTS || hTB || h || "100%",
        width: wM || wTS || wTB || w || "auto",
        margin: mM || mTS || mTB || m || "0px",
        padding: pM || pTS || pTB || p || "0px",
        flex: flexM || flexTS || flexTB || flex || "0 1 auto",
      }),
    })
  );

  const imageColumn = (): React.CSSProperties => ({
    background: `linear-gradient(45deg, ${palette.primary(
      ".9"
    )} 63%, rgb(150, 150, 150, .8) 73%, ${palette.primary(".9")} 83%)`,
  });

  const imageContainer = ({ window }: IStyle): React.CSSProperties => ({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    // transform: 'translateY(12vw)',
    // bottom: '150px',
    top: "0px",
    ...((window?.mobile || window?.tabletSmall) && {
      width: "100%",
      transform: "translateY(0px)",
      bottom: "0px",
    }),
  });

  const ImageContainerSC = styled("div")<IStyle>(
    ({
      h,
      hTB,
      hTS,
      hM,
      w,
      wTB,
      wTS,
      wM,
      p,
      pTB,
      pTS,
      pM,
      m,
      mTB,
      mTS,
      mM,
      flex,
      flexTB,
      flexTS,
      flexM,
      fd,
      fdTB,
      fdTS,
      fdM,
      window,
    }) => ({
      width: w || "100%",
      height: h || "100%",
      margin: m || "0px",
      display: "flex",
      // top: '0px',  // Change to relative positioning
      overflow: "hidden",
      backgroundColor: "none",
      borderRadius: "8px",

      ...(window?.tabletBig && {
        flexDirection: fdTB || fd || "column",
        height: hTB || h || "100%",
        width: wTB || w || "auto",
        margin: mTB || m || "0px",
        padding: pTB || p || "0px",
        flex: flexTB || flex || "0 1 auto",
      }),
      ...(window?.tabletSmall && {
        flexDirection: fdTS || fdTB || fd || "column",
        height: hTS || hTB || h || "100%",
        width: wTS || wTB || w || "auto",
        margin: mTS || mTB || m || "0px",
        padding: pTS || pTB || p || "0px",
        flex: flexTS || flexTB || flex || "0 1 auto",
      }),
      ...(window?.mobile && {
        flexDirection: fdM || fdTS || fdTB || fd || "column",
        height: hM || hTS || hTB || h || "100%",
        width: wM || wTS || wTB || w || "auto",
        margin: mM || mTS || mTB || m || "0px",
        padding: pM || pTS || pTB || p || "0px",
        flex: flexM || flexTS || flexTB || flex || "0 1 auto",
      }),
    })
  );

  const ResponsiveImageSC = styled("img")<IStyle>(() => ({
    // position: 'absolute',  // Position absolute to fill container
    // top: '50%',  // Center vertically
    // left: '50%',  // Center horizontally
    // transform: 'translate(-50%, -50%)',  // Center the image
    width: "100%",
    height: "100%",
    objectFit: "cover",

    // ...(window?.tabletBig && {
    //   objectFit: 'contain',
    // }),

    // ...(window?.tabletSmall && {
    //   objectFit: 'scale-down',
    // }),

    // ...(window?.mobile && {
    //   objectFit: 'fill',
    // })
  }));

  const titleContainer1 = (): React.CSSProperties => ({
    position: "absolute",
    zIndex: 9,
    bottom: "260px",
    transform: "translateX(-380px)",
    display: "flex",
    justifyContent: "flex-right",
    width: "90%",
    boxSizing: "border-box",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",

  });
  const titleContainer2 = ({ window }: IStyle): React.CSSProperties => ({
    position: "absolute",
    zIndex: 9,
    display: "flex",
    width: "90%",
    boxSizing: "border-box",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
        justifyContent: "center",
      transform: "translateX(0px)",
      bottom: "80px",
      ...(window?.tabletSmall && {
        bottom: '80px'
      }),
      ...(window?.mobile && {
        bottom: '60px'
      })
  });
  const Title1SC = styled("div")<IStyle>(({ window }) => ({
    color: palette.tertiary(),
    zIndex: 9,
    fontSize: "150px",
    ...(window?.tabletBig && {
        marginRight: "10%",
      fontSize: "clamp(100px, 13vw, 130px)",
    }),
    ...(window?.tabletSmall && {
        marginRight: "7%",
        fontSize: "clamp(60px, 11vw, 110px)",
      }),
      ...(window?.mobile && {
        marginRight: "7%",
        fontSize: "clamp(45px, 11vw, 70px)",
      }),
    
    
  }));
  const Title2SC = styled("div")<IStyle>(({ window }) => ({
    color: palette.tertiary(),
    zIndex: 9,
    marginLeft: "25%",
    marginTop: "120px",
    fontSize: "130px",
    ...(window?.tabletBig && {
        marginLeft: "5%",
        marginTop: "70px",
        fontSize: "clamp(100px, 11vw, 130px)",
    }),
    ...(window?.tabletSmall && {
        marginLeft: "5%",
        marginTop: "30px",
        fontSize: "clamp(60px, 11vw, 100px)",
      }),
      ...(window?.mobile && {
        marginLeft: "5%",
        marginTop: "30px",
        fontSize: "clamp(35px, 11vw, 70px)",
      }),
  }));
  const Title3SC = styled("div")<IStyle>(({ window }) => ({
    color: palette.tertiary(),
    zIndex: 9,
    marginLeft: "20px",
    marginTop: "20px",
    fontSize: "250px",
    ...(window?.tabletBig && {
        marginLeft: "10px",
        marginTop: "10px",
        fontSize: "150px",
        // fontSize: "clamp(130px, 12vw, 150px)",
    }),
    ...(window?.tabletSmall && {
        marginLeft: "10px",
        marginTop: "10px",
        fontSize: "clamp(80px, 11vw, 130px)",
      }),
      ...(window?.mobile && {
        marginLeft: "10px",
        marginTop: "15px",
        fontSize: "clamp(45px, 10vw, 90px)",
      }),
  }));

  const bioContainer = (): React.CSSProperties => ({});

  return {
    PageLayoutSC,
    imageColumn,
    imageContainer,
    ImageContainerSC,
    ResponsiveImageSC,
    titleContainer1,
    titleContainer2,
    Title1SC,
    Title2SC,
    Title3SC,
    Section,
    bioContainer,
  };
};
