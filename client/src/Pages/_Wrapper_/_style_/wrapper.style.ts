
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
        margin: '30px 30px 50px 30px',
        width: '100%',
        borderRadius: '35px 35px 35px 35px',
        outline: `10px solid ${palette.tertiary('.8')}`,
        outlineOffset: '-10px',
        maxWidth: '1600px',
        boxShadow: '20px 20px 60px 0px rgb(0, 0, 0, .6), -20px -20px 60px rgb(0, 0, 0, .6)',
        
        
         background: palette.primary(),
         ...(window?.tabletBig  && {
        
          }),
          ...(window?.tabletSmall  && {
        
            outline: `4px solid ${palette.tertiary()}`,
            outlineOffset: '-12px',
          }),
          ...(window?.mobile  && {
            margin: '0px',
            marginTop: '0px',
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

