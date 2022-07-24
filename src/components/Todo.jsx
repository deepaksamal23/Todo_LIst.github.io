import React,{useContext} from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useDispatch, useSelector } from "react-redux"
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import { Remove, Update } from '../redux/actions/action';
import { deleteContext } from './context/AlertContext';

const Todo=()=>{

  const {Delete,setDelete}= useContext(deleteContext)

  const { user_info } = useSelector((state) => state.todolist)
  // console.log(user_info);
// this for eye  click data 
  const [Eye, setEye] = useState(false);
  // data store state
  const [dataShow, setDataShow] = useState('')

  const [Show,setshow]=useState(false)
  const [update,setUpdate]=useState("")
  const [ind,setInd]=useState("")

  const handleShow =(data)=>{
    setshow(true);
    setUpdate(data)
  }

const dispatch =useDispatch()
  const remove  =(id)=>{
    dispatch(Remove(id))
    setDelete(true)
// console.log(id)
  }
  const handleClose = () => setshow(false);
  const update_userData=()=>{
dispatch(Update(update,ind))
handleClose()
  }
  return (
    <>
      <div className="todo_parent   mx-auto">
        {
          user_info.map((data, k) => {
            return (
              <>
                <div className="semi mb-2" style={{ background: '#273c75', color: '#f5f6fa' }}>
                  <div className="all d-flex justify-content-between align-items-center mx-3  mb-2" key={k}>
                    <li style={{ listStyle: 'none' }}>{data}</li>
                    <div className="icon col-lg-2 d-flex  justify-content-between align-items-center py-2" style={{ cursor: 'pointer' }}>
                      <ModeEditIcon onClick={()=>{
                            handleShow(data)                   
                            setInd(k)
                      }} style={{ color: '#44bd32' }} />
                      <DeleteIcon onClick={()=>{remove(k)}} style={{ color: '#eb2f06' }} />
                      <RemoveRedEyeIcon
                        onClick={() => {
                          setEye(true)
                          setDataShow(data)
                        }}

                        style={{ color: '#ffc048' }} />
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
            {/*Read Modal */ }
        <Modal show={Eye} >
          <h1 className='d-flex justify-content-center align-items-center text-danger'>{dataShow}</h1>
          <Modal.Footer>
            <Button onClick={() => { setEye(false) }} variant="secondary" >
              Close
            </Button>
          </Modal.Footer>
        </Modal>


        {/* Update Modal */}
        <Modal show={Show} onHide={handleClose} animation={false}>
        <h3>Update Your Activity</h3>
        <Modal.Header closeButton>
          <Modal.Title className='m-auto'>
<input type="text" className='form-control' value={update} onChange={(e)=>{
  setUpdate(e.target.value)
}} />
          </Modal.Title>
        </Modal.Header>
      
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>update_userData()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>


    </>
  )
}

export default Todo