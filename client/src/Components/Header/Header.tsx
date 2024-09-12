// import { DropDown } from "../../UI/DropDown/DropDown";
import { Style } from "./_style_/Header.style";
import { useNavigate } from "react-router-dom";
import cocktailIcon from '../../assets/cocktail-white.png'

const { HeaderSC, TitleSC, ContactNavSC, CalendarNavSC, HomeIconSC, ...style } = Style();

export const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderSC className="nav-bar">
      <div  style={style.leftSideContainer()}>
        <HomeIconSC 
         onClick={() => {
          navigate("/");
        }}>
          <img height='100%' width='100%' src={cocktailIcon}></img>
        </HomeIconSC>
        <TitleSC>Teresa</TitleSC>
      </div>
      <div style={style.rightSideContainer()}>
        <CalendarNavSC
          onClick={() => {
            navigate("/calendar");
          }}
        >
          Calendar
        </CalendarNavSC>
        <ContactNavSC
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact
        </ContactNavSC>
      </div>
      {/* <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translate(0%, -50%)",
          left: "30px",
        }}
      > */}
      {/* <DropDown></DropDown> */}
      {/* </div> */}
    </HeaderSC>
  );
};
