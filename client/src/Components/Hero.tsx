import React, { useState } from "react";
import photo2 from "../assets/photos/imageT2.2.jpg";
import photo1 from "../assets/photos/image5hs.webp";
import { palette } from "../palette/palette";
import { useSelector } from "../redux/redux";
import { resizeRatio } from "../modules/resizeRatio";

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const window = useSelector((state)=>state.window.windowQuery)


  const imageStyle: React.CSSProperties = {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundImage: `url(${photo2})`,
    maskImage: `linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .2) 2%, rgba(0, 0, 0, 1) 10%)`,

    backgroundSize: "cover", 
    backgroundPosition: "center",
    borderRadius: "10px",
    backgroundRepeat: "no-repeat",
    zIndex: 1, 
  };


  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    width: "100%", 
    height: "100%", 
    top: 0,
    left: 0,
    borderRadius: "10px",
    backgroundImage: `linear-gradient(45deg, ${palette.white(
      "0"
    )} 55%, ${palette.white(".3")} 65%, ${palette.white(
      "0"
    )} 70%, ${palette.white("0")} 100%`,
    // maskImage: `linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .2) 2%, rgba(0, 0, 0, 1) 10%)`,
    zIndex: 9, 
  };

  const containerStyle1: React.CSSProperties = {
    position: "absolute",
    display: 'flex',
    justifyContent: 'center',
    left: "0px",
    height: resizeRatio('500px'), 

    width: "100vw",

    ...(window.mobile && {
     height: resizeRatio('400px',{mobile: true}),
    })

  };


  // The sides of the hexagonal pillar

  // Bottom side (optional)

  const imgStyle: React.CSSProperties = {
  height: '100%',
    objectFit: "cover",
    borderRadius: "10px", 
    position: "absolute",
    backgroundColor: 'none',
  bottom: '0px',
    right: '-5%',
    transform: "translateX(50%) ",
    filter: `drop-shadow(0px 10px 10px ${palette.black()})`,

  };

  const titleContainerStyle: React.CSSProperties = {
    position: "relative",
    top: '-0px',
    width: '100%',
    height:'100%',
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px dotted green',
    zIndex: 4,
    
    // ...(window.tabletBig && {

    // }),
    // ...(window.mobile && {
   

    // })
  };

  const titleBorder: React.CSSProperties = {
    display: "flex",
    boxSizing: 'border-box',
    
    marginTop: resizeRatio('40px'),
    flexDirection: 'column',
    justifyContent: 'center',
    color: `${palette.tertiary()}`,
    padding: resizeRatio('25px'),
    fontSize: resizeRatio('100px'),
  
    border: `${resizeRatio('7px')} solid ${palette.tertiary('.7')}`,

    background: palette.primary('.9'),
    backdropFilter: 'blur(3px)',
      boxShadow: `10px 10px 20px ${palette.black('.5')}`,

      ...(window.mobile && {
        fontSize: resizeRatio('47px', {mobile: true}),
      })
  };

  

  const title1Style: React.CSSProperties = {
    fontSize: '1em',
    textAlign: 'center',

    color: `${palette.tertiary()}`,
    zIndex: 4,
    filter: `drop-shadow(0px 1px 1px ${palette.primary('1')})`,
    // ...(window.tabletBig && {
   
    // }),
    // ...(window.mobile && {

    // })
  };
  const title2Style: React.CSSProperties = {
    fontSize: '.7em',
    textAlign: 'center',
    filter: `drop-shadow(0px 1px 3px ${palette.primary('.1')})`,
    color: `${palette.contrast('.7')}`,

    zIndex: 4,
  };
  const title3Style: React.CSSProperties = {
    fontSize: '.6em',
    fontStyle: 'italic',
    textAlign: 'center',
    filter: `drop-shadow(0px 1px 1px ${palette.primary('.7')})`,

    color: `${palette.tertiary()}`,
    zIndex: 4,
  };


  return (
    <div style={containerStyle1}>
      <div style={imageStyle}></div>
      <div style={overlayStyle}></div>
      <div style={titleContainerStyle}>
        <div style={titleBorder}>
        <div style={title1Style}>
          Cocktails by T
        </div>
        <div style={title2Style}>
          Teresa Laughner
        </div>
        <div style={title3Style}>
          Propietor/Bartendress
        </div>
        <img loading='lazy' style={imgStyle} src={photo1} alt="Cool Image" />
        </div>
      </div>
      
    </div>
  );
};
