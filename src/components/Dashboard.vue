<template>
  <div id="dashboard-app">
    <h1>dashboard</h1>
    <table class="table table-striped table-bordered">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
          <th>View</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee">
          <td>{{ employee.id }}</td>
          <td>{{ employee.name }}</td>
          <td class="text-center">
            <span @click="toggleStatus(employee)" style="cursor: pointer">
              {{ employee.status ? '✔️' : '❌' }}
            </span>
          </td>
          <td class="text-center">
            <router-link :to="`/viewemployee/${employee.id}`" class="view-link">
              <i class="bi bi-eye"></i>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <button @click="goNewemployee" class="btn rounded-circle floating-button">
    <i class="bi bi-plus"></i>
  </button>
</template>

<script>
import { globalStore } from '../store/globalStore.js';
import { computed } from 'vue';
export default {
  name: 'dashboard-app',
  setup() {
    const employees = computed(() => globalStore.employees);
    const toggleStatus = (employee) => {
      employee.status = !employee.status;
    };
    console.log(employees);
    return {
      employees,
      toggleStatus,
    };
  },
  methods: {
    goNewemployee() {
      this.$router.push('/newemployee');
    },
  },
};
</script>
