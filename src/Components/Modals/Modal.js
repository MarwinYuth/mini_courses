import { useState } from 'react'
import { Input } from '../Input'

export const CategoryModal = ({data,onChangePopUp,onUpdate}) => {

  const [form,setForm] = useState({name:data.name,code:data.code})

  const onChange = (e) => {
    const field = e.target.name
    const value = e.target.value

    setForm({...form,[field]:value})
  }

  const protectModal = (e) => {
    e.stopPropagation()

  }

  const onClickUpdate = () => {
    data.name = form.name
    data.code = form.code

    onUpdate(data.id,form.name)
    onChangePopUp(false)
  }

  return(

    <div onClick={() => onChangePopUp('')} className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">

        <div onClick={protectModal} className="bg-gray-600 p-8 text-center rounded-lg">

            <h1 className="text-white font-bold text-[30px]">Category Modify</h1>

            <Input label='Name' name='name' value={form.name} Placeholder='Category Name' onChange={onChange}/>
            <Input label='Code' name='code' value={form.code} Placeholder='Code' onChange={onChange}/>

            <button onClick={onClickUpdate} className='p-2  font-bold rounded-lg bg-white'>Update</button>

        </div>

    </div>

  )

}

export const CourseModal = ({data,onChangePopUp}) => {

  return(

    <div onClick={() => onChangePopUp('')} className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">

        <div className="bg-gray-600 w-[1200px] p-8 text-center rounded-lg">

            <h1 className="text-white font-bold text-[30px]">Category Modify</h1>

            <Input label='Name' name='name' Placeholder='Category Name'/>
            <Input label='Code' name='code' Placeholder='Code'/>

            <button className='p-2  font-bold rounded-lg bg-white'>Update</button>

        </div>

    </div>

  )

}