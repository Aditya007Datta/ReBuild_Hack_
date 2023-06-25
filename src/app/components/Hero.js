
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
    return (
        <div className=" pb-6 sm:pb-8 lg:pb-12 ">


            <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-8 flex flex-wrap justify-between md:mb-16">
                    <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pt-48 lg:pb-24">
                        <div className="bg-white py-6 sm:py-8 lg:py-12">
                            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                                <p className="mb-2 font-semibold text-indigo-500 md:mb-3 lg:text-lg">Introducing </p>

                                <h2 className="mb-4 text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">KazeVault</h2>

                                <p className="max-w-screen-md text-gray-500 md:text-lg">a platform that empowers creators, showcases brilliance, and amplifies voices through shared art.</p>

                            </div>
                        </div>


                    </div>

                    <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                        <div className="relative top-12 left-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-2xl md:top-16 md:left-16 lg:ml-0">
                            <img src="https://images.unsplash.com/photo-1542340916-951bb72c8f74?auto=format&q=75&fit=crop&w=550&h=550" loading="lazy" alt="Photo by Kaung Htet" className="h-full w-full object-cover object-center" />
                        </div>


                        <div className="overflow-hidden rounded-lg bg-gray-100 shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1586295166487-b265f7e83a7f?auto=format&q=75&fit=crop&w=550&h=550" loading="lazy" alt="Photo by Manny Moreno" className="h-full w-full object-cover object-center" />
                        </div>
                    </div>
                </div>

                <div className=" flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="bg-white flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
                        <Link
                            href="/collections"
                            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                        >
                            Works
                        </Link>
                        <Link
                            href="/form"
                            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                        >
                            Form
                        </Link>
                        <Link
                            href="/doc"
                            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                        >
                            Docs
                        </Link>
                    </div>

                    {/* <!-- social - start --> */}
                    <div className="flex items-center justify-center gap-4 lg:justify-start">
                        <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">
                            Social
                        </span>
                        <span className="h-px w-12 bg-gray-200"></span>

                        <div className="flex gap-4">


                            <Link href="https://github.com/ighoshsubho" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                                <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </Link>

                            <Link href="https://github.com/ighoshsubho" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                                <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    {/* <!-- social - end --> */}
                </div>
            </section>
        </div>
    );
};

export default Hero;
