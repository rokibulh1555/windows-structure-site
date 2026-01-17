import * as React from "react";

export interface Application {
    id: string;
    title: string;
    icon: React.ComponentType<{ classname?: string}>;
    component: React.ComponentType;
}