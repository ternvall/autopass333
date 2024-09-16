<script setup lang="ts">

const version = __VERSION__

</script>

<template>
  <div style="grid-area: content">
    <div
      style="grid-area: version"
      class="self-start"
    >
      <p>
        Version: {{ version }}
      </p>
      <h1>Changelog</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.changelog) {
  input[type='checkbox'] {
    @apply checkbox checkbox-info disabled:opacity-100;
  }
  table {
    @apply table table-zebra;
  }
}
</style>
