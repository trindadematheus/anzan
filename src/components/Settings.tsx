import { useState } from "react";

import TextInput from "./TextInput";
import { useSettings } from "@/hooks/use-settings";

function Settings() {
  const { settings, setSettings, setActiveStep } = useSettings();

  function handleStart() {
    setActiveStep((state) => state + 1);
  }

  return (
    <>
      <TextInput
        value={settings.digitsPerNumber}
        onChange={(evt) =>
          setSettings((state) => ({
            ...state,
            digitsPerNumber: parseInt(evt.target.value),
          }))
        }
        label="Digits per number"
        type="number"
      />
      <TextInput
        value={settings.speedSeconds}
        onChange={(evt) =>
          setSettings((state) => ({
            ...state,
            speedSeconds: parseInt(evt.target.value),
          }))
        }
        label="Speed (seconds)"
        type="number"
      />
      <TextInput
        value={settings.numbersToDisplay}
        onChange={(evt) =>
          setSettings((state) => ({
            ...state,
            numbersToDisplay: parseInt(evt.target.value),
          }))
        }
        label="Numbers to display"
        type="number"
      />

      <button onClick={handleStart} className="btn mt-8">
        start
      </button>
    </>
  );
}

export default Settings;
