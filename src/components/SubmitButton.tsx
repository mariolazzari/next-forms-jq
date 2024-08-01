"use client";

import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-blue-700 px-5 py-2 rounded-xl disabled:bg-slate-400"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

export default SubmitButton;
