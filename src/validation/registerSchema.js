import { object, string } from "yup";

const registerSchema = object({
  email: string()
    .email("Invalid mail")
    .required("You can't leave the Email blank."),
  userName: string()
    .min(3)
    .max(30, "Username can't be longer than 30 characters long.")
    .required("You can't leave the Username blank."),
  fullName: string.required("You can't leave the Full Name blank."),
  userPass: string()
    .min(6, "Password must be at least 6 characters long.")
    .required("You can't leave the password blank."),
});

export default registerSchema;
