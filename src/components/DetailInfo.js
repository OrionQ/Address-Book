// Form Detail Template for editing purpose
export default function DisplayInfo(props) {
  let detail = props.data;

  return (
    <div>
      {/* display the 4 fields of information */}
      {/* First Name */}
      <div className="mb-4">
        <label className="input-label">First Name:</label>
        <input
          className="input-box"
          id="firstname"
          type="text"
          value={detail.first_name}
          onChange={(e) => {
            e.persist();
            props.setDetail((detail) => ({
              ...detail,
              first_name: e.target.value,
            }));
          }}
          placeholder="First Name"
        />
      </div>
      {/* Last Name */}
      <div className="mb-8">
        <label className="input-label">Last Name:</label>
        <input
          className="input-box"
          id="lastname"
          type="text"
          value={detail.last_name}
          onChange={(e) => {
            e.persist();
            props.setDetail((detail) => ({
              ...detail,
              last_name: e.target.value,
            }));
          }}
          placeholder="Last Name"
        />
      </div>
      {/* Phone Number */}
      <div className="mb-4">
        <label className="input-label">Phone Number:</label>
        <input
          className={`input-box ${
            detail.phone_number.length !== 10 ? "border-red" : ""
          }`}
          id="phone"
          type="tel"
          value={detail.phone_number}
          onChange={(e) => {
            e.persist();
            props.setDetail((detail) => ({
              ...detail,
              phone_number: e.target.value,
            }));
          }}
          placeholder="Phone Number"
        />
        {detail.phone_number.length !== 10 || isNaN(detail.phone) ? (
          <p class="text-red text-xs italic leading-tight lg:ml-36 md:ml-24 sm:ml-0">
            Make sure it is a 10-digit number.
          </p>
        ) : (
          ""
        )}
      </div>
      {/* Email Addres */}
      <div className="mb-8">
        <label className="input-label">Email Address:</label>
        <input
          className="input-box"
          id="email"
          type="email"
          value={detail.email}
          onChange={(e) => {
            e.persist();
            props.setDetail((detail) => ({
              ...detail,
              email: e.target.value,
            }));
          }}
          placeholder="Email Address"
        />
      </div>
    </div>
  );
}
