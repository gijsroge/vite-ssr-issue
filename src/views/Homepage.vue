<template>
  <h1>test</h1>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import emitter from 'tiny-emitter/instance'

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {},
  async mounted() {
    emitter.emit('pageTransition:finished')
  }
})
</script>
