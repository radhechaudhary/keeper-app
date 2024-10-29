import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export default function note(props) {
  return (
    <div className="note">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.deleteNote(props.id);
        }}
      >
        <DeleteIcon/>
      </button>
    </div>
  );
}
