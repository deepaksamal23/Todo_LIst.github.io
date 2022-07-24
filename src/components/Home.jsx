import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Todo from './Todo';
import { Add } from '../redux/actions/action';
import {useDispatch} from 'react-redux'

const Home = () => {
  const [elem, setElem] = useState()
  // console.log(elem);
  const changeHandler = (e) => {
    setElem(e.target.value)
  }
    const dispatch =useDispatch();

    const dataAdd = () =>{
      dispatch(Add(elem))
      setElem('')
    }

  return (
    <>
      <div className='container col-lg-5'>
        <div className="mt-4 text-center">
          Enter Your Activity

          <div className="input d-flex justify-content-center align-items-center my-3">
            <input type="text" className='form-control' value={elem} onChange={changeHandler} />
            <button onClick={()=>dataAdd()} className='btn btn-danger' ><AddIcon /></button>
          </div>
          <Todo />
        </div>
      </div>

    </>
  )
}

export default Home