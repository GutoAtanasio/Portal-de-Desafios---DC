import { Book, CalendarBlank, ChatCenteredText, File, MagnifyingGlass, SignOut, Target, User, Users } from "phosphor-react"

export const SideBar = () => {
    return (
        <>
            <div className="bg-[#1E2939] text-white text-sm w-64 h-screen p-4 space-y-5">
                <div className="flex">
                    <img src="img/Captura de tela 2025-06-21 062625.png" alt="" />
                    <div>
                        <h1 className="font-bold">CourseOS</h1>
                        <h2 className="">hackathon 2025</h2>
                    </div>
                </div>
                <hr className="p-4"/>
                <div className="">
                    <h1>MENU</h1>
                    <ul className="py-4">
                        <li><button className="hover:bg-[#4C362E] w-full flex items-center gap-2"><Book size={15} />Introduction</button></li>
                        <li><button className="hover:bg-[#4C362E] w-full flex items-center gap-2"><File size={15} />Curriculum</button></li>
                        <li><button className="hover:bg-[#4C362E] w-full flex items-center gap-2"><CalendarBlank size={15} />Calendar</button></li>
                        <li><button className="hover:bg-[#4C362E] w-full flex items-center gap-2"><Target size={15} />Strategies</button></li>
                    </ul>
                </div>
                <div>
                    <h1>COMMUNITY</h1>
                    <ul className="py-4">
                        <li><button className="hover:bg-[#4C362E] w-full flex items-center gap-2"><ChatCenteredText size={15} />Coaching</button></li>
                        <li><button className="hover:bg-[#4C362E] w-full flex items-center gap-2"><Users size={15} />Network</button></li>
                    </ul>
                </div>
                <div>
                    <h1>ACCOUNT</h1>
                    <ul className="py-4">
                        <li><button className="hover:bg-[#4C362E] w-full flex items-center gap-2"><User size={15} />Profile</button></li>
                        <li><button className="hover:bg-[#4C362E] w-full flex items-center gap-2"><SignOut size={15} />Logout</button></li>
                    </ul>
                </div>
                <hr className="p-2"/>
                <div className="flex border">
                    <MagnifyingGlass size={15} className="" />
                    <input className="w-full" type="text" placeholder="SEARCH" />
                </div>

            </div>
        </>
    )
}