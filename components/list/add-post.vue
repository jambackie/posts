<template>
  <div>
    <modal-dialog ref="modal" btn-title="Добввить пост">
      <base-edit-form @apply="addPost" />
    </modal-dialog>
  </div>
</template>

<script setup lang="ts">
import useListStore from "~/stores/list";
const store = useListStore();
const modal = ref(null);
const onToggle = () => {
  if (modal.value) {
    const method = modal.value["onToggle"] as any;
    method();
  }
};
interface formPost {
  title: string;
  body: string;
}
const addPost = (formPost: formPost) => {
  const post = {
    id: Date.now(),
    ...formPost,
  };
  store.posts.push(post);
  onToggle();
};
</script>
