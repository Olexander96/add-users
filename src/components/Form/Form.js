import {useState} from "react"
import "./Form.css";
import Button from "../UI/Button";

const Form = (props) => {

  const [personName, setPersonName] = useState('');
  const [personAge, setPersonAge] = useState('');

  const setPersonNameHandler = (event) => {
    setPersonName(event.target.value);
  }
  const setPersonAgeHandler = (event) => {
    setPersonAge(event.target.value);
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (personName.trim() === '' && personAge.trim() === '') {
      props.showModal();
      props.setError('Введіть дані користувача!');
      return;

    } else if (personName.trim() === '') {
      props.showModal();
      props.setError("Введіть ім'я користувача!");
      return;
    } else if (personAge.trim() === '') {
      props.showModal();
      props.setError("Введіть вік користувача!");
      return;
    }
     else if ( +personAge < 1) {
      props.showModal();
      props.setError('Вік користувача повинен бути > 0');
      return;
    } 
    
    const formData = {
      name: personName,
      age: +personAge,
    };

    props.setNewPerson(formData);
    setPersonName('');
    setPersonAge('');
    
  };
  
  return (
    <form className="form">
      <label>
        Ім'я
        <input type="text" name="name" onChange={setPersonNameHandler} value={personName}/>
      </label>

      <label>
        Вік
        <input type="number" name="age" onChange={setPersonAgeHandler} value={personAge}/>
      </label>

      <Button type="submit" onClick={submitFormHandler}>Додати користувача</Button>
    </form>
  );
};

export default Form;
