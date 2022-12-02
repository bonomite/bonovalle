<script setup>
import { useCurrentData } from '~/composables/states'
const dataState = useCurrentData()
</script>

<template>
  <div>
    <div class="home">
      Home
      <div v-if="dataState" v-for="row in dataState">
        <p>id: {{ row.id }}</p>
        <p>name: {{ row.name }}</p>
        <p>powered: {{ row.powered }}</p>
      </div>
      <Button label="Prime Button" />
    </div>
  </div>
</template>

<style lang="scss">
.home {
}
</style>
