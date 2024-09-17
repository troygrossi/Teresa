export enum WINDOW_SIZE {
    DESKTOP = "DESKTOP",
    TABLET_BIG = "TABLET_BIG",
    TABLET_SMALL = "TABLET_SMALL",
    MOBILE = "MOBILE",
  }
  
  export enum WINDOW_THRESHOLD {
    DESKTOP_MIN = 1281,
    TABLET_BIG_MAX = 1280,
    TABLET_BIG_MIN = 769,
    TABLET_SMALL_MAX = 768,
    TABLET_SMALL_MIN = 481,
    MOBILE_MAX = 480,
  }
  
  export const windowMatch = {
    mDesktop: window.matchMedia(`(min-width: ${WINDOW_THRESHOLD.DESKTOP_MIN}px)`),
    mTabletBig: window.matchMedia(
      `(min-width: ${WINDOW_THRESHOLD.TABLET_BIG_MIN}px) and (max-width: ${WINDOW_THRESHOLD.TABLET_BIG_MAX}px)`
    ),
    mTabletSmall: window.matchMedia(
      `(min-width: ${WINDOW_THRESHOLD.TABLET_SMALL_MIN}px) and (max-width: ${WINDOW_THRESHOLD.TABLET_SMALL_MAX}px)`
    ),
    mMobile: window.matchMedia(`(max-width: ${WINDOW_THRESHOLD.MOBILE_MAX}px)`),
  };
  