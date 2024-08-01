"use server";

import { dealSchema } from "../_schemas/deal";
import { DealFormState, StringMap } from "../_types/Deal";
import { convertZodErrors } from "../_utils/errors";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const formHandlerAction = async (
  prevState: DealFormState<StringMap>,
  formData: FormData
): Promise<DealFormState<StringMap>> => {
  const deal = {
    name: formData.get("name"),
    link: formData.get("link"),
    coupon: formData.get("coupon"),
    discount: formData.get("discount"),
  };

  const validated = dealSchema.safeParse(deal);

  await sleep(2000);

  if (!validated.success) {
    const errors = convertZodErrors(validated.error);
    return { errors };
  }

  return { successMsg: "Deal added successfully", errors: undefined };
};
