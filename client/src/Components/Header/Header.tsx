// import { DropDown } from "../../UI/DropDown/DropDown";
import { Style } from "./_style_/Header.style";
import { useNavigate } from "react-router-dom";
import cocktailIcon from "../../assets/cocktail-white.png";
import { useSelector } from "../../redux/redux";
import { DropDown } from "./Header.Components/DropDown/DropDown";
import { useLinks } from "./Header.Components/links";
import { DropDownList } from "./Header.Components/DropDown/DropDownList";
import { useState } from "react";

const { HeaderSC, TitleSC, LinkSC, HomeIconSC, ...style } = Style();

export const Header = () => {
  const links = useLinks();
  const window = useSelector((state) => state.window.windowQuery);
  const navigate = useNavigate();

  const [dropDown, setDropDown] = useState(false);
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (target?.getAttribute("data-drop-down") === "true") {
      return;
    }
    setDropDown(false);
  });
  return (
    <>
      <HeaderSC window={window} className="nav-bar">
        <div style={style.leftSideContainer({ window })}>
          <HomeIconSC
            window={window}
            onClick={() => {
              navigate("/");
            }}
          >
            <img height="100%" width="100%" src={cocktailIcon}></img>
          </HomeIconSC>
          <TitleSC window={window}>Cocktails by T</TitleSC>
        </div>
        <div style={style.rightSideContainer({ window })}>
          {window.mobile ? (
            <DropDown dropDown={dropDown} setDropDown={setDropDown}></DropDown>
          ) : (
            links.map((link, index) => (
              <LinkSC
                key={index}
                window={window}
                onClick={() => {
                  link.onClick();
                }}
              >
                {link.title}
              </LinkSC>
            ))
          )}
        </div>
        {window.mobile && (
          <DropDownList
            links={links}
            dropDown={dropDown}
            setDropDown={setDropDown}
          ></DropDownList>
        )}
      </HeaderSC>
    </>
  );
};
