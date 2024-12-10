import { isValidPhoneNumber, parsePhoneNumberWithError } from "libphonenumber-js";
import { z } from "zod";

export const phone = (schema: z.ZodString) => {
    return schema
            .refine(isValidPhoneNumber, "Please specify a valid phone number (include the international prefix).")
            .transform((value) => parsePhoneNumberWithError(value).number.toString());
    }

