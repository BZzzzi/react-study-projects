// 정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어보자.
// 직원들 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한 달 월급을 계산
// 정직원은 시간당 10,000원
// 파트타임 직원은 시간당 8,000원

class Payroll {
  constructor(name, departName, workingHours, payRate) {
    this.name = name;
    this.departName = departName;
    this.workingHours = workingHours;
    this.payRate = payRate;
  }
  pay() {
    return this.workingHours * this.payRate;
  }
}

class FullTime extends Payroll {
  static PAY_RATE = 10000;
  constructor(name, departName, workingHours) {
    super(name, departName, workingHours, FullTime.PAY_RATE);
  }
}

class PartTime extends Payroll {
  static PAY_RATE = 8000;
  constructor(name, departName, workingHours) {
    super(name, departName, workingHours, PartTime.PAY_RATE);
  }
}

const employee1 = new FullTime("a", "a부서", 200);
console.log(employee1.pay());

const employee2 = new PartTime("b", "b부서", 200);
console.log(employee2.pay());
