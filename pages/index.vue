<template>
  <nuxt-layout>
    <div
      v-for="item in list"
      :key="item.id"
      class="m-3 border rounded-xl overflow-hidden"
    >
      <nuxt-link :to="`post/${item.id}`">
        <h2 class="bg-slate-300 p-2">{{ item.title }}</h2>
        <p class="bg-slate-100 p-3 overflow-hidden">
          {{ item.body }}
        </p>
      </nuxt-link>
      <div class="flex justify-end">
        <base-edit-post :post="item" />
        <base-delete-post :post="item" />
      </div>
    </div>
    <list-add-post />
  </nuxt-layout>
</template>

<script setup lang="ts">
import useListStore from "~/stores/list";
const store = useListStore();
const list = computed(() => {
  return store.list;
});
</script>
