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
    <div class="home">
      home page
      <Button label="Prime Button" />
    </div>
  </div>
</template>

<style lang="scss">
.home {
}
</style>
