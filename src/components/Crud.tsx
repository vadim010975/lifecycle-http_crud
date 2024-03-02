import { useEffect, useState } from "react";
import List from "./List";
import Form from "./Form";
const _URL = "http://localhost:7070/notes";

const Crud = () => {

  const [list, setList] = useState([]);

  useEffect(() => {
    update();
  }, []);

  // const handleSubmit = (event: React.FormEvent) => {
    /* eslint-disable-next-line */
    const handleSubmit = async (event: any) => {
      event.preventDefault();
      const { target } = event;
      const content = target.elements.content.value;
      target.reset();
      await add(content);
      update();
    }

    const add = async (content: string) => {
      await fetch(_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: content,
        }),
      });
    }

    const update = async () => {
      const response = await fetch(_URL);
      const list = await response.json();
      setList(list);
    }

    const deleteNote = async (id: number) => {
      await fetch(_URL + `/${id}`, {
        method: "DELETE",
      });
    }

    const handleClick = async (id: number) => {
      await deleteNote(id);
      update();
    }

  return (

    <div className="crud">
      <div className="crud__header">
        <h1 className="crud__label">Notes</h1>
        <button className="crud__update_btn btn" onClick={()=>{update()}}></button>
      </div>
      <List list={list} handleClick={handleClick}/>
      <Form handleSubmit={handleSubmit}/>
    </div>
  );
}

export default Crud;