import { useNavigate } from "react-router-dom";
import cocktailIcon from "../../assets/cocktail-white.png";
import { useSelector } from "../../redux/redux";
import { useState, useEffect } from "react";
import { Section } from "../UI/Section";
import { palette } from "../../palette/palette";
import { resizeRatio } from "../../modules/resizeRatio";
import { DropDown } from "./Header.Components/DropDown/DropDown";
import { useLinks } from "./Header.Components/links";
import { DropDownList } from "./Header.Components/DropDown/DropDownList";
import "./_style_/Header.style.css";

export const Header = () => {
  const links = useLinks();
  const window = useSelector((state) => state.window.windowQuery);
  const navigate = useNavigate();

  const [dropDown, setDropDown] = useState(false);
  
  console.log('Header component rendered - padding should be 30');
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      console.log('Click outside handler triggered, target:', target, 'data-drop-down:', target?.getAttribute("data-drop-down"));
      if (target?.getAttribute("data-drop-down") === "true") {
        console.log('Click was on dropdown element, ignoring');
        return;
      }
      console.log('Click was outside, closing dropdown');
      setDropDown(false);
    };

    document.addEventListener("click", handleClickOutside);
    
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <Section
      className="header-container"
      as="header"
      position="fixed"
      left
      width="100vw"
      height={120}
      mobile={{ height: 75 }}
      row
      bg="primary"
      bgAlpha="0.95"
      borderRadius={0}
      zIndex={10}
      padding={0}
      border={`${resizeRatio('1px')} solid ${palette.tertiary('0.2')}`}
      shadow={false}
      topPos={0}
      leftPos={0}
      backdropFilter="blur(10px) saturate(1.2)"
      overflow="visible"
    >
      {/* Left side - Logo and Title */}
      <Section
        className="header-left"
        position="absolute"
        width="50%"
        height="100%"
        row
        left
        center
        gap={40}
        leftPos={100}
        paddingLeft={20}
        mobile={{
          width: "70%",
          gap: 10,
          leftPos: 5,
          paddingLeft: 10
        }}
      >
        {/* Logo Icon */}
        <Section
          key="header-logo-v2"
          className="header-logo"
          border={`${resizeRatio('8px')} solid ${palette.tertiary('1')}`}
          center
          width={100}
          height={100}
          padding={10}
          mobile={{
            width: 50,
            height: 50,
            padding: 7
          }}
          borderRadius={10}
          bg="transparent"
          transition
          onClick={() => navigate("/")}
        >
          <img 
            height="100%" 
            width="100%" 
            src={cocktailIcon} 
            alt="Cocktails by T logo"
            style={{ filter: 'brightness(1.1)', cursor: 'pointer' }}
          />
        </Section>

        {/* Title */}
        <Section
          className="header-title"
          color="tertiary"
          fontSize={70}
          fontWeight="600"
          letterSpacing="0.05em"
          mobile={{
            fontSize: 28,
            letterSpacing: "0.02em"
          }}
          filter={`drop-shadow(-1px 10px 10px ${palette.black()})`}
          transform="translateY(0.1em)"
        >
          Cocktails by T
        </Section>
      </Section>

      {/* Right side - Navigation */}
      <Section
        className="header-right"
        position="absolute"
        width="auto"
        height="100%"
        row
        center
        gap={20}
        rightPos={100}
        paddingRight={20}
        mobile={{
          gap: 15,
          rightPos: 20,
          paddingRight: 10
        }}
      >
        {window?.mobile ? (
          <DropDown dropDown={dropDown} setDropDown={setDropDown} />
        ) : (
          links.map((link, index) => (
            <>
              <Section
                key={index}
                className="header-link"
                color="tertiary"
                padding={link.title === 'Contact' ? "5px" : "2px 10px"}
                borderRadius={10}
                transition
                onClick={() => link.onClick()}
  
                fontSize={link.title === 'Contact' ? 45 : 40}
                fontWeight={link.title === 'Contact' ? '600' : '500'}
                letterSpacing="0.02em"
                bg="transparent"
                transform={link.title === 'Contact' ? 'translateY(0)' : 'translateY(0.5em)'}
                border={link.title === 'Contact' ? `${resizeRatio('6px')} solid ${palette.tertiary('0.2')}` : false}
                marginLeft={link.title === 'Contact' ? '70px' : '20px'}
                marginRight={link.title === 'Contact' ? '20px' : '20px'}
                style={{
                  cursor: 'pointer',
                }}
              >
                {link.title}
              </Section>
              {index === 0 && (
                <Section
                  key={`divider-${index}`}
                  width={1}
                  height={40}
                  bg="tertiary"
                  bgAlpha="0.3"
                  transform="translateY(1.0em)"
                  style={{
                    alignSelf: 'center',
                  }}
                />
              )}
            </>
          ))
        )}
      </Section>

      {/* Mobile Dropdown Menu */}
      {window?.mobile && (
        <DropDownList
          links={links}
          dropDown={dropDown}
          setDropDown={setDropDown}
        />
      )}
    </Section>
  );
};
