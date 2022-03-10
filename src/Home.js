import ContactCard from "./ContactCard";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { getContacts } from "./ListData";

export default function Home() {
  const [contact_list, setContact] = useState(getContacts());

  return (
    <div>
      <div className="relative">
        <NavLink to="/create-profile">
          <button className="rounded-xl text-primary bg-button p-3 lg:px-64 text-lg mt-4 sm:px-20 hover:opacity-80 duration-200">
            Add a New Contact
          </button>
        </NavLink>

        <div>
          <div className="block">
            {contact_list.map((contact, i) => {
              return <ContactCard key={i} data={contact} onClick={(contact_list) => setContact(contact_list)}/>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
