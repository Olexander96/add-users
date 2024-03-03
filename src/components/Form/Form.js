import {useState} from "react"
import "./Form.css";

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

    if (personName === '' && personAge === '') {
      props.showModal();
      props.setError('Введіть дані користувача!');
      return;

    } else if (personName === '') {
      props.showModal();
      props.setError("Введіть ім'я користувача!");
      return;
    } else if (personAge === '') {
      props.showModal();
      props.setError("Введіть вік користувача!");
      return;
    }
     else if ( Number(personAge) < 1) {
      props.showModal();
      props.setError('Вік користувача повинен бути > 0');
      return;
    } 
    
    const formData = {
      name: personName,
      age: Number(personAge),
    };

    props.setNewPerson(formData);
    setPersonName('');
    setPersonAge('')
    
  };
  
  return (
    <form className="form" onSubmit={ submitFormHandler }>
      <label>
        Ім'я
        <input type="text" name="name" onChange={setPersonNameHandler} value={personName}/>
      </label>

      <label>
        Вік
        <input type="number" name="age" onChange={setPersonAgeHandler} value={personAge}/>
      </label>

      <button type="submit">Додати користувача</button>
    </form>
  );
};

export default Form;
