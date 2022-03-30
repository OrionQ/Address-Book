import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { getContacts, getContactInfo, getIndex } from "../components/ListData";
import DisplayInfo from "../components/DetailInfo";

// Update the contact information by sending the new details to the list
function UpdateInfo(idx, detail) {
  getContacts()[idx].first_name = detail.first_name;
  getContacts()[idx].last_name = detail.last_name;
  getContacts()[idx].phone_number = detail.phone_number;
  getContacts()[idx].email = detail.email;
}

// Render edit profile page
export default function EditProfile() {
  let params = useParams();
  let contactInfo = getContactInfo(params.profileID);
  const index = getIndex(contactInfo);
  const [detail, setDetail] = useState(contactInfo);

  return (
    <div>
      {/* the title of the page */}
      <div className="sub-title">
        Update {contactInfo.first_name}'s Contact Information
      </div>

      {/* the from is displayed in card format */}
      <form className="detail-form-card">
        <div>
          <img
            className="block mx-auto h-32 rounded-full pt-6 mb-6 -mt-6"
            src="/default-user.png"
            alt="Profile-pic"
          />
          <div className="px-8 py-3 pb-10">
            {/* all the fields are editable in DisplayedInfo */}
            <DisplayInfo data={detail} setDetail={setDetail} />
            {/* go back to main page */}
            <Link to="/">
              <button name="undo" className="cancel-button">
                Undo Changes
              </button>
            </Link>
            {/* update information if all fields are valid */}
            <Link to="/">
              <button
                name="update"
                disabled={(!detail.first_name && !detail.last_name) || !(detail.phone_number.length === 10)}
                onClick={() => UpdateInfo(index, detail)}
                className="submit-button"
              >
                Update
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
