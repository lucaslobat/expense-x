<template>
  <div class="d-flex align-center">
    <div class="d-flex flex-column ga-2 mt-8 w-100">
      <div class="d-flex justify-space-between">
        <span class="text-h5 font-weight-bold">History</span>
        <v-dialog v-model="isDialogOpen" max-width="400">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn
              v-bind="activatorProps"
              icon="mdi-plus"
              density="comfortable"
              :ripple="false"
              color="#00c6cf"
            />
          </template>

          <template v-slot:default>
            <v-card title="Add new expense" class="pa-4">
              <v-form
                v-model="form"
                @submit.prevent="submitForm"
                fast-fail
                class="pa-4 d-flex flex-column ga-4"
              >
                <v-text-field
                  v-model="expenseInputData.description"
                  :rules="expenseDescriptionRules"
                  label="Expense description"
                  variant="outlined"
                  dirty
                />

                <v-text-field
                  v-model="expenseInputData.price"
                  :rules="expensePriceRules"
                  label="Expense price"
                  prefix="€"
                  variant="outlined"
                  dirty
                />
                <v-card-actions>
                  <v-btn
                    :disabled="!form"
                    :ripple="false"
                    type="submit"
                    density="comfortable"
                    color="#00c6cf"
                    >Submit</v-btn
                  >
                </v-card-actions>
              </v-form>
            </v-card>
          </template>
        </v-dialog>
      </div>

      <v-divider color="#00c6cf" :opacity="50" />
    </div>
  </div>

  <v-list class="d-flex flex-column ga-1" bg-color="#1a1a1a">
    <v-list-item
      v-if="transactions.length > 0"
      v-for="transaction in transactions"
      :key="transaction"
    >
      <v-card
        class="pa-4"
        :rounded="1"
        :class="{
          expense__border: transaction.type === 'expense',
          income__border: transaction.type === 'income',
        }"
      >
        <div class="d-flex justify-space-between transaction__data">
          <span> {{ transaction.description }}</span>
          <span> {{ transaction.price }} €</span>
        </div>
      </v-card>
    </v-list-item>
    <v-alert
      v-else
      text="You haven't added any expenses yet"
      type="info"
      variant="tonal"
      color="#00c6cf"
    />
  </v-list>
</template>

<script setup>
import { ref } from 'vue';

const transactions = ref([]);
const form = ref(false);
const isDialogOpen = ref(false);
const expenseInputData = ref({
  description: '',
  price: null,
  type: 'expense',
});

const expenseDescriptionRules = ref([(v) => !!v || 'Description is required']);

const expensePriceRules = ref([
  (v) => !!v || 'Price is required',
  (v) => !isNaN(v) || 'Price must be a valid number',
]);

const submitForm = () => {
  if (form.value) {
    transactions.value.push(expenseInputData.value);
    expenseInputData.value = {
      description: '',
      price: null,
      type: 'expense',
    };
  }

  isDialogOpen.value = false;
};
</script>

<style scoped>
.expense__border {
  border-right: 0.5em solid #a63b00;
}

.income__border {
  border-right: 0.5em solid #8eed98;
}

.transaction__data{
  text-overflow:ellipsis;
}
</style>
