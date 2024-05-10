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

type Company = {
  name: string;
};

interface SetupState {
  complete: boolean;
  company?: Company;
  currentStep: Step;
  setCurrentStep: (s: Step) => void;
  setCompany: (c: Company) => void;
  setComplete: (complete: boolean) => void;
}

const useSetupStore = create<SetupState>()((set) => ({
  complete: false,
  currentStep: setupSteps[0],
  setCurrentStep: (s) => set({ currentStep: s }),
  setCompany: (c) => set({ company: c }),
  setComplete: (complete) => set({ complete }),
}));

export default useSetupStore;
