<template>
  <div class="d-flex  sincome__and__expense">
    <v-card class="d-flex  ga-4 pa-6 w-100 justify-space-between">
      <div class="d-flex align-center flex-column ga-2">
        <span class="text-uppercase font-weight-medium">total income</span>
        <span class="text-green ">575€</span>
      </div>

      <v-divider vertical  color="#00c6cf" :opacity="50"/>
      
      <div class="d-flex align-center flex-column ga-2">
        <span class="text-uppercase font-weight-medium">total expense</span>
        <span class="text-red">15€</span>
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
