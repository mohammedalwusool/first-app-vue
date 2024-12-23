import { reactive } from 'vue';

export const globalStore = reactive({
  employees: [
    {
      id: 1,
      name: 'John Smith',
      position: 'Software Engineer',
      department: 'IT',
      email: 'john.smith@example.com',
      salary: 3000,
      status: true,
    },
    {
      id: 2,
      name: 'Jane Doe',
      position: 'Product Manager',
      department: 'Marketing',
      email: 'jane.doe@example.com',
      salary: 8000,
      status: true,
    },
    {
      id: 3,
      name: 'Mike Johnson',
      position: 'Data Analyst',
      department: 'Analytics',
      email: 'mike.johnson@example.com',
      salary: 6000,
      status: false,
    },
    {
      id: 4,
      name: 'Emily Davis',
      position: 'HR Specialist',
      department: 'Human Resources',
      email: 'emily.davis@example.com',
      salary: 60000,
      status: true,
    },
    {
      id: 5,
      name: 'محمد حسين',
      position: 'مبرمج',
      department: 'الوصول',
      email: 'emily.davis@example.com',
      salary: 1000,
      status: true,
    },
  ],
  addEmployee(newEmployee) {
    const newId = this.employees.length + 1;
    newEmployee.id = newId;
    this.employees.push(newEmployee);
  },
});
