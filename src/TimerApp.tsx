import React from 'react';
import { useTimer } from './useTimer';

export default function TimerApp() {
    const { seconds, isRunning, start, stop, reset } = useTimer();

    const formatTime = (s: number) => {
        const mins = Math.floor(s / 60);
        const secs = s % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="timer">
            <h1>{formatTime(seconds)}</h1>
            <div>
                {!isRunning ? (
                    <button onClick={start}>Start</button>
                ) : (
                    <button onClick={stop}>Stop</button>
                )}
                <button onClick={reset}>Reset</button>
            </div>
            <p>Status: {isRunning ? 'Running' : 'Stopped'}</p>
        </div>
    );
}
