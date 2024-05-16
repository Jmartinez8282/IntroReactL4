import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Counter from "./components/Counter/Counter";
import ListGroup from "./components/ListGroup/ListGroup";
import MyuseStateExample from "./components/MyuseStateExample";
import { BsCalendarDateFill } from "react-icons/bs";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let students = [
    "Mr.Garby",
    "Jacqueline",
    "Blake",
    "Denise",
    "Aaron",
    "Principal Oshaughnessy",
    "Timothy",
  ];
  const cars = [
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "BMW",
    "Mercedes-Benz",
    "Audi",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleShowAlert = () => {
   setAlertVisible(!alertVisible)
  };
  const handleClose = () => {
   setAlertVisible(!alertVisible)
  };

const handleClick= () => {
  setIsVisible(true);
  console.log(isVisible);
}
let count = 0;
const handleAgainClick = () => {
  count++
  console.log(count)
}

  const [alertVisible, setAlertVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // const [firstName, setFirstName] = useState("Jose");
  // const [lastName, setLastName] = useState("Martinez");

  // const fullName = firstName + " " + lastName;

  //use a useState and pass it in an object as the intial state

  const [person, setPerson] = useState({
    firstName: 'Jose',
    lastName: 'Martinez'
  })

  // return <div><Message/></div>
  return (
    <>
      <div>
        <BsCalendarDateFill color="red" size={80} />
    {alertVisible ? <Alert onClose={handleClose}>Passing in text as a child Alert!</Alert> : null}
        <Button onClickFunction={handleAgainClick}>Count Example</Button><span>{count}</span>
        <Button color="secondary" onClickFunction={handleShowAlert}>
          Alert Button
        </Button>
        <Button color="warning" onClickFunction={handleClick}>
          Visible Button
        </Button>
        <Button color="info" onClickFunction={handleClick}>
        fourth button
        </Button> {person.firstName} {person.lastName}
        <Counter />
        <ListGroup
          onSelectedItem={handleSelectItem}
          items={items}
          heading="Cities"
        />
        <ListGroup
          onSelectedItem={handleSelectItem}
          items={students}
          heading="Students List"
        />
        <ListGroup
          onSelectedItem={handleSelectItem}
          items={cars}
          heading="List of Cars"
        />
      </div>

      <div>
        <MyuseStateExample />
      </div>
    </>
  );
}
export default App;
