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


  employeeClockOut(id, name, thumbPrint) {
    let list = this.attendanceList;
    for (let employee of list) {
      if (id === employee.id && thumbPrint === employee.thumbPrint) {
        return id + ' clocked out';
      }
    }
  }


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




class Manager extends employee {
  constructor(id, thumbPrint, employeeType) {
    super(id, thumbPrint);
    this.userType = 'manager';
  }
}
class Associate extends employee {
  constructor(id, thumbPrint, employeeType) {
    super(id, thumbPrint);
    this.userType = 'associate';
  }
}
