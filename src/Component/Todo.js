import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
const Todo = () => {
    const [form, setForm] = useState({});
    const [data, setData] = useState([]);
    const [toggleBtn, setToggleBtn] = useState(true);
    const [iseditItem, setIsEditItem] = useState(null);
    console.log(data)
    const addData = () => {
      if (!form.project_name || !form.task_name) { // check if project_name and task_name fields are empty
        alert('please fill data')
      } else if (iseditItem !== null) { // check if editing an existing item
        setData(
          data.map((element) => {
            if (element.id === iseditItem) {
              return { ...element, project_name: form.project_name, task_name: form.task_name } // update project_name and task_name fields of edited item
            }
            return element;
          })
        )
        setForm({});
        setIsEditItem(null);
        setToggleBtn(true);
      } else { // adding a new item
        const inputData = { id: new Date().getTime().toString(), project_name: form.project_name, task_name: form.task_name }
        setData([...data, inputData]);
        setForm({});
      }
    }
    const removeItem = (index) => {
      const deleteditems = data.filter((element) => {
        return index !== element.id;
      });
      setData(deleteditems);
    }
    const editItem = (id) => {
      let newItem = data.find((element) => {
          return element.id === id;
      })
      console.log(newItem);
      setToggleBtn(false);
      setForm(newItem);
      setIsEditItem(id);
    }
  return (
    <div className="todo">
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField value={form.project_name} onChange={(e) => setForm({...form,project_name: e.target.value})} id="outlined-basic" label="Project Name" variant="outlined" />
          <TextField value={form.task_name} onChange={(e) => setForm({...form,task_name: e.target.value})} id="outlined-basic" label="Task Name" variant="outlined" />
              <Button onClick={addData} variant="contained" color="success">
                {toggleBtn ? <AddIcon /> : <EditIcon />}
              </Button>
        </Stack>
      </div>
      <div className="data">
        <div className="data_view"> 
          <h4>Project Name</h4>
          <h4>Task Name</h4>
          <h4>Remove</h4>
          <h4>Edit</h4>
        </div>
        {
          data.map((element) => {
            return (
              <div key={element.id} className="data_view">
                <h4>{element.project_name}</h4>
                <h4>{element.task_name}</h4>
                <h4>
                <Stack>
                    <Button onClick={() => removeItem(element.id)} variant="contained" color="error">
                      <DeleteForeverIcon />
                    </Button>
                </Stack>
                </h4>
                <h4>
                <Stack>
                    <Button onClick={() => editItem(element.id)} variant="contained" color="success">
                      <EditIcon />
                  </Button>
                </Stack>
                </h4>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Todo
