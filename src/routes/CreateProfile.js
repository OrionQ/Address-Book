import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import { getContacts } from "../components/ListData";
import DisplayInfo from "../components/DetailInfo";

// Create and add the new contact info to the list
function SubmitContact(detail) {
  getContacts().push(detail);
}

// Render the creating contact page
export default function CreateProfile() {
  // initialize the default contact info
  const [detail, setDetail] = useState({
    id: uuid(),
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
  });

  return (
    <div>
      {/* the title of the page */}
      <div className="sub-title">Create a New Contact</div>
      {/* the from is displayed in card format */}
      <form className="detail-form-card">
        <div>
          <img
            className="block mx-auto h-32 rounded-full pt-6 mb-6 -mt-6"
            src="./default-user.png"
            alt="Profile-pic"
          />
          <div className="px-8 py-3 pb-10">
            {/* all the fields are editable in DisplayedInfo */}
            <DisplayInfo data={detail} setDetail={setDetail} />
            {/* go back to main page */}
            <Link to="/">
              <button name="Cancel" className="cancel-button w-24">
                Cancel
              </button>
            </Link>
            {/* create and save information if all fields are valid */}
            <Link to="/">
              <button
                name="Save"
                disabled={
                  (!detail.first_name && !detail.last_name) ||
                  !(detail.phone_number.length === 10)
                }
                onClick={() => SubmitContact(detail)}
                className="submit-button"
              >
                Save
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
