import Alert from "./components/Alert";
import Button from "./components/Button";
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

  const handleSelectItem = (item:string) => {
    console.log(item);
  }

  const handleClick = () => {
    console.log("Clicked from our helper function")
  }

  // return <div><Message/></div>
  return (
    <>
      <div>
      <BsCalendarDateFill  color="red" size={80}/>
        <Alert>
          

          Passing in text as a child Alert!
          
        </Alert>
        <Button onClickFunction={handleClick}>One Button</Button>
        <Button color="secondary" onClickFunction={handleClick}>Two Button</Button>
        <Button color="warning" onClickFunction={handleClick}>Tres Button</Button>
        <ListGroup onSelectedItem={handleSelectItem} items={items} heading="Cities" />
        <ListGroup onSelectedItem={handleSelectItem} items={students}  heading="Students List" />
        <ListGroup onSelectedItem={handleSelectItem} items={cars}  heading="List of Cars" />
      </div>

      <div>
        <MyuseStateExample />
      </div>
    </>
  );
}
export default App;
