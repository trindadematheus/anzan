import { SelectHTMLAttributes } from "react";

type SelectProps = {
  label?: string;
  children: React.ReactNode;
} & SelectHTMLAttributes<HTMLSelectElement>;

function Select({ label, children, ...props }: SelectProps) {
  return (
    <>
      <div className="form-control w-full">
        {!!label && (
          <label className="label">
            <span className="label-text">Pick the best fantasy franchise</span>
          </label>
        )}
        <select {...props} className="select select-bordered">{children}</select>
      </div>
    </>
  );
}

export default Select;
