"use strict";
class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}
let x = new Contact("Snoopy", "snoopy@home.com", "313-313-3113", "my dog");
//taking objects and storing them in x
class AddressBook {
    constructor() {
        this.contacts = [
            new Contact("Snoopy", "snoopy@home.com", "313-313-3113", "my dog"),
            new Contact("Porkchop", "porkchop@home.com", "313-399-3113", "a cool friend")
        ];
    }
    add(info) {
        this.contacts.push(info);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    print() {
        for (let i = 0; i < this.contacts.length; i++) {
            console.log(`Index: ${i}, Name: ${this.contacts[i].name}, Email: ${this.contacts[i].email}, Phone: ${this.contacts[i].phone}, Relation: ${this.contacts[i].relation}`);
        }
    }
}

const book = new AddressBook();
while (true) {
    let choice = prompt("Add, Delete, Print, or Quit?");
    if (choice === "Quit") {
        console.log("Goodbye.");
        break;
    } else if (choice === "Print") {
        book.print();
    } else if (choice === "Delete") {
        let index = prompt("Index to delete?");
        book.deleteAt(prompt("Index to delete?"));
    } else if (choice === "Add") {
        book.add(new Contact(
            prompt("Enter a name."),
            prompt("Enter an email."),
            prompt("Enter a phone number."),
            prompt("Enter a relation.")
        ));
    }
}