import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { getContacts } from "../components/ListData";
import Pagination from "../components/Pagination";
import ContactCard from "../components/ContactCard";

let pageLength = 5;

// The contact listing page aka the homepage
export default function Home() {
  const [contact_list, setContact] = useState(getContacts());
  const [filtered, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredContact = contact_list.filter(
    (filteredContact) =>
      filtered === "" ||
      filteredContact.first_name
        .toLowerCase()
        .includes(filtered.toLowerCase()) ||
      filteredContact.last_name.toLowerCase().includes(filtered.toLowerCase())
  );

  const currentList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageLength;
    const lastPageIndex = firstPageIndex + pageLength;
    return filteredContact.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredContact]);

  return (
    <div>
      <div className="relative">
        <form>
          <div className="">
            {/* render the search bar and the add new contact button */}
            <input
              onChange={(e) => {
                setFilter(e.target.value);
                setCurrentPage(1);
              }}
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
            {/* display each contact in breif with an map function (after filtering) */}
            <div className="block">
              {currentList.map((contact, i) => {
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
        <Pagination
          className="w-full flex justify-center"
          currentPage={currentPage}
          totalCount={filteredContact.length}
          pageSize={pageLength}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}
