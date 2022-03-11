// A list of contact information stored in JSON format
let contact_list = [
  {
    id: "bda557bf-9c29-44e0-af22-cc62d1c8e76f",
    first_name: "Orion",
    last_name: "Qin",
    phone_number: "9193086189",
    email: "xiaolei_qin@outlook.com",
  },
  {
    id: "b1b1117c-6fb6-472f-87cd-9061a7db55fa",
    first_name: "John",
    last_name: "Doe",
    phone_number: "1234567890",
    email: "abc@outlook.com",
  },
  {
    id: "364136bc-38b2-449f-8e77-e04bafa0bd3b",
    first_name: "Jane",
    last_name: "Doe",
    phone_number: "0987654321",
    email: "cba@gmail.com",
  },
  {
    id: "c8614398-9128-4698-8f4f-2cf7f1250e87",
    first_name: "Sam",
    last_name: "W",
    phone_number: "333333333",
    email: "sam@gmail.com",
  },
  {
    id: "cce345c1-2dbd-4bc3-ac56-66afb48d82e5",
    first_name: "Dan",
    last_name: "Lee",
    phone_number: "111111111",
    email: "dl@123.com",
  },
  {
    id: "87e2520b-2a97-4a3b-81be-8ce068d8d550",
    first_name: "Aaron",
    last_name: "Johnson",
    phone_number: "222222222",
    email: "ajonh@yahoo.com",
  },
  {
    id: "d63dd91f-1c62-49fd-892c-6140aeecec89",
    first_name: "Molly",
    last_name: "",
    phone_number: "000000000",
    email: "molly@ncsu.edu",
  },
];

// Get the whole contact list
export function getContacts() {
  // sort the array based on their name
  contact_list.sort((a, b) => {
    const lastA = a.last_name.toLowerCase();
    const lastB = b.last_name.toLowerCase();
    const firstA = a.first_name.toLowerCase();
    const firstB = b.last_name.toLowerCase();

    if (lastA === "" && lastB !== "") {
      // Compare first name to last name if one of the contact does not have a last name
      if (firstA < lastB) {
        return -1;
      }
      if (firstA > lastB) {
        return 1;
      }
    }

    if (lastB === "" && lastA !== "") {
      if (lastA < firstB) {
        return -1;
      }
      if (lastA > firstB) {
        return 1;
      }
    }

    // Compare last names first
    if (lastA < lastB) {
      return -1;
    }
    if (lastA > lastB) {
      return 1;
    }
    // If they have same last name, compare first name instead
    if (firstA < firstB) {
      return -1;
    }
    if (firstA > firstB) {
      return 1;
    }
    return 0;
  });
  return contact_list;
}

// Set the contacts to be contact list
export function setContacts(contacts) {
  contact_list = contacts;
  return contact_list;
}

// Get the index of a certain contact
export function getIndex(contact) {
  return contact_list.indexOf(contact);
}

// Get the contact information based on UUID
export function getContactInfo(uuid) {
  return contact_list.find((contact) => contact.id === uuid);
}
