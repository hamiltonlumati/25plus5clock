import { createSlice } from "@reduxjs/toolkit";

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
    stopButtonClass: 'bi bi-pause-circle hover:text-orange hidden'
}

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        sessionIncrement: (state) => {
            if(state.timerStatus == 'stopped' || state.timerStatus == 'paused'){
                state.sessionLenght += 1;
                state.breakLenght = state.breakLenght;
                state.startButtonClass = state.startButtonClass;
                state.stopButtonClass = state.stopButtonClass    
            }
        },

        sessionDecrement:(state) => {
            if(state.sessionLenght > 1){
                state.sessionLenght -= 1;
                state.breakLenght = state.breakLenght;
                state.startButtonClass = state.startButtonClass;
                state.stopButtonClass = state.stopButtonClass
            }else{
                state.sessionLenght = state.sessionLenght;
                state.breakLenght = state.breakLenght;
                state.startButtonClass = state.startButtonClass;
                state.stopButtonClass = state.stopButtonClass
            }
            
        },

        breakIncrement: (state) => {
            state.sessionLenght = state.sessionLenght;
            state.breakLenght += 1;
            state.startButtonClass = state.startButtonClass;
            state.stopButtonClass = state.stopButtonClass
        },

        breakDecrement: (state) => {
            if(state.breakLenght > 1){
                state.breakLenght -= 1;
                state.sessionLenght = state.sessionLenght;
                state.startButtonClass = state.startButtonClass;
                state.stopButtonClass = state.stopButtonClass
            }else{
                state.sessionLenght = state.sessionLenght;
                state.breakLenght = state.breakLenght;
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
            state.stopButtonClass = 'bi bi-pause-circle hover:text-orange hidden'
        },

        timerStart: (state) => {
            state.startButtonClass = 'bi bi-play-circle hover:text-orange hidden';
            state.stopButtonClass = 'bi bi-pause-circle hover:text-orange'
            state.timerStatus = 'counting';

        },

        sessionCount: (state) => {
            state.time -= 1;
        },

        sessionPause: (state) => {
            state.stopButtonClass = 'bi bi-pause-circle hover:text-orange hidden';
            state.startButtonClass = 'bi bi-play-circle hover:text-orange';
            state.timerStatus = 'paused';
        },

        sessionPaused: (state) => {
            state.time = state.time
        },

        sessionStop: (state) => {
            state.timerStatus = 'stopped'
            state.time = 0;
        }
    }
})

export const { sessionIncrement, sessionDecrement, breakIncrement, breakDecrement, restart, timerStart, sessionCount, sessionPause, sessionStop, sessionPaused } = timerSlice.actions;
export default timerSlice.reducer