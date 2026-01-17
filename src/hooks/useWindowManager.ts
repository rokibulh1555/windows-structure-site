import {useCallback, useState} from "react";
import type {Application, WindowState} from "../types";


const useWindowManager = () => {
    const [ windows, setWindows ] = useState<WindowState[]>([]);
    const [ activeWindow, setActiveWindow ] = useState<string | null>(null);

    const openWindow = useCallback((app: Application) => {
        const existingWindow = windows.find( w=> w.id === app.id);
        if(existingWindow) {
            setActiveWindow(app.id);
            return;
        }

        const newWindow: WindowState = {
            ...app,
            isMinimized: false,
            isMaximized: false,
            position: {x: 100+ windows.length * 30, y: 50+ windows.length * 30}
        };

        setWindows(prev => [...prev, newWindow]);
        setActiveWindow(app.id);
    }, [windows]);

    const closeWindow = useCallback((id: string) => {
        setWindows(prev => prev.filter(w => w.id !== id));
        setActiveWindow(null);
    }, []);

    const minimizeWindow = useCallback((id: string) => {
        setWindows(prev => prev.map( w => w.id === id? {...w, isMinimized: !w.isMinimized}: w));
    }, []);

    const maximizeWindow = useCallback((id: string) => {
        setWindows(prev => prev.map( w => w.id === id? {...w, isMaximized: !w.isMaximized}: w));
    }, []);

    const restoreWindow = useCallback((id: string) => {
        setWindows(prev => prev.map(w => w.id === id? {...w, isMaximized: false}: w));
        setActiveWindow(id);
    }, []);

    return {
        windows,
        activeWindow,
        openWindow,
        closeWindow,
        minimizeWindow,
        maximizeWindow,
        restoreWindow,
        setActiveWindow
    };
};

export default useWindowManager;