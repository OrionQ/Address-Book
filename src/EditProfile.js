import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { getContacts, getContactInfo, getIndex } from "./ListData";
import DisplayInfo from "./DetailInfo";

function UpdateInfo(idx, detail) {
  getContacts()[idx].first_name = detail.first_name;
  getContacts()[idx].last_name = detail.last_name;
  getContacts()[idx].phone_number = detail.phone_number;
  getContacts()[idx].email = detail.email;
}

export default function EditProfile() {
  let params = useParams();
  let contactInfo = getContactInfo(params.profileID);
  const index = getIndex(contactInfo);
  const [detail, setDetail] = useState(contactInfo);

  return (
    <div>
      <div className="sub-title">
        Update {contactInfo.first_name}'s Contact Information
      </div>
      <form className="detail-form-card">
        <div>
          <img
            className="block mx-auto h-32 rounded-full pt-6 mb-6 -mt-6"
            src="/default-user.png"
            alt="Profile-pic"
          />
          <div className="px-8 py-3 pb-10">
            <DisplayInfo data={detail} setDetail={setDetail} />
            <Link to="/">
              <button className="cancel-button">
                Undo Changes
              </button>
            </Link>
            <Link to="/">
              <button
                disabled={!detail.first_name && !detail.last_name}
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
