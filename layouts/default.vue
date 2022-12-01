<script setup>
const props = defineProps({
  //   propVar: {
  //     type: Boolean,
  //     default: false,
  //   },
})

//const emit = defineEmits(["change", "click"]);

// lifecycle hooks
onMounted(() => {})
</script>

<template>
  <div>
    <div class="default-template">
      header
      <slot />
      footer
    </div>
  </div>
</template>

<style lang="scss">
.default-template {
}
</style>
