import { styled } from "@mui/material";
import { IWindowState } from "../../../redux/slice/window.slice";
import { palette } from "../../../palette/palette";

interface IStyle {
  window?: IWindowState["windowQuery"];
  isFocused?: boolean;
  isTextarea?: boolean;
}

export const Style = () => {
  const ContactSC = styled("div")<IStyle>(({ window }) => ({
    position: 'relative',
    boxSizing: "border-box",
  
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    margin: "150px auto 0px auto",
    width: "50%",
    height: "600px",
    color: `${palette.tertiary()}`,
    backgroundColor: "none",
    // background: `linear-gradient(45deg, ${palette.secondary(
    //   ".3"
    // )} 5%, rgb(150, 150, 150, .8) 10%, ${palette.secondary(".3")} 20%)`,
    // boxShadow: `10px 10px 50px 10px  black`,

    // borderRadius: "15px",
    border: "3px solid rgba( 255, 255, 255, 0.18 )",
    ...(window?.tabletBig && {
      width: "60%",
      margin: "100px auto 0px auto",
    }),
    ...(window?.tabletSmall && {
      width: "70%",
      margin: "80px auto 0px auto",
    }),
    ...(window?.mobile && {
      width: "90%",
      margin: "50px auto 0px auto",
    }),
  }));
  const HeaderSC = styled("h1")<IStyle>(() => ({
    position: 'absolute',
    width: '80%',
    top: '0px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '50px',
   boxSizing: 'border-box',
    marginTop:'10px',
    borderBottom: '2px solid'

  }));

  const inputContainer = (): React.CSSProperties => ({
    position: "relative",
    margin: "20px 0px",
    width: "100%",
  });
  const formContainer = (): React.CSSProperties => ({
    // flexGrow: 1,
    width: '80%',
display: 'flex',
flexDirection: 'column',
justifyContent: 'center'
  });

  const InputSC = styled("input")<IStyle>(() => ({
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    height: '40px',
    boxSizing: "border-box",
    border: '2px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    outline: 'none',
    "&:focus": {
      borderColor: palette.tertiary(),
      boxShadow: '0 0 8px rgba(90, 103, 216, 0.5)',
      backgroundColor: '#fff',
    },
  }));
  const TextareaSC = styled("textarea")<IStyle>(() => ({
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    height:'150px',
    boxSizing: "border-box",
    border: '2px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    outline: 'none',
    "&:focus": {
      borderColor: palette.tertiary(),
      boxShadow: '0 0 8px rgba(90, 103, 216, 0.5)',
      backgroundColor: '#fff',
    },
  }));

  const LabelSC = styled("label")<IStyle>(({ isFocused, isTextarea }) => ({
    position: "absolute",
    left: "12px",
    top: isFocused ? "0px" : "50%",
    ...(isTextarea && {
      top: isFocused ? "0px" : "10%",
    }),
    transform: isFocused ? 'translateY(-100%)' : 'translateY(-50%)',
    ...(isTextarea && {
      transform: isFocused ? "translateY(-100%)" : "translateY(0)",
    }),
    // backgroundColor: "white",
    padding: "0 4px",
    fontWeight: 'bold',
    fontSize: isFocused ? "12px" : '15px',
    color: isFocused ? `${palette.tertiary()}` : `${palette.black('.5')}`,
    pointerEvents: "none",
    transition: "top 0.3s ease, font-size 0.3s ease, color 0.3s ease",
  }));
  const ErrorSC = styled("div")<IStyle>(() => ({
   position: 'absolute',
   color: palette.white('.7'),
   left: '40%',
   top: '-20px',
  }));
  const ButtonSC = styled("button")<IStyle>(({window}) => ({
    padding: '10px 20px',
    fontSize: '20px',
    color: palette.black(),
fontWeight: 'bold',
    backgroundColor: palette.tertiary('.8'), 
    border: 'none',
    borderRadius: '8px', 
    cursor: 'pointer', 
    // transition: 'background-color 0.3s ease, box-shadow 0.3s ease', 
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', 
    outline: 'none', 
    transition: "box-shadow 0.1s ease-out, background 0.1s ease-out, padding 0.1s ease-out",
    "&:hover": {
      boxShadow: "0px 0px 20px 5px rgb(255, 255, 255, .2)",
    },
    '&:active': {
      backgroundColor: palette.tertiary('.6'), 
      boxShadow: "inset 0px 0px 20px 5px rgb(255, 255, 255, .2)",
    },
    ...(window?.mobile &&  {
      cursor: 'default', 
    })

   }));

  const loading = (): React.CSSProperties => ({
    position: 'absolute',
    bottom: '0px',
    left: '50%',
    fontSize: '20px',
    transform: 'translateX(-50%)',
    marginBottom: '20px'
  });
  return {
    ContactSC,
    HeaderSC,
    formContainer,
    InputSC,
    TextareaSC,
    LabelSC,
    ErrorSC,
    inputContainer,
    ButtonSC,
    loading
    
  };
};
