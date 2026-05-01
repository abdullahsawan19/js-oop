class Patient {
  constructor(patientName, patientAge) {
    this.name = patientName;
    this.age = patientAge;
  }
  bookAppointment() {
    console.log(`${this.name} has booked an appointment.`);
  }
}

const patient1 = new Patient("Ahmed", 25);
const patient2 = new Patient("Ali", 30);

patient1.bookAppointment();
patient2.bookAppointment();

console.log(patient1);
console.log(patient2);
