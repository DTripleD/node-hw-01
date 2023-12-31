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
      return console.table(allContacts);

    case "get":
      const getById = await getContactById(id);
      return console.log(getById);

    case "add":
      const add = await addContact(name, email, phone);
      return console.log(add);

    case "remove":
      const remove = await removeContact(id);
      return console.log(remove);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
