import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getContacts, setContacts, getIndex } from "./ListData";

function deleteContact(index) {
  return setContacts(
    getContacts().filter((contact) => contact !== getContacts()[index])
  );
}

export default function ContactCard(props) {
  const contact = props.data;
  const [expand, setExpand] = useState(false);
  const [pop, setPop] = useState(false);
  return (
    <div>
      <div
        onClick={() => setExpand(!expand)}
        className={
          expand
            ? "py-20 px-10 max-w-2xl rounded-xl lg:mx-auto bg-white shadow-md hover:shadow-xl duration-300 mx-8 my-4 ease-in-out"
            : "py-20 px-10 max-w-2xl rounded-xl lg:mx-auto bg-white shadow-md hover:shadow-xl duration-300 space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-5 mx-8 my-4 ease-in-out"
        }
      >
        <img
          className={
            expand
              ? "block mx-auto h-32 rounded-full pt-6 duration-500 ease-in-out"
              : "block mx-auto h-20 rounded-full sm:mx-0 sm:shrink-0 duration-500 ease-in-out"
          }
          src="./default-user.png"
          alt="Profile-pic"
        />
        <div
          className={
            expand
              ? "px-8 py-3 pb-10 duration-500"
              : "text-center space-y-2 lg:text-left duration-500"
          }
        >
          <div
            className={
              expand
                ? "font-bold text-3xl mb-2 duration-500"
                : "space-y-0.5 text-2xl text-primary font-bold duration-500"
            }
          >
            {contact.first_name}&nbsp;{contact.last_name}
            {expand ? (
              <div>
                <p className="text-primary font-medium text-xl p-2 duration-200">
                  {contact.phone_number}
                </p>
                <p className="text-primary font-medium text-xl p-2 duration-200">
                  {contact.email}
                </p>
                <NavLink to="/edit-profile">
                  <button className="bg-white text-button rounded-xl px-4 p-2 mt-2 text-xl hover:bg-hover duration-200 mr-4">
                    Edit
                  </button>
                </NavLink>

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
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
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
                <NavLink to="/">
                  <button
                    type="button"
                    onClick={() => {
                      props.onClick(deleteContact(getIndex(contact)));
                      setPop(false);
                    }}
                    className="w-full inline-flex justify-center rounded-xl border border-transparent shadow-sm px-4 py-2 bg-red text-base font-medium text-white hover:opacity-75 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm duration-200"
                  >
                    Delete
                  </button>
                </NavLink>
                <button
                  type="button"
                  onClick={() => setPop(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-xl border-3 border-primary px-4 py-2 bg-white text-base font-medium text-primary hover:bg-hover  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm duration-200"
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
