import { useSettings } from "@/hooks/use-settings";
import generateRandomNumberArray from "@/utils/generate-numbers";
import TextInput from "./TextInput";
import Select from "./Select";

function Settings() {
  const { settings, setSettings, setActiveStep, setNumberList } = useSettings();

  function handleStart() {
    const numbers = generateRandomNumberArray(
      settings.digitsPerNumber,
      settings.numbersToDisplay
    );

    setNumberList(numbers);
    setActiveStep((state) => state + 1);
  }

  return (
    <>
      <Select
        value={settings.digitsPerNumber}
        onChange={(evt) =>
          setSettings((state) => ({
            ...state,
            digitsPerNumber: parseInt(evt.target.value),
          }))
        }
        label="Digits per number"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </Select>
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
