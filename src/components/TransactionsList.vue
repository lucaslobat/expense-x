<template>
  <div class="d-flex flex-column ga-2 mt-8">
    <span class="text-h5 font-weight-bold">History</span>
    <v-divider color="#00c6cf" :opacity="50" />
  </div>

  <v-list class="d-flex flex-column ga-1" bg-color="#1a1a1a">
    <v-list-item v-for="transaction in transactions" :key="transaction">
      <v-card
        class="pa-3"
        :rounded="1"
        :class="{
          expense__border: transaction.type === 'expense',
          income__border: transaction.type === 'income',
        }"
      >
        <div class="d-flex justify-space-between">
          <span> {{ transaction.description }}</span>
          <span> {{ transaction.price }} €</span>
        </div>
      </v-card>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { ref } from 'vue';

const transactions = ref([
  { description: 'Coffee', price: 2.5, type: 'expense' },
  { description: 'JavaScript book', price: 25.99, type: 'income' },
  { description: 'Headphones', price: 49.99, type: 'expense' },
  { description: 'Netflix subscription', price: 9.99, type: 'income' },
  { description: 'Mechanical keyboard', price: 79.99, type: 'expense' },
]);
</script>

<style scoped>
.expense__border {
  border-right: 0.5em solid #ff6347;
}

.income__border {
  border-right: 0.5em solid #8eed98;
}
</style>
