import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./contacts.js";
// const argv = require("yargs").argv;

// listContacts().then(console.log);

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.log(allContacts);

    case "get":
      const getById = await getContactById(id);
      return console.log(getById);

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction({ id: "e6ywwRe4jcqxXfCZOj_1e", action: "get" });
