import useSetupStore from "src/store/setup.store";

import { CompanyDetails } from "./CompanyDetails";
import { PersonalDetails } from "./PersonalDetails";
import { InviteTeam } from "./InviteTeam";

export const SetupForm: React.FC = () => {
  const currentStep = useSetupStore((s) => s.currentStep);

  if (currentStep.index === 0) return <CompanyDetails />;
  if (currentStep.index === 1) return <PersonalDetails />;
  if (currentStep.index === 2) return <InviteTeam />;

  return null;
};
