import "./PersonsList.css";

const PersonsList = (props) => {
  return (
    <ul className="persons-list">
      {props.persons.map((person) => (
        <li key={person.id}>
          {person.name} - {person.age} років
        </li>
      ))}
    </ul>
  );
};

export default PersonsList;
