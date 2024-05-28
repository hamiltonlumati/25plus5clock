import { RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { 
    sessionDecrement, 
    sessionIncrement, 
    breakDecrement, 
    breakIncrement, 
    restart, 
    timerStart,
    sessionPause,
    sessionCount,
    sessionStop } from "../features/timer/timerSlice";

function Screen(){

    const sessionLenght = useSelector((state: RootState) => state.timer.sessionLenght);
    const breakLenght = useSelector((state: RootState) => state.timer.breakLenght);
    const startButtonClass = useSelector((state: RootState) => state.timer.startButtonClass);
    const stopButtonClass = useSelector((state: RootState) => state.timer.stopButtonClass);
    const timerStatus = useSelector((state: RootState) => state.timer.timerStatus);
    const time = useSelector((state: RootState) => state.timer.time);
    const dispatch = useDispatch();

    useEffect(() =>{
        setInterval(() => {
            switch(timerStatus) {
                case 'counting':
                    if(time > 0){
                        //console.log(state.timer.time);
                        dispatch(sessionCount());
                    }else{
                        dispatch(sessionStop());
                    }
            }
        }, 1000);
    })

    return(
        <div className="h-auto bg-darkGreen pb-10 grid justify-center rounded">
            <div className="grid grid-cols-2 gap-20 justify-center w-full px-20 py-10">
                <div className="w-auto">
                    <p className="text-center text-lightGreen mb-2 text-xl font-medium">Session Lenght</p>
                    <div className="flex flex-row gap-4 align-middle p-2 h-15 bg-lightGreen text-orange rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-arrow-up-circle basis-1/3 h-auto hover:text-dark" viewBox="0 0 16 16" onClick={() => dispatch(sessionIncrement())}>
                            <path className="align-middle" fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
                        </svg>
                        <span className="basis-1/3 text-center text-5xl">{Math.floor(sessionLenght)}</span>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-arrow-down-circle basis-1/3 h-auto hover:text-dark" viewBox="0 0 16 16" onClick={() => dispatch(sessionDecrement())}>
                            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                        </svg>
                    </div>
                </div>
                <div className="w-auto">
                    <p className="text-center text-lightGreen mb-2 text-xl font-medium">Break Lenght</p>
                    <div className="flex flex-row gap-4 align-middle p-2 h-15 bg-lightGreen text-orange rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-arrow-up-circle basis-1/3 h-auto hover:text-dark" viewBox="0 0 16 16" onClick={() => dispatch(breakIncrement())}>
                            <path className="align-middle" fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
                        </svg>
                        <span className="basis-1/3 text-center text-5xl">{breakLenght}</span>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-arrow-down-circle basis-1/3 h-auto hover:text-dark" viewBox="0 0 16 16" onClick={() => dispatch(breakDecrement())}>
                            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="grid justify-center rounded-lg bg-dark text-lightGreen w-auto mx-52 py-2">
                <p className="bg-white p-1 text-center text-lg">
                    Session
                </p>
                <p className="text-center text-7xl" id="sessionDisplay">
                    {Math.floor(time/60)}: {time%60}
                </p>
                <div className="flex flex-row gap-4 align-middle px-14 mt-2">
                    <svg id="startButton" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className={startButtonClass} viewBox="0 0 16 16" onClick={() => dispatch(timerStart())}>
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                    </svg>

                    <svg id="stopButton" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className={stopButtonClass} viewBox="0 0 16 16" onClick={() => dispatch(sessionPause())}>
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0z"/>
                    </svg>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-repeat hover:text-orange" viewBox="0 0 16 16" onClick={() => dispatch(restart())}>
                        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/>
                        <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Screen;