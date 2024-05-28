import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";

export interface TimerState{
    sessionLenght: number,
    breakLenght: number,
    timerStatus: string,
    time: number[],
    startButtonClass: string,
    stopButtonClass: string
}

const initialState: TimerState = {
    sessionLenght: 25, 
    breakLenght: 5, 
    timerStatus: 'stopped', 
    time: [25, 0], 
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
            state.time = [state.sessionLenght, 0];
            state.startButtonClass = state.startButtonClass;
            state.stopButtonClass = state.stopButtonClass
        },

        sessionDecrement:(state) => {
            if(state.sessionLenght > 1){
                state.sessionLenght -= 1;
                state.breakLenght = state.breakLenght;
                state.timerStatus = state.timerStatus;
                state.time = [state.sessionLenght, 0];
                state.startButtonClass = state.startButtonClass;
                state.stopButtonClass = state.stopButtonClass
            }else{
                state.sessionLenght = state.sessionLenght;
                state.breakLenght = state.breakLenght;
                state.timerStatus = state.timerStatus;
                state.time = [state.sessionLenght, 0];
                state.startButtonClass = state.startButtonClass;
                state.stopButtonClass = state.stopButtonClass
            }
            
        },

        breakIncrement: (state) => {
            state.sessionLenght = state.sessionLenght;
            state.breakLenght += 1;
            state.timerStatus = state.timerStatus,
            state.time = [state.sessionLenght, 0];
            state.startButtonClass = state.startButtonClass;
            state.stopButtonClass = state.stopButtonClass
        },

        breakDecrement: (state) => {
            if(state.sessionLenght > 1){
                state.breakLenght -= 1;
                state.breakLenght = state.sessionLenght;
                state.timerStatus = state.timerStatus;
                state.time = [state.sessionLenght, 0];
                state.startButtonClass = state.startButtonClass;
                state.stopButtonClass = state.stopButtonClass
            }else{
                state.sessionLenght = state.sessionLenght;
                state.breakLenght = state.breakLenght;
                state.timerStatus = state.timerStatus;
                state.time = [state.sessionLenght, 0];
                state.startButtonClass = state.startButtonClass;
                state.stopButtonClass = state.stopButtonClass
            }
        },

        restart: (state) => {
            state.sessionLenght = 25;
            state.breakLenght = 5;
            state.timerStatus = 'stopped';
            state.time = [state.sessionLenght, 0];
            state.startButtonClass = 'bi bi-play-circle hover:text-orange';
            state.stopButtonClass = 'bi bi-play-circle hover:text-orange hidden'
        },

        timerStart: (state) => {
            document.getElementById("startButton")!.setAttribute('class', 'bi bi-play-circle hover:text-orange hidden');
            document.getElementById("stopButton")!.setAttribute('class', 'bi bi-play-circle hover:text-orange');

            var now1: any = moment();
            var sessionMinutes: number = state.sessionLenght;
            console.log(state.sessionLenght);
            var targetDate: any = now1.add(sessionMinutes, 'm');
            var loopInterval = setInterval(function(){
                var now: any = moment();
                var distance: any = targetDate - now;

                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.getElementById("sessionDisplay")!.innerHTML = minutes + ":" + seconds;

                if (distance < 0) {
                    clearInterval(loopInterval);
                    document.getElementById("sessionDisplay")!.innerHTML = "00:00";
                }
                document.getElementById('stopButton')?.addEventListener('click', () => {
                    clearInterval(loopInterval);
                    document.getElementById("stopButton")!.setAttribute('class', 'bi bi-play-circle hover:text-orange hidden');
                    document.getElementById("startButton")!.setAttribute('class', 'bi bi-play-circle hover:text-orange');
                    var now2: any = moment();
                    var difference: any = targetDate - now2;
                    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((difference % (1000 * 60)) / 1000);
                    state.sessionLenght = minutes;
                } 
            )
            }, 1000);
        }
    }
})

export const { sessionIncrement, sessionDecrement, breakIncrement, breakDecrement, restart, timerStart } = timerSlice.actions;
export default timerSlice.reducer