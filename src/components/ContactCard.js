import { useState } from "react";
import { Link } from "react-router-dom";
import { getContacts, setContacts, getIndex } from "./ListData";

// Delete the contact from the contact list by its index
function deleteContact(index) {
  return setContacts(
    getContacts().filter((contact) => contact !== getContacts()[index])
  );
}

// Render the Contact card with in two different views
export default function ContactCard(props) {
  const contact = props.data;
  const [expand, setExpand] = useState(false); // if the contact card is selected, expand more information
  const [pop, setPop] = useState(false);
  return (
    <div name="contact card">
      <div
        onClick={() => setExpand(!expand)}
        className={expand ? "expand-card" : "unexpand-card"}
      >
        <img
          className={expand ? "expand-image" : "unexpand-image"}
          src="./default-user.png"
          alt="Profile-pic"
        />
        {/* get the profile picture (currently only have default) */}
        <div className={expand ? "expand-text-area" : "unexpand-text-area"}>
          <div
            className={
              expand
                ? "font-bold text-3xl mb-2 duration-500"
                : "space-y-0.5 text-2xl text-primary font-bold duration-500"
            }
          >
            {/* render first name, last name, phone number, email(if selected) */}
            {contact.first_name + " " + contact.last_name}
            {expand ? (
              <div>
                <p className="text-primary font-medium text-xl p-2 duration-200">
                  {contact.phone_number}
                </p>
                <p className="text-primary font-medium text-xl p-2 duration-200">
                  {contact.email}
                </p>

                {/* options to edit or delete this contact */}
                <Link to={`/edit-profile/${contact.id}`}>
                  <button className="bg-white text-button border-2 border-button rounded-xl px-4 p-2 mt-2 text-xl hover:bg-hover duration-200 mr-4">
                    Edit
                  </button>
                </Link>

                <button
                  onClick={() => setPop(true)}
                  className="text-red rounded-lg p-2 mt-2 text-xl hover:bg-hover duration-200 ml-4"
                >
                  Delete
                </button>
              </div>
            ) : (
              <p className="text-secondary font-medium duration-200">
                {contact.phone_number}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Modal pop-up message */}

      {pop ? (
        <div className="main-modal">
          <div className="position">
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="modal-box">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-xl leading-6 font-medium text-primary"
                      id="modal-title"
                    >
                      Delete Contact
                    </h3>
                    <div className="mt-2">
                      <p className="text-md text-primary">
                        Are you sure you want to delete "
                        {contact.first_name + " " + contact.last_name}" from
                        your contact list?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                {/* Confirm deleting contact */}
                <Link to="/">
                  <button
                    type="button"
                    onClick={() => {
                      props.onClick(deleteContact(getIndex(contact)));
                      setPop(false);
                    }}
                    className="modal-delete-button"
                  >
                    Delete
                  </button>
                </Link>
                <button
                  type="button"
                  onClick={() => setPop(false)}
                  className="modal-cancel-button"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : undefined}
    </div>
  );
}
