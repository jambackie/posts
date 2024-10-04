<template>
  <nuxt-layout>
    <nuxt-link to="/">Вернуться к списку</nuxt-link>
    <div v-if="post">
      <h2 class="text-center text-2xl leading-10">{{ post.title }}</h2>
      <p class="text-center">{{ post.body }}</p>
      <base-delete-post :post="post" />
      <base-edit-post :post="post" />
    </div>
    <div v-else>
      <p class="text-center">Этот пост был удален</p>
    </div>
  </nuxt-layout>
</template>

<script setup lang="ts">
const router = useRouter();
const postId: string = router.currentRoute.value.params.id + "";
const store = useAndGetPostStore(postId);

const post = computed(() => store.post);

definePageMeta({
  middleware: ["post"],
});

onBeforeRouteLeave((to, from, next) => {
  store.$dispose();
  next();
});
</script>
