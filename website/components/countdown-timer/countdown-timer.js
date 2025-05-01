import { useEffect, useState } from "react";

const CountdownTimer = ({ initialTimeLeft }) => {
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearTimeout(timer);
    }
  });

  const calculateTimeLeft = () => {
    const difference = +new Date(initialTimeLeft.targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  return (
    <div className="countdown">
      <div className="countdown-wrapper">
        <div className="bloc-time days" data-init-value={timeLeft.days}>
          <div className="figure days days-1">
            <span className="top">{Math.floor(timeLeft.days / 10)}</span>
          </div>
          <div className="figure days days-2">
            <span className="top">{timeLeft.days % 10}</span>
          </div>
        </div>
        <span className="count-title">Days</span>
      </div>
      <span className="colon">&#58;</span>
      <div className="countdown-wrapper">
        <div className="bloc-time hours" data-init-value={timeLeft.hours}>
          <div className="figure hours hours-1">
            <span className="top">{Math.floor(timeLeft.hours / 10)}</span>
          </div>

          <div className="figure hours hours-2">
            <span className="top">{timeLeft.hours % 10}</span>
          </div>
        </div>
        <span className="count-title">Hours</span>
      </div>

      <span className="colon">&#58;</span>
      <div className="countdown-wrapper">
        <div className="bloc-time min" data-init-value={timeLeft.minutes}>
          <div className="figure min min-1">
            <span className="top">{Math.floor(timeLeft.minutes / 10)}</span>
          </div>

          <div className="figure min min-2">
            <span className="top">{timeLeft.minutes % 10}</span>
          </div>
        </div>
        <span className="count-title">Mins</span>
      </div>
      <span className="colon">&#58;</span>
      <div className="countdown-wrapper">
        <div className="bloc-time sec" data-init-value={timeLeft.seconds}>
          <div className="figure sec sec-1">
            <span className="top">{Math.floor(timeLeft.seconds / 10)}</span>
          </div>
          <div className="figure sec sec-2">
            <span className="top">{timeLeft.seconds % 10}</span>
          </div>
        </div>
        <span className="count-title">Secs</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
