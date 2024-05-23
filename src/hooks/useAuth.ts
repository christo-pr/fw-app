import { useCallback } from "react";
import {
  signIn,
  signUp,
  signOut,
  getCurrentUser,
  fetchAuthSession,
} from "aws-amplify/auth";

type LoginDetails = {
  email: string;
  password: string;
};

type HookResult = {
  login: (details: LoginDetails) => void;
  signup: (details: LoginDetails) => void;
  logout: () => void;
  getCurrentUser: () => void;
  fetchAuthSession: () => void;
};

export default function useAuth(): HookResult {
  const login = useCallback(async (details: LoginDetails) => {
    try {
      await signIn({
        username: details.email,
        password: details.password,
        options: {
          authFlowType: "USER_PASSWORD_AUTH",
        },
      });
    } catch (error) {
      console.log("error signing in", error);
    }
  }, []);
  const signup = useCallback(async (details: LoginDetails) => {
    try {
      return await signUp({
        username: details.email,
        password: details.password,
      });
    } catch (error) {
      console.log("error signing up:", error);
    }
  }, []);

  return {
    login,
    signup,
    logout: signOut,
    getCurrentUser,
    fetchAuthSession,
  };
}
