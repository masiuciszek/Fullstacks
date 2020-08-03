type Fn = () => void;

type Theme = "LIGHT" | "DARK";

type Gender = "MALE" | "FEMALE";

type AppLink = "home" | "about" | "stores";

type SocialType = "twitter" | "instagram" | "github";

type Status = "rejected" | "resolved" | "pending" | "passive";

interface LinkType<T> {
  name: T;
  path: string;
}

type Role = "USER" | "ADMIN" | "MASTER";

type StoreType = "FRIENDLY" | "LOVELY" | "FAMILY" | "SPORTS_FAN";

interface Token {
  token: string;
}
interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: Gender;
  role: Role;
  tokens: Token[];
  avatar: Buffer | undefined;
  createdAt: Date;
}

interface RegisterLoginResponse {
  success: boolean;
  msg: string;
  data: User;
  token: string;
}

interface RegisterFormData {
  gender: Gender;
  role: Role;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

type ErrorMessage =
  | "Please Try Again"
  | "Success"
  | "Ooops Something went wrong"
  | "";

interface TokenResponse {
  success: boolean;
  token: string;
}

interface UserLoadedResponse {
  success: boolean;
  msg: string;
  data: User;
}

interface LoginData {
  email: string;
  password: string;
}