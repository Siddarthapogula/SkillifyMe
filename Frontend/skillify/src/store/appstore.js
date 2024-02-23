import {configureStore} from '@reduxjs/toolkit'
import userInfo from './userSlice';
const appStore = configureStore({
    reducer : {
        user : userInfo
    }
})

export default appStore;