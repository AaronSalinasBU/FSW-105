const employees = [ ];

function Employee(name, job, salary, status){
    this.name = name;
    this.job = job;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function(){
        return `Name: ${name},Job Title: ${job}, Salary: ${salary}, Status: ${status}`
    }
}

const newEmployeeOne = new Employee("Mark Anthony", "Manager", "70k", "Full Time")
const newEmployeeTwo = new Employee("Edger Poe", "Supervisior", "50k", "Contract")
const newEmployeeThree = new Employee("Andrew William", "Clerk", "25k", "Part Time")

newEmployeeOne.printEmployeeForm()
newEmployeeTwo.printEmployeeForm()
newEmployeeThree.printEmployeeForm()

employees.push(newEmployeeOne, newEmployeeTwo, newEmployeeThree)
console.log(employees)