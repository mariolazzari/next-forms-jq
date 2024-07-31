"use client";

import { formHandlerAction } from "@/app/_actions/formHandler";
import { StringMap } from "@/app/_types/Deal";
import { useState } from "react";

function DealForm() {
  const [errors, setErrors] = useState<StringMap | undefined>({});

  const onSubmit = async (formData: FormData) => {
    const { errors, successMsg } = await formHandlerAction(formData);

    setErrors(errors);

    console.log(errors, successMsg);
  };

  return (
    <form className="w-full max-w-xl" action={onSubmit}>
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
          {errors?.name && (
            <small className="text-red-400">{errors.name}</small>
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
          {errors?.link && (
            <small className="text-red-400">{errors.link}</small>
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
          {errors?.coupon && (
            <small className="text-red-400">{errors.coupon}</small>
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
          {errors?.discount && (
            <small className="text-red-400">{errors.discount}</small>
          )}
        </div>
      </div>

      <div className="text-center mt-4">
        <button className="p-2 shadow-md border border-white rounded-xl">
          Submit
        </button>
      </div>
    </form>
  );
}

export default DealForm;
