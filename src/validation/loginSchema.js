import { object, string } from "yup";

const IF_BLANK = "You can't leave the input empty.";

const loginSchema = object({
  userName: string().required(IF_BLANK),
  userPass: string().required(IF_BLANK),
});

export default loginSchema;
