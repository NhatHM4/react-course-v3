import { useState } from "react";
import data from "./data";
import Person from "./Person";

const App = () => {
  console.log(data);
  const [list, setListPerson] = useState(data);
  return (
    <>
      List Person
      { list &&
        list.map((person) => {
          // console.log(person)
          return <ul key={person.id}>
            <Person person={person}/>
          </ul>;
        })}
        <button onClick={()=>{setListPerson(null)}}>Clear All</button>
    </>
  );
};
export default App;
