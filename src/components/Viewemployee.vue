<template>
  <div class="viewemployee">
    <div v-if="employee">
      <div class="container mt-5">
        <h1 class="text-center mb-4">View Employee</h1>

        <div v-if="employee" class="card">
          <div class="card-header bg-primary text-white">
            <h5 class="mb-0">Employee Details</h5>
          </div>
          <div class="card-body">
            <dl class="row">
              <dt class="col-sm-3"><strong>Name:</strong></dt>
              <dd class="col-sm-9">{{ employee.name }}</dd>

              <dt class="col-sm-3"><strong>Position:</strong></dt>
              <dd class="col-sm-9">{{ employee.position }}</dd>

              <dt class="col-sm-3"><strong>Department:</strong></dt>
              <dd class="col-sm-9">{{ employee.department }}</dd>

              <dt class="col-sm-3"><strong>Email:</strong></dt>
              <dd class="col-sm-9">{{ employee.email }}</dd>

              <dt class="col-sm-3"><strong>Salary:</strong></dt>
              <dd class="col-sm-9">${{ employee.salary }}</dd>
            </dl>
          </div>
          <div
            class="card-footer text-right d-flex justify-content-center gap-4"
          >
            <button class="btn btn-secondary" onclick="window.history.back()">
              Back
            </button>
            <button class="btn btn-danger" @click="deleteEmployee">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Employee not found</p>
    </div>
  </div>
  <button @click="goEditemployee" class="btn rounded-circle floating-button">
    <i class="bi bi-pencil"></i>
  </button>
</template>

<script>
import { globalStore } from '../store/globalStore.js';
export default {
  name: 'view-employee',
  data() {
    return {
      employee: null,
    };
  },
  created() {
    this.fetchEmployeeData();
  },
  methods: {
    goEditemployee() {
      const employeeId = this.employee.id;
      this.$router.push(`/editemployee/${employeeId}`);
    },
    fetchEmployeeData() {
      const employeeId = parseInt(this.$route.params.id);
      this.employee = globalStore.employees.find(
        (emp) => emp.id === employeeId
      );
    },
    deleteEmployee() {
      console.log('Delete button clicked');
      const employeeId = parseInt(this.$route.params.id);
      const index = globalStore.employees.findIndex(
        (emp) => emp.id === employeeId
      );
      if (index !== -1) {
        globalStore.employees.splice(index, 1);
        this.$router.go(-1);
      }
    },
  },
};
</script>
