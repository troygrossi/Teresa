import { styled } from "@mui/material";
import { IWindowState } from "../../../redux/slice/window.slice";
import { palette } from "../../../palette/palette";

interface IStyle {
  window?: IWindowState["windowQuery"];
  isFocused?: boolean;
}

export const Style = () => {
  const ContactSC = styled("div")<IStyle>(({ window }) => ({
    boxSizing: "border-box",
    margin: "200px auto 0px auto",
    width: "70%",
    height: "500px",
    color: `${palette.tertiary()}`,
    backgroundColor: "red",
    background: `linear-gradient(45deg, ${palette.secondary(
      ".3"
    )} 5%, rgb(150, 150, 150, .8) 10%, ${palette.secondary(".3")} 20%)`,
    boxShadow: `10px 10px 50px 10px  black`,

    borderRadius: "15px",
    border: "3px solid rgba( 255, 255, 255, 0.18 )",
    ...(window?.mobile && {
      height: "4000px",
    }),
  }));

  const inputContainer = (): React.CSSProperties => ({
    position: "relative",
    margin: "20px 0px",
    width: "100%",
  });

  const InputSC = styled("input")<IStyle>(() => ({
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.3s ease-in-out",
    "&:focus": {
      borderColor: "#007bff",
    },
  }));

  const LabelSC = styled("label")<IStyle>(({ isFocused }) => ({
    position: "absolute",
    left: "12px",
    top: isFocused ? "-8px" : "50%",
    transform: isFocused ? "translateY(0)" : "translateY(-50%)",
    backgroundColor: "white",
    padding: "0 4px",
    fontSize: isFocused ? "12px" : "16px",
    color: isFocused ? "#007bff" : "#999",
    pointerEvents: "none",
    transition: "top 0.3s ease, font-size 0.3s ease, color 0.3s ease",
  }));

  return {
    ContactSC,
    InputSC,
    LabelSC,
    inputContainer,
  };
};
