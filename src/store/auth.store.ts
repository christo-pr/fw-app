import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type CurrentUser = {
  id: number;
  name: string;
  email: string;
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
