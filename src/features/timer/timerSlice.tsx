import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

export interface TimerState{
    sessionLenght: number,
    breakLenght: number,
    timerStatus: string, //options: stopped, counting, restarted, paused
    time: number,
    startButtonClass: string,
    stopButtonClass: string
}

const initialState: TimerState = {
    sessionLenght: 25, 
    breakLenght: 5, 
    timerStatus: 'stopped', 
    time: 25*60, 
    startButtonClass: 'bi bi-play-circle hover:text-orange', 
    stopButtonClass: 'bi bi-play-circle hover:text-orange hidden'
}

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        sessionIncrement: (state) => {
            state.sessionLenght += 1;
            state.breakLenght = state.breakLenght;
            state.timerStatus = state.timerStatus,
            state.time = state.sessionLenght * 60;
            state.startButtonClass = state.startButtonClass;
            state.stopButtonClass = state.stopButtonClass
        },

        sessionDecrement:(state) => {
            if(state.sessionLenght > 1){
                state.sessionLenght -= 1;
                state.breakLenght = state.breakLenght;
                state.timerStatus = state.timerStatus;
                state.time = state.sessionLenght * 60;
                state.startButtonClass = state.startButtonClass;
                state.stopButtonClass = state.stopButtonClass
            }else{
                state.sessionLenght = state.sessionLenght;
                state.breakLenght = state.breakLenght;
                state.timerStatus = state.timerStatus;
                state.time = state.sessionLenght * 60;
                state.startButtonClass = state.startButtonClass;
                state.stopButtonClass = state.stopButtonClass
            }
            
        },

        breakIncrement: (state) => {
            state.sessionLenght = state.sessionLenght;
            state.breakLenght += 1;
            state.timerStatus = state.timerStatus,
            state.time = state.sessionLenght * 60;
            state.startButtonClass = state.startButtonClass;
            state.stopButtonClass = state.stopButtonClass
        },

        breakDecrement: (state) => {
            if(state.breakLenght > 1){
                state.breakLenght -= 1;
                state.sessionLenght = state.sessionLenght;
                state.timerStatus = state.timerStatus;
                state.time = state.sessionLenght * 60;
                state.startButtonClass = state.startButtonClass;
                state.stopButtonClass = state.stopButtonClass
            }else{
                state.sessionLenght = state.sessionLenght;
                state.breakLenght = state.breakLenght;
                state.timerStatus = state.timerStatus;
                state.time = state.sessionLenght * 60;
                state.startButtonClass = state.startButtonClass;
                state.stopButtonClass = state.stopButtonClass
            }
        },

        restart: (state) => {
            state.sessionLenght = 25;
            state.breakLenght = 5;
            state.timerStatus = 'stopped';
            state.time = state.sessionLenght * 60;
            state.startButtonClass = 'bi bi-play-circle hover:text-orange';
            state.stopButtonClass = 'bi bi-play-circle hover:text-orange hidden'
        },

        timerStart: (state) => {
            state.time = state.sessionLenght * 60;
            state.startButtonClass = 'bi bi-play-circle hover:text-orange hidden';
            state.stopButtonClass = 'bi bi-play-circle hover:text-orange'
            state.timerStatus = 'counting';

        },

        sessionCount: (state) => {
            state.time -= 1;
            console.log(state.time);
        },

        sessionPause: (state) => {
            state.stopButtonClass = 'bi bi-play-circle hover:text-orange hidden';
            state.startButtonClass = 'bi bi-play-circle hover:text-orange';
            state.timerStatus = 'paused';
        },

        sessionStop: (state) => {
            state.timerStatus = 'stopped'
            state.time = 0;
        }
    }
})

export const { sessionIncrement, sessionDecrement, breakIncrement, breakDecrement, restart, timerStart, sessionCount, sessionPause, sessionStop } = timerSlice.actions;
export default timerSlice.reducer