import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-background-secondary">
            <Head>
                <title>IntraMusic</title>
                <link rel="icon" href="/favicon.ico" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <main className="flex w-full flex-1 flex-col items-center py-20 px-20 text-center">
                <h1 className="text-3xl font-bold">
                    <a
                        className="text-red-400 font-title"
                        href="https://nextjs.org"
                    >
                        intramusic
                    </a>
                </h1>

                <p className="mt-6 text-white font-title font-bold text-5xl">
                    Transcription Reimagined
                </p>

                <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full text-white">
                    <Link href="/editor/editor">
                        <a 
                            className="mt-6 w-40 rounded-md border-2 border-red-highlight p-2 text-left hover:bg-red-highlight"
                        >
                            <h3 className="text-xl text-center font-special font-medium">
                                Open Editor
                            </h3>
                        </a>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default Home;
