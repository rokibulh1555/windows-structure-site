import * as React from "react";
import {useState} from "react";
import type {SettingsState} from "../../types";


const SettingsApp: React.FC = () => {

    const [ settings, setSettings ] = useState<SettingsState>({
        notifications: true,
        darkMode: false,
        autoUpdate: true
    });

    const toggleSetting = (key: keyof SettingsState): void => {
        setSettings(prev => ({ ...prev, [key]: !prev[key]}));
    };

    return (
        <div className={'p-6 space-y-4'}>
            <h1 className={'text-3xl font-bold mb-6'}>Settings</h1>
            <div className={'space-y-3'}>
                {(Object.entries(settings) as [keyof SettingsState, boolean][]).map(([key, value]) => (
                    <div
                        key={key}
                        className={'bg-white rounded-lg p-4 shadow-md flex items-center justify-between'}
                    >
                        <span className={'font-semibold capitalize'}>{key.replace(/([A-Z])/g, '$1').trim()}</span>
                        <button
                            onClick={() => toggleSetting(key)}
                            className={`w-12 h-6 rounded-full transition-colors ${value? 'bg-blue-600': 'bg-gray-300'}`}
                        >
                            <div className={`w-5 h-5 bg-white rounded-full transition-transform ${value? 'translate-x-6': 'translate-x-1'}`}></div>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default SettingsApp;