import { InputHTMLAttributes } from "react";

type TextInputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

function TextInput({ label, ...props }: TextInputProps) {
  return (
    <>
      <div className="form-control w-full">
        {!!label && (
          <label className="label">
            <span className="label-text">{label}</span>
          </label>
        )}
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          {...props}
        />
        {/* <label className="label">
          <span className="label-text-alt">Bottom Left label</span>
        </label> */}
      </div>
    </>
  );
}

export default TextInput;
