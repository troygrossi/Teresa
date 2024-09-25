
import {styled} from '@mui/material';
import {palette} from '../../../palette/palette';
import { IWindowState } from "../../../redux/slice/window.slice";

interface IStyle {
  window?: IWindowState['windowQuery']
}



export const Style = () => {
  
    const WrapperSC = styled('div')(()=>({
        width: '100%',
        background: palette.secondary(),
        display: 'flex',
        justifyContent: 'center'
    }))
    const PageSC = styled('div')<IStyle>(({window})=>({
        minHeight: '100vh',
        margin: '0px 30px 0px 30px',
        width: '100%',
        borderRadius: '35px 35px 0px 0px',
        outline: `10px solid ${palette.tertiary('.4')}`,
        outlineOffset: '-10px',
        marginTop: '100px',
        maxWidth: '1600px',
        boxShadow: '20px 20px 60px 0px rgb(0, 0, 0, .6), -20px -20px 60px rgb(0, 0, 0, .6)',
        
        
         background: palette.primary(),
         ...(window?.tabletBig  && {
            marginTop: '80px',
          }),
          ...(window?.tabletSmall  && {
            marginTop: '70px',
            outline: `4px solid ${palette.tertiary()}`,
            outlineOffset: '-12px',
          }),
          ...(window?.mobile  && {
            margin: '0px',
            marginTop: '50px',
            boxShadow: `inset 8px 0px 32px  ${palette.secondary('.6')}, inset -8px -0px 32px  ${palette.secondary('.6')} `,
            outline: 'none',
            borderRadius: '0px',
          })
    }))


    return {
        WrapperSC,
        PageSC
    }
}

