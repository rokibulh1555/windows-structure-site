import * as React from "react";
import { useState} from "react";


const CalculatorApp: React.FC = () => {
    const [display, setDisplay ] = useState<string>('0');
    const [ operation, setOperation ] = useState<string | null>(null);
    const [ prevValue, setPrevValue ] = useState<number | null>(null);

    const handleNumber = (num: string) : void => {
        setDisplay(prev => prev ==='0' ? num: prev + num);
    };

    const handleOperation = (op: string ) : void => {
        setPrevValue(parseFloat(display));
        setOperation(op);
        setDisplay('0');
    };

    const calculate = (): void => {
        if (prevValue === null || operation === null ) return;
        const current = parseFloat(display);
        let result = 0;
        switch (operation) {
            case '+': result = prevValue + current; break;
            case '-': result = prevValue - current; break;
            case '*': result = prevValue * current; break;
            case '/': result = prevValue / current; break;
            default : return;
        }

        setDisplay(result.toString());
        setOperation(null);
        setPrevValue(null);
    };

    const clear = (): void => {
        setDisplay('0');
        setOperation(null);
        setPrevValue(null);
    };

    return (
        <div className={'p-6 flex items-center justify-center'}>
            <div className={'bg-gray-900 rounded-lg p-6 shadow-xl'}>
                <div className={'bg-gray-800 text-white text-right text-3xl p-4 rounded-lg mb-4 font-mono'}>
                    {display}
                </div>
                <div className={'grid grid-cols-4 gap-2'}>
                    {['7', '8', '9', '÷', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map(btn => (
                        <button
                            key={btn}
                            onClick={() => {
                                if (btn === '=') calculate();
                                else if (['+', '-', '*', '÷'].includes(btn)) handleOperation(btn);
                                else handleNumber(btn);
                            }}
                            className={`${btn === '='? 'bg-blue-600': ['+', '-', '*', '÷'].includes(btn) ? 'bg-orange-600': 'bg-gray-600'} text-white p-4 rounded-lg text-xl font-semibold hover:opacity-80 transition-opacity`}
                        >
                            {btn}
                        </button>
                    ))}
                </div>

                <button
                    onClick={clear}
                    className={'w-full mt-2 bg-red-600 text-white p-3 rounded-lg hover:bg-red-700'}
                >
                    Clear
                </button>
            </div>
        </div>
    )
}


export default CalculatorApp;