let contact_list = [
  {
    first_name: "Orion",
    last_name: "Qin",
    phone_number: "9193086189",
    email: "xiaolei_qin@outlook.com",
  },
  {
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
