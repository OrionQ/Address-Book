import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import { getContacts } from "./ListData";
import DisplayInfo from "./DetailInfo";

function SubmitContact(detail) {
  getContacts().push(detail);
}

export default function CreateProfile() {
  const [detail, setDetail] = useState({
    id: uuid(),
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
  });

  return (
    <div>
      <div className="sub-title">Create a New Contact</div>
      <form className="detail-form-card">
        <div>
          <img
            className="block mx-auto h-32 rounded-full pt-6 mb-6 -mt-6"
            src="./default-user.png"
            alt="Profile-pic"
          />
          <div className="px-8 py-3 pb-10">
            <DisplayInfo data={detail} setDetail={setDetail} />
            <Link to="/">
              <button className="cancel-button w-24">
                Cancel
              </button>
            </Link>
            <Link to="/">
              <button
                disabled={!detail.first_name && !detail.last_name}
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
