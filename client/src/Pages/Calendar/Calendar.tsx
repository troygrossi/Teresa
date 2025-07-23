import { useEffect, useState } from 'react';
import { Section } from '../../Components/UI/Section';
import { palette } from '../../palette/palette';
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
    <Section 
      className="calendar-page" 
      column 
      center 
      width="100%" 
      minHeight="100vh" 
      padding="140px 20px 20px 20px"
      mobile={{ padding: "90px 8px 20px 8px" }}
    >
      {/* Calendar Header */}
      <Section
        as="h1"
        className="calendar-header"
        color="tertiary"
        marginBottom={40}
        fontSize={48}
        mobile={{ fontSize: 36 }}
        fontWeight="bold"
        textAlign="center"
        filter={`drop-shadow(0px 2px 4px ${palette.primary('.3')})`}
      >
        Calendar
      </Section>

      {/* Calendar Container */}
      <Section
        className="calendar-container"
        width="80%"
        height={600}
        maxWidth={1200}
        bg="primary"
        bgAlpha="0.1"
        border
        borderColor="tertiary"
        borderAlpha="0.18"
        borderRadius={15}
        padding={20}
        mobile={{
          width: "98%",
          height: 500,
          maxWidth: "100%",
          padding: 8
        }}
        overflow="hidden"
        backdropFilter="blur(10px) saturate(1.2)"
      >
        <iframe 
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23ffffff&src=dHJveWpncm9zc2lAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043"
          style={{
            width: '100%',
            height: '100%',
            border: `1px solid ${palette.tertiary('0.3')}`,
            borderRadius: '8px',
          }}
        />
      </Section>
    </Section>
  );
};
