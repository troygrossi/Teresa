
import {styled} from '@mui/material';
import {palette} from '../../../palette/palette';
import { IWindowState } from "../../../redux/slice/window.slice";
import photo from "../../../assets/photos/coacktail-background.png";
import { resizeRatio } from '../../../modules/resizeRatio';

interface IStyle {
  window?: IWindowState['windowQuery']
}



export const Style = () => {
  
    const WrapperSC = styled('div')(()=>({
        width: '100%',
        height: 'auto',
        position: 'relative',
        background: palette.primary(),
        display: 'flex',
        justifyContent: 'center',
        boxShadow: `inset 20px 0px 15px  ${palette.secondary('.6')}, inset -20px -0px 15px  ${palette.secondary('.6')} `,
    }))
    const PageSC = styled('div')<IStyle>(({window})=>({

        minHeight: '100vh',
        margin: resizeRatio('30px'),
        width: '100%',
        borderRadius: '35px 35px 35px 35px',
        border: '1px dotted red',
        // outline: `10px solid ${palette.tertiary('.8')}`,
        // outlineOffset: '-10px',
        maxWidth: '1600px',
      
         background: palette.primary(),
         overflow: 'hidden',
         ...(window?.tabletBig  && {
        
          }),
          ...(window?.tabletSmall  && {
        
          }),
          ...(window?.mobile  && {
            margin: '0px',
            marginTop: '0px',
            boxShadow: `inset 8px 0px 32px  ${palette.secondary('.6')}, inset -8px -0px 32px  ${palette.secondary('.6')} `,
            outline: 'none',
            borderRadius: '0px',
          })
    }))
    const WallpaperSC = styled('div')<IStyle>(({window})=>({
      position: 'absolute',
      backgroundImage: `url(${photo})`,
      backgroundSize: "35% auto",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      opacity: .1,
      height: "100%", // Takes up double the viewport height
      width: '100%',
      display: "flex",
      color: "white",

  }))


    return {
        WrapperSC,
        PageSC,
        WallpaperSC
    }
}

