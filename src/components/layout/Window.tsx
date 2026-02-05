import type {WindowProps} from "../../types";
import * as React from "react";
import {Minimize2, X} from "lucide-react";

const Window: React.FC<WindowProps> = ({
    app,
    isActive,
    onClose,
    // onMinimize,
    // onMaximize,
    onClick,
    isMaximized,
    isMinimized
}) => {
    if (isMinimized) return null;

    const Component = app.component;

    return (
        <div
            onClick={onClick}
            className={'absolute bg-white rounded-lg shadow-2xl flex flex-col ' +
                `${isMaximized ? 'inset-4' : 'w-4/5 h-4/5 '} ${isActive ? 'z-50': 'z-40'}`}
            style={!isMaximized ? {left: app.position.x, top: app.position.y} : {}}
        >
            <div
                className={'bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-t-lg flex items-center justify-between'}
            >
                <div className={'flex items-center space-x-3'}>
                    <app.icon classname={'w-5 h-5'} />
                    <span className={'font-semibold'}>{app.title}</span>
                </div>
                <div className={'flex space-x-2'}>
                    <button onClick={(e: React.MouseEvent) => {e.stopPropagation(); onClose(app.id);}} className={'hover:bg-white/20 p-1 rounded'}>
                        <Minimize2 className={'h-4 w-4'} />
                    </button>
                    <button onClick={(e: React.MouseEvent) => {e.stopPropagation(); onClose(app.id);}} className={'hover:bg-white/20 p-1 rounded'}>
                        <Minimize2 className={'h-4 w-4'}  />
                    </button>
                    <button onClick={(e: React.MouseEvent) => {e.stopPropagation(); onClose(app.id);}} className={'bg-red-500 p-1 rounded'}>
                        <X className={'h-4 w-4'} />
                    </button>
                </div>
            </div>
            <div className={'flex-1 overflow-auto bg-gray-50'}>
                <Component />
            </div>
        </div>
    )
}


export default Window;