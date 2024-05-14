function Screen(){
    return(
        <div className="w-4/5 h-auto bg-yellow-100 p-2 grid justify-center">
            <div className="grid grid-cols-2 gap-20 justify-center w-full px-20">
                <div className="w-full">
                    <p>Break Lenght</p>
                    <div>
                        25
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