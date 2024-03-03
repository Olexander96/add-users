import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import PersonsList from "./components/PersonsList/PersonsList";
import Modal from "./components/Modal/Modal";

function App() {
  const [modalActive, setModalActive] = useState(true);
  const [modalError, setModalError] = useState("");

  const [personsList, setPersonsList] = useState([
    // { name: "Caня", age: 28, id: 1 },
  ]);

  const setNewPersonHandler = (person) => {
    setPersonsList([
      { ...person, id: personsList[0] ? personsList[0].id + 1 : 1 },
      ...personsList,
    ]);
  };

  const closeModalWindowHandler = () => {
    setModalActive(false);
  };

  const setErrorHandler = (message) => {
    setModalError(message);
  };

  const showModalWindowHandler = () => {
    setModalActive(true);
  };

  return (
    <div className="App">
      <Form
        setNewPerson={setNewPersonHandler}
        showModal={showModalWindowHandler}
        setError={setErrorHandler}
      />
      <PersonsList persons={personsList} />
      {modalActive && (
        <Modal error={modalError} closeModal={closeModalWindowHandler} />
      )}
    </div>
  );
}

export default App;
