<template>
  <div>
    <div class="flex flex-col items-center justify-center p-3 min-h-full">
      <button
        class="bg-blue-500 border border-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-blue-600"
        @click="onToggle"
      >
        {{ btnTitle }}
      </button>
    </div>
    <transition name="fade">
      <div
        v-if="isModalVisible"
        class="fixed inset-x-0 inset-y-0 flex"
        @scroll.prevent
        @mousewheel.prevent
      >
        <div
          class="absolute bg-black opacity-70 inset-0 z-0"
          @click="onToggle"
        />
        <div
          class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
        >
          <div>
            <slot />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
defineProps({
  btnTitle: {
    type: String,
    default: "Открыть",
  },
});
const isModalVisible = ref(false);
const onToggle = () => {
  isModalVisible.value = !isModalVisible.value;
};
defineExpose({
  onToggle,
});
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
