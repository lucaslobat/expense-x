<script setup>
import Header from './components/Header.vue';
import BalanceData from './components/BalanceData.vue';
import IncomeAndExpense from './components/IncomeAndExpense.vue';
import TransactionsList from './components/TransactionsList.vue';
</script>

<template>
  <section class="d-flex flex-column ga-3">
    <Header />
    <BalanceData />
    <IncomeAndExpense />
    <TransactionsList />
  </section>
</template>

<style scoped>
</style>
