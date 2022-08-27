export default function Navbar() {
    return (
        <nav className="h-16 navbar navbar-expand-md border-stroke-secondary navbar-light bg-background-secondary h-19">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <div className="flex items-center text-white">intramusic</div>

                <div className="justify-between items-center w-full flex w-auto order-1">
                    <div className="divide-x-2 divide-[#919191] divide-rounded-xl text-[#ededed] flex flex-col flex-row font-title font-bold text-2xl">
                        <div className="px-3">intramusic</div>
                        <div className="px-3 font-normal pt-1 font-special text-[0.9rem] text-[#BCBCBC] span">
                            New Project
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
