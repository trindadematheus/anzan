import { useEffect, useState } from "react";

import { useSettings } from "@/hooks/use-settings";

function Prepare() {
  const { setActiveStep } = useSettings();

  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveItem((state) => state + 1),
      1000
    );

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeItem === 3) {
      setActiveStep((state) => state + 1);
    }
  }, [activeItem]);

  return (
    <>
      <ul className="steps">
        <li
          data-content={`${activeItem >= 0 ? "✓" : "x"}`}
          className={`step ${activeItem >= 0 && "step-primary"}`}
        >
          Ready
        </li>
        <li
          data-content={`${activeItem >= 1 ? "✓" : "x"}`}
          className={`step ${activeItem >= 1 && "step-primary"}`}
        >
          Set
        </li>
        <li
          data-content={`${activeItem >= 2 ? "✓" : "x"}`}
          className={`step ${activeItem >= 2 && "step-primary"}`}
        >
          Go
        </li>
      </ul>
    </>
  );
}

export default Prepare;
