<template>
  <div class="grid gap-2">
    <h4>Редактирование поста</h4>
    <label for="title">Заголовок</label>
    <div class="flex">
      <input
        id="title"
        v-model="title"
        class="grow border bg-gray-50"
        type="text"
        v-bind="titleAttrs"
      />
    </div>
    <div class="text-red-500">{{ errors.title }}</div>
    <label for="body">Текст</label>
    <div class="flex">
      <textarea
        id="body"
        v-model="body"
        class="grow border bg-gray-50 h-36"
        v-bind="bodyAttrs"
      />
    </div>
    <div class="text-red-500">{{ errors.body }}</div>
    <button
      class="mb-2 md:mb-0 bg-blue-500 border border-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-blue-600"
      @click="apply"
    >
      Сохранить
    </button>
  </div>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
const emit = defineEmits(["apply"]);
const props = defineProps({
  post: {
    type: Object,
    default: null,
  },
});
const lenghStr = (num: number) => {
  return (val: string) => {
    if (val?.length) {
      if (val.length < 2) {
        return "Слишком короткий текст";
      } else if (val.length > num) {
        return "Слишком длинный текст";
      } else {
        return true;
      }
    }
    return "Поле не может быть пустым";
  };
};
const { values, errors, defineField } = useForm({
  initialValues: {
    title: props.post?.title,
    body: props.post?.body,
  },
  validationSchema: {
    body: lenghStr(50),
    title: lenghStr(12),
  },
});
const [title, titleAttrs] = defineField("title");
const [body, bodyAttrs] = defineField("body");
const apply = () => {
  if (
    values.title?.length &&
    values?.body.length &&
    !Object.keys(errors.value).length
  ) {
    emit("apply", values);
  }
};
</script>
