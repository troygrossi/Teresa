import { styled } from "@mui/material";

export const Style = () => {
  const HeaderSC = styled("div")({
    position: "fixed",
    boxSizing: "border-box",
    height: "150px",
    width: "100%",
    background: 'linear-gradient(45deg, rgb(0, 0, 0, .8) 30%, rgb(50, 50, 50, .8) 10%, rgb(0, 0, 0, .8) 51%)',
boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
backdropFilter: 'blur( 4.5px )',
webkitBackdropFilter: 'blur( 4.5px )',
borderRadius: '0px 0px 15px 15px',
border: '3px solid rgba( 255, 255, 255, 0.18 )',
borderTop: 'none'
  });
  HeaderSC.displayName = "HeaderSC";
  const leftSideContainer = (): React.CSSProperties => ({
    position: "absolute",
    left: "50px",
    width: "22%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    //
    boxSizing: "border-box",
  });
  const HomeIconSC = styled("div")({
    height: "70px",
    width: "70px",
    cursor: "pointer",
    borderRadius: "10px",
    zIndex: 100,
    border:'5px solid rgb(255, 255, 255)',
    padding: '20px',
    transition: 'box-shadow 0.1s ease-out, background 0.1s ease-out, color 0.1s ease-out',
    "&:hover": {
      background: "rgb(50, 50, 50, .2)",
      boxShadow: "0px 0px 20px 5px rgb(255, 255, 255, .2)",
    },
  });
  HomeIconSC.displayName = "HomeIconSC";
  const TitleSC = styled("div")({
    fontSize: "90px",
    color: "white",
    height: "100%",
    fontFamily: "cursive",
    display: "flex",
    alignItems: "flex-end",
  });
  TitleSC.displayName = "TitleSC";

  const rightSideContainer = (): React.CSSProperties => ({
    position: "absolute",
    right: "30%",
    width: "20%",
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-end",
    //
    boxSizing: "border-box",
    paddingBottom: "20px",
  });
  const ContactNavSC = styled("div")({
    fontSize: "30px",
    color: "white",
    height: "auto",
    fontFamily: "cursive",
    display: "flex",
    alignItems: "center",
    borderRadius: "10px",
    cursor: "pointer",
    padding: "2px",
    transition: 'box-shadow 0.15s ease-out, background 0.15s ease-out, color 0.15s ease-out',
    "&:hover": {
        background: "rgb(150, 150, 150, .17)",
        boxShadow: "0px 0px 20px 7px rgb(160, 160, 160, .19)",
    },
  });
  TitleSC.displayName = "ContactNavSC";
  const CalendarNavSC = styled("div")({
    fontSize: "30px",
    color: "white",
    height: "auto",
    fontFamily: "cursive",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: "10px",
    padding: "2px",
    transition: 'box-shadow 0.15s ease-out, background 0.15s ease-out, color 0.15s ease-out',
    "&:hover": {
        background: "rgb(150, 150, 150, .17)",
        boxShadow: "0px 0px 20px 7px rgb(160, 160, 160, .19)",
    },
  });
  TitleSC.displayName = "CalendarNavSC";

  return {
    leftSideContainer,
    HomeIconSC,
    HeaderSC,
    TitleSC,
    rightSideContainer,
    ContactNavSC,
    CalendarNavSC,
  };
};
