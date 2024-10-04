import { usePostStore } from "~/stores/post";

export const useAndGetPostStore = (identity: string = "") => {
  const storeIdentity = identity;

  return usePostStore(storeIdentity);
};
