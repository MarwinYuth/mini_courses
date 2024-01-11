import { useState } from 'react'
import { Input } from './Input'

export default function Modal({data,onChangePopUp,isVisible}) {


  const [form,setForm] = useState({name:data.name})

  if(!isVisible){
    return null
  }

  const protectModal = (e) => {
    e.stopPropagation()

  }

  return (
        
    <div onClick={() => onChangePopUp(false)} className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">

        <div onClick={protectModal} className="bg-gray-600 p-8 text-center rounded-lg">
            
            <h1 className="text-white font-bold text-[30px]">Modify</h1>

            <Input label='name' name='name' value={form.name} Placeholder='Category Name' />

            <button>Save</button>
        </div>

    </div>

  )
}

export const CategoryModal = ({data,onChangePopUp}) => {

  const [form,setForm] = useState({name:data.name,code:data.code})

  const onChange = (e) => {
    const field = e.target.name
    const value = e.target.value

    setForm({...form,[field]:value})
  }

  const protectModal = (e) => {
    e.stopPropagation()

  }

  console.log(data);

  return(

    <div onClick={() => onChangePopUp(false)} className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">

        <div onClick={protectModal} className="bg-gray-600 p-8 text-center rounded-lg">

            <h1 className="text-white font-bold text-[30px]">Category Modify</h1>

            <Input label='Name' name='name' value={form.name} Placeholder='Category Name' onChange={onChange}/>

            <button>Save</button>

        </div>

    </div>

  )

}
