import { useState } from "react";
import Button from "@material-ui/core/Button";
import Add from "@material-ui/icons/Add";
import ListComp from "./listComp";

const App = () => {
    const [inputList, setInputList] = useState("") // via setInputList we accsing the test type on the input field and via inpuList we assigning the setInputList data
    const [items, setItems] = useState([]); // here we initialy create an empty array, via setItems we are storing the values of the array in items

    const itemEvent = (event) => {
        setInputList(event.target.value) // here we taking the data of 
    };

    const listOfItems = () => { // It is an onClick function where, when we click on it at that time, tha data will be added.
        setItems((preVal) => { // at first preval is zero but after giving input to it it will be updated
            return [...preVal, inputList]; // here we returning the preiosuly stored values and and currently registered inputList values
        })
        setInputList(""); // here we clearing the setInputList data
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1> ToDo List </h1>
                    <input
                    type="text"
                    value={inputList} // without value attribute we can't use the setInputList
                    placeholder="Add an item"
                    onChange={itemEvent}
                    />
                    <Button className="newBtn" onClick={listOfItems}>
                        <Add />
                    </Button>
                    <ol>
                        {items.map((val, index) => { // here we returning the values of items via map method
                            return <ListComp key={index} text={val} />;
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default App;