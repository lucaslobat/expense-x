<template>
  <div class="d-flex  sincome__and__expense">
    <v-card class="d-flex  ga-4 pa-6 w-100 justify-space-between">
      <div class="d-flex align-center flex-column ga-2">
        <span class="text-uppercase">income</span>
        <span class="green">575€</span>
      </div>

      <v-divider vertical  color="#00c6cf" :opacity="50"/>
      <div class="d-flex align-center flex-column ga-2">
        <span class="text-uppercase">expense</span>
        <span>15€</span>
      </div>
    </v-card>
  </div>
</template>

<script setup></script>

<style scoped>
.income__and__expense{
    min-width:100%;
}
</style>
