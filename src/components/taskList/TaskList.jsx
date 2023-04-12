import axios from "axios";
import { RiDeleteBack2Fill } from "react-icons/ri";

const TaskList = ({ getTask, task }) => {
  const deleteTask = async (id) => {
    const url = "https://63f316fd864fb1d6000f07db.mockapi.io/api/users";
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTask();
  };
  return (
    <div>
      {task.map((item) => {
        const { id, task, date } = item;
        return (
          <div className="bg-warning mt-2 d-flex justify-content-between rounded-2 p-2">
            <div>
              <h4>{task}</h4>
              <p>{date}</p>
            </div>
            <div>
              <RiDeleteBack2Fill
                onClick={() => deleteTask(id)}
                style={{
                  cursor: "pointer",
                  marginRight: "20px",
                  fontSize: "2rem",
                  boxShadow: "3px 3px 5px green",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
