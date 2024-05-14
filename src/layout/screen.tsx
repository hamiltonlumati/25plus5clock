function Screen(){
    return(
        <div className="h-auto bg-darkGreen p-2 grid justify-center rounded">
            <div className="grid grid-cols-2 gap-20 justify-center w-full px-20 py-10">
                <div className="w-auto">
                    <p className="text-center text-orange mb-2 text-xl font-medium">Break Lenght</p>
                    <div className="flex flex-row gap-4 align-middle p-2 h-15 bg-lightGreen text-orange rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-arrow-up-circle basis-1/3 h-auto hover:text-dark" viewBox="0 0 16 16">
                            <path className="align-middle" fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
                        </svg>
                        <span className="basis-1/3 text-center text-5xl">25</span>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-arrow-down-circle basis-1/3 h-auto hover:text-dark" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                        </svg>
                    </div>
                </div>
                <div className="w-full">
                    <p>Session Lenght</p>
                    <div>
                        25
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-0">
                <div className="bg-white p-1">
                    25:00
                </div>
                <div className="bg-">
                    <span>Vida</span>
                </div>
            </div>
        </div>
    )
}

export default Screen;