<template>
  <div class="d-flex flex-column ga-2 mt-8 w-100">
    <div>
      <span class="text-h5 font-weight-bold">{{ headerTitle }}</span>
    </div>

    <v-divider color="#00c6cf" :opacity="50" />
  </div>
</template>

<script setup>
const props = defineProps(['headerTitle']);
</script>
