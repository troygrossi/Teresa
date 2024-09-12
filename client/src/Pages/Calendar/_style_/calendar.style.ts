import {styled} from '@mui/material';


export const Style = () => {
  

    const CalendarSC = styled('div')({
        width: '80%',
        height: '600px'
    })
    const calendarIFrame = () => ({
        width: '100%',
        height: '100%',
        border: "solid 1px #777"
    })

    return{
        CalendarSC,
        calendarIFrame
    }
}