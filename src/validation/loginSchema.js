import { object, string } from "yup";

const loginSchema = object({
  userName: string().min(3).max(30).required(),
  userPass: string().min(6).required(),
});

export default loginSchema;
