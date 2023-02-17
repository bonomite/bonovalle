<script setup>
// import { gsap } from 'gsap'
// import { useCurrentData } from '~/composables/states'
// const client = useSupabaseClient()
// const dataState = useCurrentData()
// const btnHolderRef = ref(null)
// let btn = null
// const tl = gsap.timeline()

// const newName = ref(null)
// const selectedUser = ref(null)

// onMounted(() => {
//   btn = btnHolderRef.value.querySelector('.p-button')
//   tl.to(btn, { x: 100, yoyo: true, repeat: -1 })
// })
// // the click event for the submit button
// const onClick = async () => {
//   //console.log('selectedUser = ', selectedUser.value)
//   if (tl.paused()) {
//     tl.resume()
//   } else {
//     tl.pause()
//     const { error } = await client
//       .from('test-table')
//       .update({ name: newName.value })
//       .eq('id', selectedUser.value.id)
//     newName.value = null
//     selectedUser.value = null
//     gsap.to(btn, {
//       rotation: 360,
//       onComplete: () => {
//         tl.resume()
//       },
//     })
//   }
// }

// const isBtnDisabled = computed(() => {
//   return selectedUser.value && newName.value
// })
import { Application } from '@splinetool/runtime'
onMounted(() => {
  const canvas = document.getElementById('canvas3d')
  const app = new Application(canvas)
  app.load('https://prod.spline.design/2iFmKQSbm7yQ3bDL/scene.splinecode')
})
</script>

<template>
  <ion-app>
    hello
    <canvas id="canvas3d" width="800" height="600"></canvas>
    <ion-router-outlet />
    <!-- <div>
      <div class="home">
        <h1>Home</h1>
        <div v-if="dataState" v-for="row in dataState">
          <p>id: {{ row.id }}</p>
          <p>name: {{ row.name }}</p>
          <p>powered: {{ row.powered }}</p>
        </div>
        <div class="form p-4">
          <Dropdown
            v-model="selectedUser"
            :options="dataState"
            optionLabel="name"
            placeholder="Select a user"
          />
          <span class="p-float-label mt-6">
            <InputText id="newname" type="text" v-model="newName" />
            <label for="newname">new name</label>
          </span>
          <div ref="btnHolderRef" class="mt-6">
            <Button
              @click="onClick"
              :disabled="!isBtnDisabled"
              label="submit data"
            />
          </div>
        </div>
      </div>
    </div> -->
  </ion-app>
</template>

<style lang="scss">
.home {
  .form {
    //background-color: var(--primary-color-lighter);
  }
}
</style>
