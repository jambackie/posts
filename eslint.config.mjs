import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  languageOptions: {
    globals: {
      "vue/setup-compiler-macros": true,
      defineProps: "readonly",
      defineEmits: "readonly",
      defineExpose: "readonly",
      withDefaults: "readonly",
    },
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
  },
});
