<script setup lang="ts">
import { useCurrentData } from '~/composables/states'
import type { RealtimeChannel } from '@supabase/supabase-js'
const props = defineProps({
  //   propVar: {
  //     type: Boolean,
  //     default: false,
  //   },
})
let realtimeChannel: RealtimeChannel
const client = useSupabaseClient()
const dataState = useCurrentData()

const { data: rows, refresh: refreshRows } = await useAsyncData(
  'test-table',
  async () => {
    console.log('refreshed')
    return await client.from('test-table').select('id, powered, name')
  }
)

//initial set to global state
dataState.value = rows.value.data

watch(
  () => rows.value,
  async (rows) => {
    console.log('dataState changed', rows.data)
    dataState.value = rows.data
  }
)
//const emit = defineEmits(["change", "click"]);

// lifecycle hooks
onMounted(() => {
  // Real time listener for new workouts
  realtimeChannel = client
    .channel('public:test-table')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'test-table' },
      () => refreshRows()
    )
  realtimeChannel.subscribe()
})
onUnmounted(() => {
  client.removeChannel(realtimeChannel)
})
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
