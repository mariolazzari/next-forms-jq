"use server";

import { dealSchema } from "../_schemas/deal";
import { DealFormState } from "../_types/Deal";
import { convertZodErrors } from "../_utils/errors";

export const formHandlerAction = async (
  formData: FormData
): Promise<DealFormState<undefined>> => {
  const deal = {
    name: formData.get("name"),
    link: formData.get("link"),
    coupon: formData.get("coupon"),
    discount: formData.get("discount"),
  };

  const validated = dealSchema.safeParse(deal);

  if (!validated.success) {
    const errors = convertZodErrors(validated.error);
    return { errors };
  }

  return { successMsg: "Deal added successfully" };
};
