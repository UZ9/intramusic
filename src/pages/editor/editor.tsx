import Head from "next/head";

import { ReactElement } from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navigation/navbar.component";

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

                <div className="flex w-[22rem] border-r border-t border-stroke-secondary bg-sidebar-background">
                    <div className="flex flex-grow flex-col h-16 border-b border-stroke-secondary justify-center">
                        <div className="text-center text-[1.35em] mt-2 font-title font-bold text-title-secondary">
                            Rhythm
                        </div>
                    </div>
                </div>

                <div className="flex-grow border-t border-stroke-secondary bg-background-primary"></div>
            </div>

            <div className="flex flex-col h-64 bg-red-300">
                <div className="flex h-16 border-y border-stroke-secondary bg-background-secondary"></div>
                <div className="flex flex-grow border-stroke-secondary bg-background-secondary"></div>
            </div>
        </div>
    );
}

// Editor.getLayout = function getLayout(page: ReactElement) {
//     return <Layout>{page}</Layout>;
// };
