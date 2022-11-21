import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ContactsList from "./components/ContactsList";
import ContactsAdd from "./components/ContactsAdd";
import ContactsView from "./components/ContactsView";
import "./styles/styles.css";

export default function App() {
  const [contacts, setContacts] = useState([]);

  //TODO: Load all contacts on useEffect when component first renders
  // use fetch to import the contacts data and make it the use state.
  // i have a feeling fetch will not work unless its an external json file i will finsh the fetch syntax then try async method.

  // useEffect(() => {
  //  renderContacts
  // }, []);

  // const renderContacts =
  // fetch("http://localhost:3000/contacts").
  //     then(response => {
  //      if (response.ok)
  //       return response.json();
  //   })
  //   throw response;
  // }

  useEffect(() => {
    renderContacts();
  }, []);

  const renderContacts = async () => {
    const data = await fetch("http://localhost:3000/contacts");
    const contacts = await data.json();
    setContacts(contacts);
  };

  //will make a const here that renders the contacts via async. But i still dont know how to render from a local file

  return (
    <>
      <nav>
        <h2>Menu</h2>
        <ul>
          {/* TODO: Make these links */}
          <li>
            <Link to="http://localhost:3000/contacts">Contacts List</Link>
          </li>
          <li>Add New Contact</li>
        </ul>
      </nav>
      <main>
        <Routes>{/* TODO: Add routes here  */}</Routes>
      </main>
    </>
  );
}
