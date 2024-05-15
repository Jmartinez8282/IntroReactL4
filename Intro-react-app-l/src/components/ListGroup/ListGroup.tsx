import { useState } from "react";
import styles from './ListGroup.module.css'

//Typescrip has a feature called interface
//using an interface we can define the shape of our objects
//{items: [], heading :string}
// interface ListProps {
//   heading: string
//   cars: string []
// }
interface ListProps {
  items: string []
  heading: string
  onSelectedItem:(item:string) => void
}

  

const ListGroup = ({items,heading,onSelectedItem}:ListProps) => {
  

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
      <h1>{heading}</h1>
      {getMessage()}
      <ul className={[styles.ListGroup,styles.container].join(' ')}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? styles['listGroupItem']
                : styles['listGroupItem']
            }
            key={index}
            onClick={() => {setSelectedIndex(index)
              onSelectedItem(item)
            }}
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
