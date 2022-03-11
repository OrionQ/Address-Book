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
];

export function getContacts() {
  return contact_list;
}

export function setContacts(contacts) {
  contact_list = contacts;
  return contact_list;
}

export function getIndex(contact) {
  return contact_list.indexOf(contact);
}

export function getContactInfo(uuid) {
  return contact_list.find((contact) => contact.id === uuid);
}
