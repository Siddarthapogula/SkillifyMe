import { createSlice } from "@reduxjs/toolkit";


const folioSlice = createSlice({
    name : "folio",
    initialState : {
        projects : [],
        workExperience : []
    }, 
    reducers : {
        addProject : (state, action)=>{
            state.projects.push(action.payload);
        },
        addWorkExperience : (state, action)=>{
            state.workExperience.push(action.payload);
        }
    }
})


export const {addProject, addWorkExperience} = folioSlice.actions;

export default folioSlice.reducer;