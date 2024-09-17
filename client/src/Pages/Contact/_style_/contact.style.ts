import { styled } from "@mui/material";
import { IWindowState } from "../../../redux/slice/window.slice";

interface IStyle {
    window?: IWindowState["windowQuery"];
  }

export const Style = () => {
  

    const ContactSC = styled("div")<IStyle>(() => ({
        boxSizing: 'border-box',
        margin: '200px auto 0px auto',
        width: '70%',
        height: '500px',
        backgroundColor: 'red'
    }));
    return{
        ContactSC
    }
}