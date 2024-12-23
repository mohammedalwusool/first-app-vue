<template>
  <div class="newemployee">
    <h1>Add new employees</h1>
    <div class="container mt-5 form-container">
      <h2 class="mb-4 text-center">Employee Information</h2>
      <form @submit.prevent="SaveEmployee">
        <div class="row mb-3">
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Name"
              v-model="name"
              required
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="position"
              placeholder="Position"
              v-model="position"
              required
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="department"
              placeholder="Department"
              v-model="department"
              required
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-sm-9">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email"
              v-model="email"
              required
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-sm-9">
            <input
              type="number"
              class="form-control"
              id="salary"
              placeholder="Salary"
              v-model="salary"
              required
            />
          </div>
        </div>
        <div class="row mb-3 justify-content-center">
          <div class="col-sm-5">
            <button type="submit" class="btn btn-primary w-100">
              Save Employee
            </button>
          </div>
          <div class="col-sm-1">
            <!-- Empty column for space between buttons -->
          </div>
          <div class="col-sm-5">
            <button
              class="btn btn-secondary w-100"
              onclick="window.history.back()"
            >
              Back
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { globalStore } from '../store/globalStore.js';
export default {
  name: 'new-employee',
  data() {
    return {
      id: 5,
      name: '',
      position: '',
      Department: '',
      Email: '',
      Salary: '',
    };
  },
  methods: {
    SaveEmployee() {
      const newEmployee = {
        id: globalStore.employees.length + 1,
        name: this.name,
        position: this.position,
        department: this.department,
        email: this.email,
        salary: this.salary,
        status: true,
      };
      globalStore.employees.push(newEmployee);
      console.log(globalStore.employees);
      this.resetForm();
    },
    resetForm() {
      this.name = '';
      this.position = '';
      this.department = '';
      this.email = '';
      this.salary = '';
    },
    isValidEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email);
    },
  },
};
</script>
