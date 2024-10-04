<template>
  <div>
    <modal-dialog ref="modal" btn-title="Редактировать">
      <base-edit-form :post="post" @apply="editPost" />
    </modal-dialog>
  </div>
</template>

<script setup lang="ts">
import useListStore from "~/stores/list";
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

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
const editPost = (formPost: formPost) => {
  const post = store.posts.find((p) => p.id === props.post.id);
  if (post) {
    post.title = formPost.title;
    post.body = formPost.body;
  }
  onToggle();
};
</script>
<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
</style>
