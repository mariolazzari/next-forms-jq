import { number, z } from "zod";

export const dealSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(5, "Name must be at least 5 characters"),
  link: z
    .string({ message: "Link is required" })
    .url("Link must be a valid url"),
  coupon: z
    .string({ message: "Coupon code is mandatory" })
    .min(5, "Coupon code must be at least 5 characters"),
  discount: z.coerce
    .number({ message: "Discount percentage is required" })
    .min(1, "Discount must be greater than 0")
    .max(100, "Discount must be less than 100"),
});
