// Set this to your screen width *found in settings-->display
const DESKTOP_SCREEN_WIDTH = 1920;
// This is the threshold where we transition to mobile devices(aspect ratio changes)
const MOBILE_SCREEN_WIDTH = 480;

// This function will set a value that will dynamically change based on the size of the screen
// It is designed to maintain the aspect ratio based on avergae desktop aspect ratios
// ex: if the width exceeds a 16/9 ratio of the height, then the max value(vh) constrains the value
// ex: if the height exceeds a 9/16 ratio then the default value(vw) remains the true value
export const resizeRatio = (
  pxString: string,
//   { mobile = false }: { mobile: boolean } | object = {}
) => {
    // change px type from string to number
  const pxValue = parseFloat(pxString);
 //   set vw (view width)
//  vw is a ratio 1-100(1=1%, 100=100% etc) of screen width
  const vw = (pxValue / DESKTOP_SCREEN_WIDTH) * 100;
//   set vh based on the average aspect ratio of desktops
  const vh = vw * (16 / 9);
// set the minimum value based on the smallest width we expect to encouter without getting into mobile aspect ratios
// ex: a small tablet or phone turned sideways
  const MIN_PX = pxValue * (MOBILE_SCREEN_WIDTH / DESKTOP_SCREEN_WIDTH);

//   clamp(min value, value, max value)
  return `clamp(${MIN_PX}px, ${vw}vw, ${vh}vh)`;
};

