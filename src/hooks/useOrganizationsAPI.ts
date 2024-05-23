import { useCallback } from "react";
import useAuthStore from "src/store/auth.store";

type REST_HOOK_RESULT = {
  post: (data: CompanyForm) => Promise<any>;
  get: (orgID: string) => Promise<any>;
};

const BASE_API_URL = import.meta.env.VITE_BASE_URL_API;

export default function useOrganizationsAPI(): REST_HOOK_RESULT {
  const currentUser = useAuthStore((s) => s.currentUser);

  const post = useCallback(
    (data: CompanyForm) =>
      fetch(`${BASE_API_URL}/organizations`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${currentUser?.token}`,
        },
      })
        .then((res) => res.json)
        .then((body) => body),
    [currentUser]
  );
  const get = useCallback(
    (orgID: string) =>
      fetch(`${BASE_API_URL}/organizations/${orgID}`, {
        headers: {
          Authorization: `Bearer ${currentUser?.token}`,
        },
      })
        .then((res) => res.json())
        .then((body) => body),
    [currentUser]
  );

  return {
    post,
    get,
  };
}
