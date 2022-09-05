import Head from "next/head";

import { ReactElement } from "react";
import {
    Add,
    Checkmark,
    Close,
    Music,
    Touch_1Filled,
} from "@carbon/icons-react";
import Layout from "../../components/layout";
import Navbar from "../../components/navigation/navbar.component";
import MenuItem from "../../components/editor/menu/menuitem.component";
import MenuCategory from "../../components/editor/menu/menucategory.component";
import MenuGroup from "../../components/editor/menu/menugroup.component";
import MenuButton from "../../components/editor/menu/menubutton.component";
import MenuInput from "../../components/editor/menu/menuinput.component";
import MenuToggle from "../../components/editor/menu/menutoggle.component";
import SideMenu from "../../components/editor/modules/sidemenu.component";

export default function Editor({ Component, pageProps }) {
    return (
        <div className="flex flex-col h-screen">
            <Head>
                <title>New Project</title>
                <link rel="icon" href="/favicon.ico" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Navbar />

            <div className="flex flex-grow items-stretch">
                <div className="w-[6.5rem] border-r border-t border-stroke-secondary bg-background-secondary"></div>

                <SideMenu/>

                <div className="flex-grow border-t border-stroke-secondary bg-background-primary"></div>
            </div>

            <div className="flex flex-col h-64 bg-red-300">
                <div className="flex h-16 border-y border-stroke-secondary bg-background-secondary"></div>
                <div className="flex flex-grow border-stroke-secondary bg-background-secondary">
                    <div className="flex-col w-[10rem] border-r border-stroke-secondary">
                        <div className="text-gray-500 px-5 pb-11 text-xl border-b border-stroke-secondary"></div>
                        <div className="text-gray-500 px-5 py-2 font-special text-lg border-b border-stroke-secondary">
                            Audio
                        </div>

                        <div className="text-gray-500 px-5 py-2 font-special text-lg text-title-secondary border-b border-stroke-secondary">
                            Rhythm
                        </div>
                        {/* <div className="text-xl text-title-secondary border-b">
                            
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Editor.getLayout = function getLayout(page: ReactElement) {
//     return <Layout>{page}</Layout>;
// };
