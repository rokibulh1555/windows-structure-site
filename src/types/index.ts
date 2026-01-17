import * as React from "react";

export interface Application {
    id: string;
    title: string;
    // icon: React.ComponentType<{ classname?: string}>;
    icon: React.ComponentType;
    color: string;
    component: React.ComponentType;
}

export interface WindowState extends Application {
    isMinimized: boolean;
    isMaximized: boolean;
    position: {x: number, y: number};
}

export interface WindowProps {
    app: WindowState;
    isActive: boolean;
    onClose: (id: string ) => void;
    onMinimize: (id: string ) => void;
    onMaximize: (id: string ) => void;
    onClick:() => void;
    isMaximized: boolean;
    isMinimized: boolean;
}

export interface Project {
    name: string;
    tech: string;
    color: string;
}