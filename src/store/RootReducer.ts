import { combineReducers } from '@reduxjs/toolkit';

import AppReducer from '../slices/AppSlice';

export default combineReducers({
    app: AppReducer,
})