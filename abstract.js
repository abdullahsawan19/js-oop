class SystemUser {
  constructor(name, email) {
    if (this.constructor === SystemUser) {
      throw new Error("can't instantiate abstract class SystemUser");
    }
    this.name = name;
    this.email = email;
  }
  login() {
    console.log(`Logged in as${this.name}`);
  }

  accessDashboard() {
    throw new Error("should be implemented by subclasses");
  }
}

class Dentist extends SystemUser {
  constructor(name, email, specialization) {
    super(name, email);
    this.specialization = specialization;
  }
  accessDashboard() {
    console.log(
      `Doctor is : ${this.name}. Specialization is :${this.specialization}.`,
    );
  }
}

class Receptionist extends SystemUser {
  constructor(name, email, shift) {
    super(name, email);
    this.shift = shift;
  }

  accessDashboard() {
    console.log(`Welcome :${this.name}. This is your shift :${this.shift}.`);
  }
}

const doctorAli = new Dentist("ALi", "ali@clinic.com", "hh");
doctorAli.login();
doctorAli.accessDashboard();
// console.log(doctorAli);

const receptionistMona = new Receptionist(
  "Mona",
  "mona@clinic.com",
  "Morining shift",
);
receptionistMona.login();
receptionistMona.accessDashboard();
// console.log(receptionistMona);
