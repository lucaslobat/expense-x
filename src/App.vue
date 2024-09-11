<script setup>
import Header from './components/Header.vue';
import BalanceData from './components/BalanceData.vue';
import IncomeAndExpense from './components/IncomeAndExpense.vue';
</script>

<template>
  <section class="d-flex flex-column ga-4">
    <Header />
    <BalanceData />
    <IncomeAndExpense/>
  </section>
</template>

<style scoped></style>
