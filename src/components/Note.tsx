import { FC } from "react";

type NoteProps = {
  note: {
    id: number,
    content: string,
  },
  handleClick: (id: number)=>void,
};

const Note: FC<NoteProps> = ({note, handleClick}) => {

  return (
    <li className="crud__note" id={(note.id).toString()}>
      <p className="crud__note_content">{note.content}</p>
      <button className="crud__note_btn btn" onClick={() => {handleClick(note.id)}} />
    </li>
  );
}

export default Note;