import type { Post } from "./list";
import useListStore from "./list";

interface PostState {
  post: Post | null;
}

export const usePostStore = (identity: string) =>
  defineStore({
    id: `post-${identity}`,
    state(): PostState {
      return {
        post: null,
      };
    },
    getters: {
      listStore() {
        const store = useListStore();
        return store;
      },
    },
    actions: {
      getPostById(id: string) {
        const post = this.listStore.list.find((item) => item.id === +id);
        this.post = post || null;
      },
    },
  })();
