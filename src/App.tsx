import {useEffect, useMemo, useState} from 'react';
import './App.css';
import * as React from "react";
import useWindowManager from "./hooks/useWindowManager.ts";
import type {Application, Particle} from "./types";
import Portfolio from "./components/apps/Portfolio.tsx";
import {Briefcase, ChevronRight, Code, Github, Linkedin, Menu, TwitterIcon, User, X} from "lucide-react";
import Window from "./components/layout/Window.tsx";


const INITIAL_PARTICLES: Particle[] = [...Array(20)].map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: `${5 + Math.random() * 10}s`,
    delay: `${Math.random() * 10}s`,
}));


const App:React.FC = () =>{
    const [ showSidebar, setShowSidebar ] = useState<boolean>(false);
    const [ currentTime, setCurrentTime ] = useState<Date>(new Date());

    const windowManager = useWindowManager();

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const applications = useMemo<Application[]>(()=> [
        {id: 'portfolio', title: 'Portfolio', icon: User, component: Portfolio, color: 'from-blue-500 to-blue-600'},
        {id: 'projects', title: 'Projects', icon: Briefcase, component: Portfolio, color: 'from-purple-500 to-purple-600'},
    ], []);



    return (
        <div className={'h-screen w-screen bg-gradient-to-br from-indigo-900 via-purpose-900 to-pink-900 overflow-hidden relative'}>
            <div className={'h-full w-full flex-col items-center justify-center p-8 relative z-10'}>
                <div className={'text-center space-y-6 mb-12'}>
                    <div className={'inline-block'}>
                        <div className={'w-32 h-32 animate-pulse bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl mb-6'}>
                            <Code className={'h-16 w-16 text-white'} />
                        </div>
                    </div>

                    <h1 className={'text-7xl font-bold text-white mb-4 drop-shadow-lg'}>
                        Welcome to My Portfolio
                    </h1>
                    <p className={'text-2xl text-blue-200 max-w-2xl mx-auto'}>
                        Full Stack Developer | React | Nestjs | Laravel | ML
                    </p>

                    <div className={'flex items-center justify-center space-x-6 mt-8'}>
                        <button className={'bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full hover:bg-white/20 transition-all flex items-center space-x-2 border-white/20'}>
                            <Github className={'h-5 w-5'} />
                            <span>Github</span>
                        </button>
                        <button className={'bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full hover:bg-white/20 transition-all flex items-center space-x-2 border-white/20'}>
                            <Linkedin className={'h-5 w-5'} />
                            <span>LinkedIn</span>
                        </button>
                        <button className={'bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full hover:bg-white/20 transition-all flex items-center space-x-2 border-white/20'}>
                            <TwitterIcon className={'h-5 w-5'} />
                            <span>Twitter</span>
                        </button>
                    </div>

                </div>

                <div className={'grid grid-cols-4 gap-6 max-w-8xl px-36'}>
                    <div className={'bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform'}>
                        <div className={'text-4xl mb-3'}>🚀</div>
                        <h3 className={'text-xl font-bold text-white mb-2 '}>10+ Projects</h3>
                        <p className={'text-blue-200'}>Delivered Successfully</p>
                    </div>

                    <div className={'bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:scale-x-105 transition-transform'}>
                        <div className={'text-4xl mb-3'}>⚡</div>
                        <h3 className={'text-xl font-bold text-white mb-2'}>1+ Years</h3>
                        <p className={'text-blue-200'}>Industry Experience</p>
                    </div>

                    <div className={'bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform'}>
                        <div className={'text-4xl mb-3'}>💻</div>
                        <h3 className={'text-xl font-bold text-white mb-2'}>Modern Tech</h3>
                        <p className={'text-blue-200'}>React Js, Nest Js, Laravel</p>
                    </div>

                    <div className={'bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform'}>
                        <div className={'text-4xl mb-3'}>🎨</div>
                        <h3 className={'text-xl font-bold text-white mb-2'}>Beautiful UI</h3>
                        <p className={'text-blue-200'}>Pixel-perfect Designs</p>
                    </div>

                </div>

                <div className={'mt-12'}>
                    <p className={'text-white/80 text-lg mb-4 text-center'}>Explore my work and get in touch</p>
                    <button
                        onClick={() => setShowSidebar(true)}
                        className={'bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg' +
                            ' hover: scale-105 transition-transform shadow-2xl flex items-center space-x-2 mx-auto cursor-pointer'}
                        >
                        <span>Open Navigation</span>
                        <ChevronRight className={'h-5 w-5'} />
                    </button>
                </div>

            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {INITIAL_PARTICLES.map((p) => (
                    <div
                        key={p.id}
                        className="absolute w-2 h-2 bg-white/20 rounded-full"
                        style={{
                            left: p.left,
                            top: p.top,
                            animation: `float ${p.duration} infinite ease-in-out`,
                            animationDelay: p.delay,
                        }}
                    />
                ))}
            </div>

            {windowManager.windows.map(win => (
                <Window
                    key={win.id}
                    app={win}
                    isActive={windowManager.activeWindow === win.id}
                    onClose={windowManager.closeWindow}
                    onMinimize={windowManager.minimizeWindow}
                    onMaximize={windowManager.maximizeWindow}
                    onClick={() => windowManager.setActiveWindow(win.id)}
                    isMaximized={win.isMaximized}
                    isMinimized={win.isMinimized}
                />
            ))}

            <div className={'fixed top-0 left-0 h-full w-80 bg-gray-900/95 backdrop-blur-lg shadow-2xl transform transition-transform' +
                `duration-300 z-50 ${showSidebar? 'translate-x-0' : '-translate-x-full'}`}>
                <div className={'p-6 border-b border-gray-700 flex items-center justify-between'}>
                    <h2 className={'text-2xl font-bold text-white'}>Applications</h2>
                    <button
                        onClick={() => setShowSidebar(false)}
                        className={'text-white hover:bg-white/10 p-2 rounded-lg transition-colors'}
                    >
                        <X className={'w-6 h-6'} />
                    </button>
                </div>

                <div className={'p-4 space-y-2'}>
                    {applications.map(app=> (
                        <button
                            key={app.id}
                            onClick={() => {
                                windowManager.openWindow(app);
                                setShowSidebar(false);
                            }}
                        className={"w-full bg-gradient-to-r from-gray-800 to-gray-700 hover:to-gray-600 text-white p-4 rounded-lg transition-all flex items-center space-x-4 group cursor-pointer"}
                        >
                            <div className={`bg-gradient-to-r ${app.color} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                                <app.icon className={'w-6 h-6'} />
                            </div>
                            <div className={'text-left'}>
                                <div className={'font-semibold'}>{app.title}</div>
                                <div className={'text-xs text-gray-400'}>Click to open</div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {showSidebar && (
                <div
                    onClick={() => setShowSidebar(false)}
                    className={'fixed inset-0 bg-black/50 backdrop-blur-sm z-40 cursor-pointer'}
                />
            )}

            <div className={"absolute bottom-0 left-0 right-0 h-14 bg-gray-900/90 backdrop-blur-lg border-t border-gray-700 flex items-center justify-between px-4 shadow-lg z-30"}>
                <button
                    onClick={() => setShowSidebar(true)}
                    className={"flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform"}
                    >
                    <Menu className={'w-5 h-5'} />
                    <span className={'font-semibold'}>Apps</span>
                </button>

                <div className={'flex space-x-2'}>
                    {windowManager.windows.map(win => (
                        <button
                            key={win.id}
                            onClick={() => win.isMinimized ? windowManager.restoreWindow(win.id): windowManager.setActiveWindow(win.id)}
                            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                                windowManager.activeWindow === win.id && !win.isMinimized ? 
                                'bg-blue-600 text-white': 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                        >
                            <win.icon className={'w-4 h-4'} />
                            <span className={'text-sm font-medium'}>{win.title}</span>
                        </button>
                    ))}
                </div>

                <div className={'flex items-center space-x-4 text-white'}>
                    <div className={'text-sm font-medium'}>
                        {currentTime.toLocaleTimeString()}
                    </div>
                    <div className={'text-sm text-gray-400'}>
                        {currentTime.toLocaleDateString('en-GB')}
                    </div>
                </div>
            </div>


            );


        </div>
    )
}

export default App;
