<script setup lang="ts">
import { useAppStore } from '@/stores/app.store';

const store = useAppStore()

const count = computed(() => store.count)
</script>

<template>
  <div class="m-4 flex flex-col gap-y-2">
    <p>Count: {{ count }}</p>
    <div class="flex gap-x-2 justify-center">
      <button class="btn btn-primary" @click="store.increment">
        Increment
      </button>
      <button class="btn btn-primary" @click="store.decrement">
        Decrement
      </button>
    </div>

    <p>Count: {{ count }}</p>
    <div class="flex gap-x-2 justify-center">
      <v-slider max="140" min="0" @click="store.increment" />
    </div>

    <RouterLink class="underline" to="/common/about">
      About
    </RouterLink>
  </div>
</template>

<style scoped>
.btn {
  @apply px-4 py-2 rounded-md bg-blue-500 text-white;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
