import { create } from "zustand";

export const setupSteps = [
  {
    id: 1,
    index: 0,
    label: "Company details",
  },
  {
    id: 2,
    index: 1,
    label: "Personal details",
  },
  {
    id: 3,
    index: 2,
    label: "Invite team",
  },
];

type Step = {
  id: number;
  index: number;
  label: string;
};

interface SetupState {
  currentStep: Step;
  setCurrentStep: (s: Step) => void;
}

const useSetupStore = create<SetupState>()((set) => ({
  currentStep: setupSteps[0],
  setCurrentStep: (s) => set({ currentStep: s }),
}));

export default useSetupStore;
