import {styled} from '@mui/material'

export const Style = () => {
  
    const DropDownSC = styled('div')({
        boxSizing:'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems:'center',
        background: 'rgb(75, 75, 75, .5)',
        width: '150px',
        height: '150px',
        padding: '10px 0px 10px 0px',
        borderRadius: '5px',

    })
    const LineSC = styled('div')({
        width: '90%',
        borderBottom: 'solid 15px rgb(100, 100, 100, .5)'
    })

    return {DropDownSC, LineSC}
}