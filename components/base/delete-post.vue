<template>
  <div>
    <div class="flex flex-col items-center justify-center p-3 min-h-full">
      <button
        class="bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-red-600"
        @click="onToggle"
      >
        Удалить
      </button>
    </div>
    <modal-submit
      ref="modal"
      title="Удалить пост?"
      :body="`Пост ${post.title} будет удален`"
      @apply="deletePost"
    />
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
const deletePost = () => {
  store.deletePost(+props.post.id);
  const postStore = useAndGetPostStore(`${props.post.id}`);
  postStore.$reset();
  postStore.$dispose();
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
