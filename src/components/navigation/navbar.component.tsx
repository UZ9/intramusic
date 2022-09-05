export default function Navbar() {
    return (
        <nav className="flex-col px-2 sm:px-4 h-16 pt-1 dark:bg-background-secondary w-full z-20 top-0 left-0">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a
                    href="https://flowbite.com/"
                    className="flex flex-1 items-center mr-auto"
                >
                </a>
                <div className="grid flex-1 md:order-2 justify-items-end">
                    <button
                        type="button"
                        className="text-whit text-sm mx-16 font-special text-[#cdcdcd] px-4 rounded-md border-2 border-red-highlight p-2 hover:text-white text-left hover:bg-red-highlight"
                    >
                        Export to Musescore
                    </button>
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    className="hidden justify-between items-center md:flex"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 ">
                        <li>
                            <span className="text-white text-xl mt-0 mb-0 font-title font-bold">intramusic</span>
                        </li>
                        <li className="flex">
                            <div className="w-[0.19rem] rounded mt-[-0.5rem] h-[2.5rem] mb-[-5.5rem] bg-title-secondary"> </div>
                        </li>
                        <li className="flex items-center">
                            <span
                                className="block text-sm py-2 pr-4 pl-3 text-gray-700 rounded md:p-0 dark:text-gray-400 dark:hover:bg-gray-700 dark:border-gray-700"
                            >
                                New Project
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
