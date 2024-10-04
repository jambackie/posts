<template>
  <div>
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
            <div class="text-center p-3 flex-auto justify-center leading-6">
              <h2 class="text-2xl font-bold py-4">{{ title }}</h2>
              <p class="text-md text-gray-500 px-8">
                {{ body }}
              </p>
            </div>
            <div class="p-3 mt-2 text-center space-x-4 md:block">
              <button
                class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100"
                @click="onToggle"
              >
                Нет
              </button>
              <button
                class="mb-2 md:mb-0 bg-blue-500 border border-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-blue-600"
                @click="apply"
              >
                Да
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["apply"]);
defineProps({
  title: {
    type: String,
    default: null,
  },
  body: {
    type: String,
    default: null,
  },
});
const isModalVisible = ref(false);
const onToggle = (): void => {
  isModalVisible.value = !isModalVisible.value;
};
const apply = () => {
  emit("apply");
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
