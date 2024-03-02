import { FC } from "react";
import Note from "./Note";

type ListProps = {
  list: {
    id: number,
    content: string,
  }[],
  handleClick: (id: number)=>void,
};

const List: FC<ListProps> = ({list, handleClick}) => {

  return (
    <ul className="list-note">
      {list.map(item => (
        <Note note={item} handleClick={handleClick} key={item.id} />
      ))}
    </ul>
  );
}

export default List;