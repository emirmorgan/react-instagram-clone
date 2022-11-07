import { object, string } from "yup";

const IF_BLANK =
  "There was a problem logging you into Instagram. Please try again soon.";

const loginSchema = object({
  userName: string().required(IF_BLANK),
  userPass: string().required(IF_BLANK),
});

export default loginSchema;
