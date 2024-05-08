import { useState } from "react";




  

const ListGroup = () => {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [name,setName] = useState("David");


 

  // let selectedIndex = 0;

  // const arr = useState(0);

  // console.log(arr);

// console.log(useState(-1));

  //Event handler which is a function to handle an event
  // const handleClick = (e: MouseEvent) => {
  //   console.log(e.target.innerText);
  // };

  // items = [];

  // const updateIndex = () => {
  
  //   setSelectedIndex(index);
  //   console.log(selectedIndex);
  // }
  // const updateIndex = (index:any) => {
  //   setSelectedIndex(index);
  //   console.log(selectedIndex);
  //   console.log(index,"This is just the index");
  // }

  const getMessage = () => {
    return items.length == 0 ? <p>No Items found</p> : null;
  };

  return (
    //JSX we must have one parent element. Example div, Fragment or <></>

    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
          
        ))}
      </ul>
      <p>{name}</p>
      <button className="btn btn-primary" onClick={()=> setName("Neo")}>Update to New name</button>
    </>
  );
};

export default ListGroup;
