export default defineNuxtRouteMiddleware((to) => {
  const postId: string = to.params.id + "";
  const postStore = useAndGetPostStore(postId);
  postStore.getPostById(postId);
});
