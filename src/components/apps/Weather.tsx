import * as React from "react";
import {type ChangeEvent, useState} from "react";


const WeatherApp: React.FC = () => {
    const [ city, setCity ] = useState<string>('Dhaka');
    return (
        <div className={'p-6 flex items-center justify-center'}>
            <div className={'bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-8 text-white shadow-xl w-96'}>
                <input
                    type={'text'}
                    value={city}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
                    className={'w-full px-4 py-2 rounded-lg text-gray-800 mb-6 outline-none'}
                    placeholder={'Enter city'}
                />
                <div className={'text-center'}>
                    <div className={'text-6xl mb-4'}>☀️</div>
                    <div className={'text-5xl font-bold mb-2'}>72°F</div>
                    <div className={'text-2xl mb-2'}>{city}</div>
                    <div className={'grid grid-cols-3 gap-4 text-center'}>
                        <div>
                            <div className={'text-sm opacity-80'}>Humidity</div>
                            <div className={'text-xl font-semibold'}>65%</div>
                        </div>
                        <div>
                            <div className={'text-sm opacity-80'}>Wind</div>
                            <div className={'text-xl font-semibold'}>12 mph</div>
                        </div>
                        <div>
                            <div className={'text-sm opacity-80'}>Pressure</div>
                            <div className={'text-xl font-semibold'}>1013 mb</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherApp;