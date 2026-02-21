import { useState, useEffect } from 'react';

export function useTimer(initialSeconds: number = 0) {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning]);

    const start = () => setIsRunning(true);
    const stop = () => setIsRunning(false);
    const reset = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    return { seconds, isRunning, start, stop, reset };
}
