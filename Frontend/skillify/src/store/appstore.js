import {configureStore} from '@reduxjs/toolkit'
import userInfo from './userSlice';
import folio from './folioSlice'
const appStore = configureStore({
    reducer : {
        user : userInfo, 
        folio : folio
    }
})

export default appStore;