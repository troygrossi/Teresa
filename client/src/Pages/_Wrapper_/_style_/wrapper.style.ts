
import {styled} from '@mui/material';



export const Style = () => {
  
    const WrapperSC = styled('div')({
        height: '100%',
        width: '100%',
        background: 'rgb(51, 51, 52)',
        display: 'flex',
        justifyContent: 'center'
    })
    const PageSC = styled('div')({
        height: '100vh',
        width: '100%',
        borderRadius: '35px 35px 0px 0px',
        marginTop: '100px',
        maxWidth: '1500px',
        boxShadow: '20px 20px 60px 0px rgb(0, 0, 0, .6), -20px -20px 60px rgb(0, 0, 0, .6)',
        
        
         background: 'rgb(0, 63, 61)'

    })


    return {
        WrapperSC,
        PageSC
    }
}

