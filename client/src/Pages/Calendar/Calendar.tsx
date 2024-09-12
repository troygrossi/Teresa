import { Style } from "./_style_/calendar.style";
import {useEffect, useState} from 'react';


const { CalendarSC, ...style} = Style();
export const Calendar = () => {
const apiKey = import.meta.env.VITE_CALENDAR_API_KEY
console.log(apiKey)

    const [calendarData, setCalendarData] = useState<string | undefined>(undefined);


    useEffect(()=>{

        const fetchCalendarEventData = async () => {
            try{
                const  response = await fetch('/api/calendar');
                console.log(response)
                if(!response.ok) {
                    throw new Error('Could not fetch Calendar event data')
                }
                const result = await response.json();
                setCalendarData(result)
            }catch(error){
                console.log(error)
            }finally{
                console.log('Fetch calendar event data complete')
            }
        }
        fetchCalendarEventData()

    }, [])

    console.log(calendarData)

  return (
    <div>
      <h1>Calendar</h1>
      <CalendarSC>
        <iframe 
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23ffffff&src=dHJveWpncm9zc2lAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043"
          style={style.calendarIFrame()}
        ></iframe>
      </CalendarSC>
    </div>
  );
};
