import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getContacts } from "./ListData";

function SubmitContact(detail) {
  getContacts().push(detail);
}

export default function CreateProfile() {
  const [detail, setDetail] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
  });

  return (
    <div>
      <div className="block text-primary text-3xl mt-4">
        Create a New Contact
      </div>
      <form className="py-20 px-10 max-w-2xl rounded-xl lg:mx-auto bg-white shadow-md mx-8 my-4">
        <div>
          <img
            className="block mx-auto h-32 rounded-full pt-6 mb-6 -mt-6"
            src="./default-user.png"
            alt="Profile-pic"
          />
          <div className="px-8 py-3 pb-10">
            <div className="mb-4">
              <input
                className="shadow rounded border border-button w-fit py-2 px-3 text-primary leading-tight focus:outline-1 outline-secondary"
                id="firstname"
                type="text"
                value={detail.first_name}
                onChange={(e) => {
                  e.persist();
                  setDetail((detail) => ({
                    ...detail,
                    first_name: e.target.value,
                  }));
                }}
                placeholder="First Name"
              />
            </div>
            <div className="mb-8">
              <input
                className="shadow rounded border border-button w-fit py-2 px-3 text-primary leading-tight focus:outline-1 outline-secondary"
                id="lastname"
                type="text"
                value={detail.last_name}
                onChange={(e) => {
                  e.persist();
                  setDetail((detail) => ({
                    ...detail,
                    last_name: e.target.value,
                  }));
                }}
                placeholder="Last Name"
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow rounded border border-button w-fit py-2 px-3 text-primary leading-tight focus:outline-1 outline-secondary"
                id="phone"
                type="tel"
                value={detail.phone_number}
                onChange={(e) => {
                  e.persist();
                  setDetail((detail) => ({
                    ...detail,
                    phone_number: e.target.value,
                  }));
                }}
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-8">
              <input
                className="shadow rounded border border-button w-fit py-2 px-3 text-primary leading-tight focus:outline-1 outline-secondary"
                id="email"
                type="email"
                value={detail.email}
                onChange={(e) => {
                  e.persist();
                  setDetail((detail) => ({
                    ...detail,
                    email: e.target.value,
                  }));
                }}
                placeholder="Email Address"
              />
            </div>
            <NavLink to="/">
              <button className="bg-white text-secondary rounded-lg py-3 w-24 mt-2 text-xl hover:bg-hover duration-200 mx-6">
                Cancel
              </button>
            </NavLink>
            <NavLink to="/">
              <button
                onClick={() => SubmitContact(detail)}
                className="bg-primary text-white rounded-lg py-3 w-24 mt-2 text-xl hover:opacity-80 duration-200 mx-6"
              >
                Save
              </button>
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
}
