import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/Store';


interface AppState {
    current_theme: string;
    font_val:number,
    theme_data: {
        header_bg: string,
        bg_color: string,
        label_color: string,
        faded_text: string
    }
}


const initialState: AppState = {
    current_theme: 'light',
    font_val:0,
    theme_data: {
        header_bg: '',
        bg_color: '',
        label_color: '',
        faded_text: ''
    }
};



export const AppSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setCurrentTheme: (state, action) => {
            state.current_theme = action.payload;
        },
        setThemeData: (state, action) => {
            state.theme_data = action.payload;
        },
        setFontValue: (state, action) => {
            state.font_val = action.payload;
        },
    },
});


export const { setCurrentTheme, setThemeData, setFontValue } = AppSlice.actions;

export const getCurrentTheme = (state: RootState) => state.app.current_theme;
export const getThemeData = (state: RootState) => state.app.theme_data;
export const getFontValue = (state: RootState) => state.app.font_val;

export default AppSlice.reducer;