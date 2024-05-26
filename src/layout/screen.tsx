import { useReducer } from "react";

interface State{
    sessionLenght: number,
    breakLenght: number,
    timerStatus: string
}

type Action = {type: 'sessionIncrement'} | {type: 'sessionDecrement'} | {type: 'breakIncrement'} | {type: 'breakDecrement'} | {type: 'restart'} | {type: 'timerStart'};

const reducer = (state: State, action: Action): State =>{
    switch(action.type){
        case 'sessionIncrement':
            return{
                sessionLenght: state.sessionLenght+1,
                breakLenght: state.breakLenght,
                timerStatus: state.timerStatus
            }
        
        case 'sessionDecrement':
            if(state.sessionLenght > 1){
                return{
                    sessionLenght: state.sessionLenght-1,
                    breakLenght: state.breakLenght,
                    timerStatus: state.timerStatus
                }
            }else{
                return{
                    sessionLenght: state.sessionLenght,
                    breakLenght: state.breakLenght,
                    timerStatus: state.timerStatus
                }
            }

        case 'breakIncrement':
            return{
                sessionLenght: state.sessionLenght,
                breakLenght: state.breakLenght + 1,
                timerStatus: state.timerStatus
            }

        case 'breakDecrement':
            if(state.sessionLenght > 1){
                return{
                    sessionLenght: state.sessionLenght,
                    breakLenght: state.breakLenght - 1,
                    timerStatus: state.timerStatus
                }
            }else{
                return{
                    sessionLenght: state.sessionLenght,
                    breakLenght: state.breakLenght,
                    timerStatus: state.timerStatus
                }
            }
        
        case 'restart':
            return{
                sessionLenght: 25,
                breakLenght: 5,
                timerStatus: 'play'
            }

        case 'timerStart':
            let sessionMinutes: number = state.sessionLenght;

            var now: any = new Date().getDate();
            var targetDate: any = now.setMinutes(now.getMinutes() + sessionMinutes)
            
            var loopInterval = setInterval(function(){
                var now: any = new Date().getDate();
                var distance: any = targetDate - now;

                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.getElementById("sessionDisplay")!.innerHTML = minutes + ":" + seconds;

                if (distance < 0) {
                    clearInterval(loopInterval);
                    document.getElementById("sessionDisplay")!.innerHTML = "00:00";
                }
            }, 1000);
            return{
                sessionLenght: state.sessionLenght,
                breakLenght: state.breakLenght,
                timerStatus: 'play'
            }
    }
}

function Screen(){
    const initialState: State = {sessionLenght: 25, breakLenght: 5, timerStatus: 'play'}

    const [state, dispatch] = useReducer(reducer, initialState);

    //Timers

    return(
        <div className="h-auto bg-darkGreen pb-10 grid justify-center rounded">
            <div className="grid grid-cols-2 gap-20 justify-center w-full px-20 py-10">
                <div className="w-auto">
                    <p className="text-center text-lightGreen mb-2 text-xl font-medium">Session Lenght</p>
                    <div className="flex flex-row gap-4 align-middle p-2 h-15 bg-lightGreen text-orange rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-arrow-up-circle basis-1/3 h-auto hover:text-dark" viewBox="0 0 16 16" onClick={() => {dispatch({type: 'sessionIncrement'})}}>
                            <path className="align-middle" fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
                        </svg>
                        <span className="basis-1/3 text-center text-5xl">{state.sessionLenght}</span>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-arrow-down-circle basis-1/3 h-auto hover:text-dark" viewBox="0 0 16 16" onClick={() => {dispatch({type: 'sessionDecrement'})}}>
                            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                        </svg>
                    </div>
                </div>
                <div className="w-auto">
                    <p className="text-center text-lightGreen mb-2 text-xl font-medium">Break Lenght</p>
                    <div className="flex flex-row gap-4 align-middle p-2 h-15 bg-lightGreen text-orange rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-arrow-up-circle basis-1/3 h-auto hover:text-dark" viewBox="0 0 16 16" onClick={() => {dispatch({type: 'breakIncrement'})}}>
                            <path className="align-middle" fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
                        </svg>
                        <span className="basis-1/3 text-center text-5xl">{state.breakLenght}</span>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-arrow-down-circle basis-1/3 h-auto hover:text-dark" viewBox="0 0 16 16" onClick={() => {dispatch({type: 'breakDecrement'})}}>
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
                    60:00
                </p>
                <div className="flex flex-row gap-4 align-middle px-14 mt-2">
                    <svg id="startStop" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-play-circle hover:text-orange" viewBox="0 0 16 16" onClick={() => {dispatch({type: 'timerStart'})}}>
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                    </svg>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-repeat hover:text-orange" viewBox="0 0 16 16">
                        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/>
                        <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/>
                    </svg>
                </div>
            </div>

        </div>
    )
}

export default Screen;