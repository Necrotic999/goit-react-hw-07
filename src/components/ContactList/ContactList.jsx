import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts, selectLoading } from "../../redux/contactsSlice";
import { selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  console.log(contacts);
  // const searchUser = contacts?.filter((contact) => {
  //   return contact?.name?.toLowerCase().includes(contactName?.toLowerCase());
  // });

  return (
    <>
      {loading && <p className={css.text}>Loading...</p>}
      <ul className={css.contacts_list}>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
