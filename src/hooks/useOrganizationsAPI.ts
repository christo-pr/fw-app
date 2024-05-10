import { useCallback } from "react";

type REST_HOOK_RESULT = {
  post: (data: CompanyForm) => Promise<CompanyForm>;
  get: (orgID: number) => Promise<CompanyForm>;
};

const BASE_API_URL = import.meta.env.VITE_BASE_URL_API;

export default function useOrganizationsAPI(): REST_HOOK_RESULT {
  const post = useCallback(
    (data: CompanyForm) =>
      fetch(`${BASE_API_URL}/organizations`, {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((res) => res.json)
        .then((body) => body) as Promise<CompanyForm>,
    []
  );
  const get = useCallback(
    (orgID: number) =>
      fetch(`${BASE_API_URL}/organizations/${orgID}`)
        .then((res) => res.json())
        .then((body) => body),
    []
  );

  return {
    post,
    get,
  };
}
