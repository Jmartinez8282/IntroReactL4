import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import MyuseStateExample from "./components/MyuseStateExample";

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

  // return <div><Message/></div>
  return (
    <>
      <div>
        <Alert>
          

          Passing in text as a child Alert!
          
        </Alert>
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
