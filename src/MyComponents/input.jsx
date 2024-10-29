import React from "react";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function Input(props) {
  const [note, setValues] = useState({ title: "", content: "" });
  function EventHandle(event) {
    const { value, name } = event.target;
    console.log(name)
    setValues(() => {
      return {
        ...note,
        [name]: value,
      };
    });
  }

  function add(){
    if(note.title!=="" &&note.content!==""){
        setValues({ title: "", content: "" })
        props.add(note)}
  }

  const [expandValue, setExpand]=useState(false);
  function expand(){
    setExpand(true)
  }
  const style = { fontWeight: "bolder", fontSize: "25px" };

  return (
    <div className="input-box">
        {expandValue===true?
      <input className="input"
        type="text"
        placeholder="Title"
        style={style}
        name="title"
        value={note.title}
        onChange={EventHandle}
      />:null}
      <textarea className="input"
        name="content"
        placeholder="Take a note.."
        rows={expandValue===true?3:1}
        value={note.content}
        onFocus={expand}
        onChange={EventHandle}
      />
      {expandValue===true?
      <Zoom in={true}>
      <Fab
      type="submit"
      onClick={add}
    >
      <AddIcon/>
    </Fab></Zoom>:null}
    </div>
  );
}
export default Input;
