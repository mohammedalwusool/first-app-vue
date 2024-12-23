<template>
  <div class="editemployee">
    <h1>edit employee</h1>
    <div class="container mt-5 form-container">
      <form @submit.prevent="updateEmployee">
        <div class="row mb-3">
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Name"
              v-model="employee.name"
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
              v-model="employee.position"
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
              v-model="employee.department"
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
              v-model="employee.email"
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
              v-model="employee.salary"
              required
            />
          </div>
        </div>
        <div class="row mb-3 justify-content-center">
          <div class="col-sm-6">
            <button type="submit" class="btn btn-primary w-100">
              Update Employee
            </button>
          </div>
          <div class="col-sm-1"></div>
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
  name: 'edit-employee',
  data() {
    return {
      employee: {
        id: 0,
        name: '',
        position: '',
        department: '',
        email: '',
        salary: 0,
        status: true,
      },
    };
  },
  created() {
    this.fetchEmployeeData();
  },
  methods: {
    isValidEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email);
    },
    fetchEmployeeData() {
      const employeeId = parseInt(this.$route.params.id);
      this.employee =
        globalStore.employees.find((emp) => emp.id === employeeId) ||
        this.employee;
    },
    updateEmployee() {
      const employeeId = parseInt(this.$route.params.id);
      const index = globalStore.employees.findIndex(
        (emp) => emp.id === employeeId
      );
      if (index !== -1) {
        globalStore.employees[index] = this.employee;
        console.log('Employee updated:', globalStore.employees[index]);
        this.$router.push('/dashboard');
      } else {
        alert('Eror during updates');
      }
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
