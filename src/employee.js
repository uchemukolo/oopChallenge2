class Employee {
  constructor(id, name, thumbPrint, employeeType, ) {
    this.id = id;
    this.name = name;
    this.thumbPrint = thumbPrint;
    this.attendanceStatus = false;
    this.numEmployees = 0;
    this.attendanceList = [];
    this.employeeType = '';
  }

// Abstraction and Encapsulation because it uses inheritance, methods, and properties to show model
employeeClockOut(id, name, thumbPrint) {
    let list = this.attendanceList;
    for (let employee of list) {
      if (id === employee.id && thumbPrint === employee.thumbPrint) {
        return id + ' clocked out';
      }
    }
  }

// Abstraction and Encapsulation because it uses inheritance, methods, and properties to show model
  employeeClockIn(id, name, thumbPrint) {
    let list = this.attendanceList;
    for (let employee of list) {
      if (id === employee.id && thumbPrint === employee.thumbPrint) {
        employee.clockInStatus = true;
        return id + ' clocked in';
      }
    }
  }

  showAttendanceList() {
    console.log(this.attendanceList);
  }
  showNumEmployees() {
    console.log(this.numEmployees);
  }
}

//Inheritance because the class Manager inherits characteristics from the parent class Employee)
class Manager extends Employee {
  constructor(id, thumbPrint, employeeType) {
    super(id, thumbPrint);
    this.employeeType = 'manager';
  }
}
//Inheritance because the class Associate inherits characteristics from the parent class Employee)

class Associate extends Employee {
  constructor(id, thumbPrint, employeeType) {
    super(id, thumbPrint);
    this.employeeType = 'associate';
  }
}
