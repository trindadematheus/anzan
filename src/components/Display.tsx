import { useEffect, useState } from "react";
import useSound from "use-sound";

import { useSettings } from "@/hooks/use-settings";

function Display() {
  const { settings, setActiveStep, setResult, numberList } = useSettings();

  const [currentNumber, setCurrentNumber] = useState(numberList[0]);

  const [play, { duration }] = useSound("/sounds/beep.mp3", { volume: 0.8 });

  useEffect(() => {
    if (duration) {
      play();
    }
  }, [duration]);

  useEffect(() => {
    showNumbers();
  }, []);

  useEffect(() => {
    play();
  }, [currentNumber]);

  function showNumbers() {
    let idx = 1;

    const interval = setInterval(() => {
      if (!numberList[idx]) {
        const result = numberList.reduce((acc, curr) => acc + curr, 0);

        clearInterval(interval);
        setResult(result);
        setActiveStep(3);

        return;
      }

      setCurrentNumber(numberList[idx]);
      idx += 1;
    }, settings.speedSeconds * 1000);
  }

  return (
    <>
      <h1 className="text-9xl text-center">{currentNumber}</h1>
    </>
  );
}

export default Display;
