import React, { useState, useEffect } from "react";

function App() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1000) {
          clearInterval(timer);
          setIsRunning(false);
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  // Convert ms to h:m:s
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const startCountdown = () => {
    setTimeLeft(5 * 60 * 1000); // 5-minute countdown
    setIsRunning(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white text-center">
      <h1 className="text-4xl font-bold mb-6">⏳ Countdown Timer</h1>

      <div className="text-6xl font-mono bg-white/10 px-8 py-4 rounded-2xl shadow-lg mb-8">
        {String(hours).padStart(2, "0")}:
        {String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </div>

      {!isRunning && (
        <button
          onClick={startCountdown}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-lg font-semibold rounded-xl transition-all duration-200"
        >
          Start Countdown
        </button>
      )}

      {timeLeft === 0 && !isRunning && (
        <p className="mt-6 text-2xl text-yellow-300 animate-bounce">
          🚀 Time’s Up!
        </p>
      )}
    </div>
  );
}

export default App;