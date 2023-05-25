import React, { createContext, useContext, useEffect, useState } from "react";
import nookies from "nookies";

interface StatsProviderProps {
  children: React.ReactNode;
}

interface StatsContextProps {
  currentPoints: number;
  bestPoint: number;
  setCurrentPoints: React.Dispatch<React.SetStateAction<number>>;
  setBestPoint: React.Dispatch<React.SetStateAction<number>>;
}

const StatsContext = createContext<StatsContextProps | null>(null);

export function StatsProvider({ children }: StatsProviderProps) {
  const [currentPoints, setCurrentPoints] = useState(0);
  const [bestPoint, setBestPoint] = useState(0);

  useEffect(() => {
    const cookies = nookies.get(null);

    if (cookies.anzan_best) {
      setBestPoint(parseInt(cookies.anzan_best));
    } else {
      setBestPoint(0);
      nookies.set(null, "anzan_best", "0");
    }
  }, []);

  useEffect(() => {
    const cookies = nookies.get(null);

    if (currentPoints > parseInt(cookies.anzan_best)) {
      nookies.set(null, "anzan_best", currentPoints.toString());
      setBestPoint(currentPoints);
    }
  }, [currentPoints]);

  return (
    <StatsContext.Provider
      value={{
        currentPoints,
        bestPoint,
        setBestPoint,
        setCurrentPoints,
      }}
    >
      {children}
    </StatsContext.Provider>
  );
}

export function useStats(): StatsContextProps {
  const context = useContext(StatsContext);

  if (!context) {
    throw new Error("useStats must be used within a StatsProvider");
  }

  return context;
}
