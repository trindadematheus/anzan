import generateRandomNumberArray from "@/utils/generate-numbers";
import React, { useState, createContext, useContext, useEffect } from "react";

interface SettingsProviderProps {
  children: React.ReactNode;
}

interface GameSettings {
  digitsPerNumber: number;
  speedSeconds: number;
  numbersToDisplay: number;
}

interface SettingsContextProps {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  settings: GameSettings;
  setSettings: React.Dispatch<React.SetStateAction<GameSettings>>;
  result: number;
  setResult: React.Dispatch<React.SetStateAction<number>>;
  numberList: number[];
  setNumberList: React.Dispatch<React.SetStateAction<number[]>>;
}

const SettingsContext = createContext<SettingsContextProps | null>(null);

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [result, setResult] = useState(0);
  const [numberList, setNumberList] = useState<number[]>([]);
  const [settings, setSettings] = useState<GameSettings>({
    digitsPerNumber: 1,
    speedSeconds: 1,
    numbersToDisplay: 5,
  });

  return (
    <SettingsContext.Provider
      value={{
        activeStep,
        setActiveStep,
        settings,
        setSettings,
        result,
        setResult,
        numberList,
        setNumberList,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings(): SettingsContextProps {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }

  return context;
}
