const ContactBook = {
  contacts: [
    {
      name: "Name Surname",
      phone: "+380995847962",
      email: "name@example.com",
    },
    {
      name: "FirstName SecondName",
      phone: "+380667193528",
      email: "firstname@example.com",
    },
  ],

  findContactByName(name) {
    return this.contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  },

  addContact(newContact) {
    if (newContact.name && newContact.phone && newContact.email) {
      const existingContact = this.findContactByName(newContact.name);
      if (existingContact) {
        console.log("Contact with this name already exists.");
      } else {
        this.contacts.push(newContact);
        console.log("Contact added successfully.");
      }
    } else {
      console.log("Invalid contact. Please provide name, phone, and email.");
    }
  },
};

ContactBook.addContact({
  name: "Roman Romanov",
  phone: "+380123123123",
  email: "roman@example.com",
});

const foundContact = ContactBook.findContactByName("Roman Romanov");
if (foundContact) {
  console.log(
    `Contact found: Name: ${foundContact.name}, Phone: ${foundContact.phone}, E-mail: ${foundContact.email}`
  );
} else {
  console.log("Contact not found");
}

console.log(ContactBook.contacts);
