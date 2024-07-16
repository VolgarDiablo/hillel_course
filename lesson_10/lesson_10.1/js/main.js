const User = {
  name: "Alex",
  age: 36,
  residence: "USA",

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Residence: ${this.location}`;
  },

  displayInfo() {
    console.log(this.getInfo());
  },
};

User.displayInfo();
