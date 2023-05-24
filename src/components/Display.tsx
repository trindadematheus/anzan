import { useEffect, useRef, useState } from "react";
import useSound from "use-sound";

import { useSettings } from "@/hooks/use-settings";

function Display() {
  const { settings, setActiveStep, setResult } = useSettings();

  const initialNumber = generateRandomNumber();

  const [currentNumber, setCurrentNumber] = useState(initialNumber);
  const numberList = useRef<number[]>([initialNumber]);

  const [play, { duration }] = useSound("/sounds/beep.mp3", { volume: 0.8 });

  useEffect(() => {
    if (duration) {
      play();
    }
  }, [duration]);

  useEffect(() => {
    const interval = setInterval(
      () => generateNumber(),
      settings.speedSeconds * 1000
    );

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    play();
  }, [currentNumber]);

  function generateRandomNumber() {
    let range: number = 1;

    if (settings.digitsPerNumber === 1) {
      range = 9;
    } else if (settings.digitsPerNumber === 2) {
      range = 99;
    } else if (settings.digitsPerNumber === 3) {
      range = 999;
    }

    return Math.floor(Math.random() * range);
  }

  function generateNumber() {
    if (numberList.current.length === settings.numbersToDisplay) {
      const result = numberList.current.reduce((acc, curr) => acc + curr, 0);

      setResult(result);
      setActiveStep((state) => state + 1);
      return;
    }

    const newNumber = generateRandomNumber();

    setCurrentNumber(newNumber);
    numberList.current.push(newNumber);
  }

  return (
    <>
      <h1 className="text-9xl text-center">{currentNumber}</h1>
    </>
  );
}

export default Display;
