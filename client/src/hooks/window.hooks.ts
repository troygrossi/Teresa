import { useEffect, useRef } from "react";

import { useDispatch } from "react-redux";
import { windowActions } from "../redux/slice/window.slice";
// Constants
import { windowMatch } from "../constants/window.constants";
// MEDIA QUERY FOR WINDOW SIZE(FOR STYLING)
// ---------------------------------------------------------------------------------------------------------------------
// Media queries are not supported with in-line styling in react ex: style={}
// Media queries do work with the css and classname convention
// Material UI does have a convention using theme.breakpoints as well
// However, instead of using css along with theme.breakpoints
// we can consitently use inline styling and use this cutom event
// listener hook for consitency for all media queries
export const useWindowQuery = () => {
  const dispatch = useDispatch();
  // Initial object to hold window states

  // const {windowMatch} = useSelector((state)=>state.window)

  // matches state does not update in event listener function, so useRef is needed to get the matches state
  const windowMatchRef = useRef(windowMatch);
  console.log(windowMatchRef)
  windowMatchRef.current = windowMatch;

  // Event handler functions called when window passes a respective width threshold
  const handleChangeDesktop = (e: MediaQueryListEvent) => {
    return dispatch(windowActions.getWindow({ desktop: e.matches }));
  };
  const handleChangeTabletBig = (e: MediaQueryListEvent) => {
    return dispatch(windowActions.getWindow({ tabletBig: e.matches }));
  };
  const handleChangeTabletSmall = (e: MediaQueryListEvent) => {
    return dispatch(windowActions.getWindow({ tabletSmall: e.matches }));
  };
  const handleChangeMobile = (e: MediaQueryListEvent) => {
    return dispatch(windowActions.getWindow({ mobile: e.matches }));
  };

  useEffect(() => {
    //Initialize matches on first render to get screen width
    dispatch(
      windowActions.getWindow({
        desktop: windowMatchRef.current.mDesktop.matches,
        tabletBig: windowMatchRef.current.mTabletBig.matches,
        tabletSmall: windowMatchRef.current.mTabletSmall.matches,
        mobile: windowMatchRef.current.mMobile.matches,
      })
    );

    //Create custom event listeners that activate when screen size moves past the constant threshold
    windowMatchRef.current.mDesktop.addEventListener(
      "change",
      handleChangeDesktop
    );
    windowMatchRef.current.mTabletBig.addEventListener(
      "change",
      handleChangeTabletBig
    );
    windowMatchRef.current.mTabletSmall.addEventListener(
      "change",
      handleChangeTabletSmall
    );
    windowMatchRef.current.mMobile.addEventListener(
      "change",
      handleChangeMobile
    );
    //Cleanup when component unmounts, remove custom event listeners
    return () => {
      console.log("window hook unmount");
      windowMatchRef.current.mDesktop.removeEventListener(
        "change",
        handleChangeDesktop
      );
      windowMatchRef.current.mTabletBig.removeEventListener(
        "change",
        handleChangeTabletBig
      );
      windowMatchRef.current.mTabletSmall.removeEventListener(
        "change",
        handleChangeTabletSmall
      );
      windowMatchRef.current.mMobile.removeEventListener(
        "change",
        handleChangeMobile
      );

      dispatch(
        windowActions.getWindow({
          desktop: false,
          tabletBig: false,
          tabletSmall: false,
          mobile: false,
        })
      );
    };
  }, []);
  // return screen size object
};
// ---------------------------------------------------------------------------------------------------------------------
