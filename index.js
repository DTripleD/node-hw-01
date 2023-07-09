// import {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
// } from "./contacts.js";

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts.js");
const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.log(allContacts);

    case "get":
      const getById = await getContactById(id);
      return console.log(getById);

    case "add":
      const add = await addContact(name, email, phone);
      return add;

    case "remove":
      const remove = await removeContact(id);
      return remove;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
