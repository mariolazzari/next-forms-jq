"use client";

import { formHandlerAction } from "@/app/_actions/formHandler";
import { DealFormState, StringMap } from "@/app/_types/Deal";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import SubmitButton from "./SubmitButton";

const initialState: DealFormState<StringMap> = {};

function DealForm() {
  // const [errors, setErrors] = useState<StringMap | undefined>({});

  const [serverState, formAction] = useFormState(
    formHandlerAction,
    initialState
  );

  const formRef = useRef<HTMLFormElement>(null);

  //   const onSubmit = async (formData: FormData) => {
  //     const { errors, successMsg } = await formHandlerAction(formData);

  //     if (successMsg) {
  //       setErrors(undefined);
  //       toast.success(successMsg);
  //       formRef.current?.reset();
  //     }

  //     setErrors(errors);
  //   };

  useEffect(() => {
    if (serverState.successMsg) {
      toast.success(serverState.successMsg);
      formRef.current?.reset();
    }
  }, [serverState]);

  return (
    <form ref={formRef} className="w-full max-w-xl" action={formAction}>
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="name">Name</label>
        <input
          className="w-full p-2 rounded-md text-gray-900"
          type="text"
          id="name"
          name="name"
          required
          minLength={5}
          title="Name must be at least 5 characters"
        />
        <div className="min-h-8">
          {serverState.errors?.name && (
            <small className="text-red-400">{serverState.errors.name}</small>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="name">Link</label>
        <input
          className="w-full p-2 rounded-md text-gray-900"
          type="text"
          id="link"
          name="link"
          required
        />
        <div className="min-h-8">
          {serverState.errors?.link && (
            <small className="text-red-400">{serverState.errors.link}</small>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="name">Coupon code</label>
        <input
          className="w-full p-2 rounded-md text-gray-900"
          type="text"
          id="coupon"
          name="coupon"
          required
          minLength={5}
        />
        <div className="min-h-8">
          {serverState.errors?.coupon && (
            <small className="text-red-400">{serverState.errors.coupon}</small>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="name">Discount %</label>
        <input
          className="w-full p-2 rounded-md text-gray-900"
          type="number"
          id="discount"
          name="discount"
          defaultValue={10}
          min={1}
          max={100}
          required
        />
        <div className="min-h-8">
          {serverState.errors?.discount && (
            <small className="text-red-400">
              {serverState.errors.discount}
            </small>
          )}
        </div>
      </div>

      <div className="text-center mt-4">
        {/* <button className="p-2 shadow-md border border-white rounded-xl">
          Submit
        </button> */}

        <SubmitButton />
      </div>
    </form>
  );
}

export default DealForm;
