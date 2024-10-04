import useLorem from "../composables/use-lorem";

export interface Post {
  id: number;
  title: string;
  body: string;
}

interface ListState {
  posts: Post[];
}

export default defineStore({
  id: "list",
  state(): ListState {
    return {
      posts: [
        {
          id: 1,
          title: "Title1",
          body: "Body1" + useLorem(1),
        },
        {
          id: 2,
          title: "Title2",
          body: "Body2" + useLorem(3),
        },
        {
          id: 3,
          title: "Title3",
          body: "Body3" + useLorem(2),
        },
      ],
    };
  },
  getters: {
    list(): Post[] {
      const posts = [...this.posts];
      return posts.reverse();
    },
  },
  actions: {
    deletePost(id: number) {
      this.posts = this.posts.filter((l) => l.id !== id);
    },
  },
});
