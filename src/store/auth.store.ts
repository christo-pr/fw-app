import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type CurrentUser = {
  id: string;
  name: string;
  email: string;
  token: string;
};

interface AuthState {
  currentUser?: CurrentUser;
  setCurrentUser: (u: CurrentUser) => void;
}

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        setCurrentUser: (u) => set({ currentUser: u }),
      }),
      { name: "auhtStore" }
    )
  )
);

export default useAuthStore;
