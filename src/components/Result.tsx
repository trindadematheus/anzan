import { FormEvent, useState } from "react";

import { useSettings } from "@/hooks/use-settings";
import TextInput from "./TextInput";

function Result() {
  const { result, setActiveStep } = useSettings();

  const [answer, setAnswer] = useState("");
  const [answerStatus, setAnswerStatus] = useState<"not" | "right" | "wrong">(
    "not"
  );

  function handleContinue(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    if (answerStatus === "not") {
      if (parseInt(answer) === result) {
        setAnswerStatus("right");
      } else {
        setAnswerStatus("wrong");
      }
    } else {
      setActiveStep(0);
    }
  }

  return (
    <>
      {answerStatus !== "not" && (
        <div className="alert bg-base-300">
          <div>
            {answerStatus === "right" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}

            {answerStatus === "wrong" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
            <span>
              {answerStatus === "right"
                ? "Correct answer"
                : `Wrong answer, the result is: ${result}`}
            </span>
          </div>
        </div>
      )}

      <form onSubmit={handleContinue}>
        <TextInput
          value={answer}
          onChange={(evt) => setAnswer(evt.target.value)}
          label="Answer"
          type="number"
        />

        <button type="submit" className="btn mt-8 btn-block">
          {answerStatus === "not" ? "check" : "try again"}
        </button>
      </form>
    </>
  );
}

export default Result;
