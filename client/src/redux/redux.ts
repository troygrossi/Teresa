import { combineReducers } from "redux";
import { IWindowState, windowReducer } from "./slice/window.slice";
import { IFormState, contactFormReducer } from "../Pages/Contact/_redux_/contactForm.slice";
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";

interface IAppState {
  window: IWindowState;
  contact: IFormState
}
// 
export const useSelector: TypedUseSelectorHook<IAppState> = useReduxSelector;
// 
const appReducer = combineReducers({
  window: windowReducer,
  contact: contactFormReducer
});
export default appReducer;

// export default function (state: IAppState, action) {
//   if (action.type === 'viewer/logoutViewer') {
//     //state.viewer = undefined
//     state = {
//       ...state,
//       viewer: undefined,
//     }
//     localStorage.removeItem('token')
//     //console.log('logoutreducer', {state})
//   }
//   return appReducer(state, action)
// }
