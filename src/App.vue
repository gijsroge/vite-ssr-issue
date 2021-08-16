<template>
  <div class="flex-grow">
    <router-view :key="$route.fullPath" v-slot="{ Component, route }">
      <transition name="fade" mode="out-in" @after-leave="afterLeave">
        <keep-alive>
          <component
            :is="Component"
            :key="route.meta.usePathKey ? route.path : undefined"
          />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import emitter from 'tiny-emitter/instance'

export default defineComponent({
  name: 'App',
  components: {},
  methods: {
    resolved() {
      emitter.emit('pageTransition:finished')
    },
    afterLeave() {
      emitter.emit('pageTransition:finished')
    }
  }
})
</script>
