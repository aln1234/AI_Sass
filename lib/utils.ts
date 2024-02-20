import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ERROR HANDLER
export const handleError = (error: unknown) => {
  switch (typeof error) {
    case "object":
      // This is a native JavaScript error (e.g., TypeError, RangeError)
      if (error instanceof Error) {
        console.error(error.message);
        throw new Error(`Error: ${error.message}`);
      }
      // This is an unknown type of error
      else {
        console.error(error);
        throw new Error(`Unknown error: ${JSON.stringify(error)}`);
      }
      break;
    case "string":
      // This is a string error message
      console.error(error);
      throw new Error(`Error: ${error}`);
      break;
    default:
      // This is an invalid type of error
      console.error(error);
      throw new Error(`Invalid error: ${error}`);
      break;
  }
};
