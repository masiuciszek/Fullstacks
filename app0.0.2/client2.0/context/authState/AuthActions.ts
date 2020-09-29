import { Dispatch } from "./AuthType";

export const getMe = (token: string) => async (
  dispatch: Dispatch,
): Promise<void> => {
  try {
    const response = await fetch("http://localhost:4000/auth/get_me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { data: user } = await response.json();
    dispatch({ type: "USER_LOADED", payload: user });
  } catch (err) {
    console.log(err);
    dispatch({ type: "MESSAGE_HANDLER", payload: "REJECTED" });
  }
};

export const loginUser = (formData: LoginFormData) => async (
  dispatch: Dispatch,
) => {
  try {
    const response = await fetch(`http://localhost:4000/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const { token } = await response.json();

    dispatch({ type: "LOGIN", payload: token });
  } catch (err) {
    console.log(err);
    dispatch({ type: "MESSAGE_HANDLER", payload: "REJECTED" });
  }
};