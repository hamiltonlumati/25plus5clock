function Screen(){
    return(
        <div className="w-80 h-auto bg-yellow p-2 grid justify-center">
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <p>Break Lenght</p>
                    <div>
                        25
                    </div>
                </div>
                <div>
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