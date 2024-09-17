import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { windowMatch } from '../../constants/window.constants'

export interface IWindowState {
  windowQuery: {
    desktop?: boolean,
    tabletBig?: boolean,
    tabletSmall?: boolean,
    mobile?: boolean
  }
}

const INITIAL_STATE: IWindowState = {
  windowQuery: {
    desktop: windowMatch.mDesktop.matches,
    tabletBig: windowMatch.mTabletBig.matches,
    tabletSmall: windowMatch.mTabletSmall.matches,
    mobile: windowMatch.mMobile.matches,
  },
};

const slice = createSlice({
  name: "window",
  initialState: INITIAL_STATE,
  reducers: {
    // GET PROFILE
    getWindow(state, action: PayloadAction<IWindowState['windowQuery']>) {
      state.windowQuery = { ...state.windowQuery, ...action.payload };
    },
  },
});

// Reducer
export const windowReducer = slice.reducer;
export const windowActions = slice.actions;