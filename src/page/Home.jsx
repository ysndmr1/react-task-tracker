import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Show Task Bar");
  const [task, setTask] = useState([]);
  const url = "https://63f316fd864fb1d6000f07db.mockapi.io/api/users";

  const toggle = () => {
    setIsOpen(!isOpen);
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar";
    setText(buttonText);
  };

  const getTask = async () => {
    const { data } = await axios(url);
    setTask(data);
  };

  useEffect(() => {
    getTask();
  }, []);
  return (
    <div className="mt-4 d-flex justify-content-center flex-column">
      <div className="text-center">
        <Button variant="success w-50 " onClick={() => toggle()}>
          {text}
        </Button>
      </div>

      {isOpen && <AddTask getTask={getTask} />}

      <TaskList task={task} getTask={getTask} />
    </div>
  );
};

export default Home;
