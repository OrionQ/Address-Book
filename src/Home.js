import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getContacts } from "./ListData";

export default function Home() {
  const [contact_list, setContact] = useState(getContacts());
  const [filtered, setFilter] = useState("");

  return (
    <div>
      <div className="relative">
        <form>
          <div className="">
            <input
              onChange={(e) => setFilter(e.target.value)}
              className="input-box rounded-xl h-full mx-2 p-3 w-64"
              placeholder="Search Contact By Name"
            />
            <Link to="/create-profile">
              <button className="rounded-xl text-primary bg-button p-2.5 lg:px-24 text-lg lg:ml-12 mt-4 sm:px-20 hover:opacity-70 duration-200">
                Add a New Contact
              </button>
            </Link>
          </div>

          <div>
            <div className="block">
              {contact_list
                .filter(
                  (filteredContact) =>
                    filtered === "" ||
                    filteredContact.first_name
                      .toLowerCase()
                      .includes(filtered.toLowerCase()) ||
                    filteredContact.last_name
                      .toLowerCase()
                      .includes(filtered.toLowerCase())
                )
                .map((contact, i) => {
                  return (
                    <ContactCard
                      key={i}
                      data={contact}
                      onClick={(contact_list) => setContact(contact_list)}
                    />
                  );
                })}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
