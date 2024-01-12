import React, { useState } from 'react'
import { Input } from './Input'

export default function CategoryTables({data,onSave,onDelete,onEdit}) {

  const [form,setForm] = useState({name:'',code:''})  

  const onChange = (e) => {
    const field = e.target.name
    const value = e.target.value

    setForm({...form,[field]:value})
  }

  const onClickSave = (e) => {
    e.preventDefault()

    if(form.name === '' || form.code === ''){
        return null
    }

    onSave(form)
    setForm({name:'',code:''})
  }

  return (

    <div className="relative overflow-x-auto">


        <form className='w-[800px]'>
                
            <Input label='Category Name' name='name' Placeholder='Category Name' value={form.name} onChange={onChange}/>

            <Input label='Code' name='code' Placeholder='Code' value={form.code} onChange={onChange}/>

            <button onClick={onClickSave} type='submit' className='float-start bg-white p-3 rounded-lg mb-4 font-bold text-lg'>Add Category</button>

        </form>
        
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-32">

            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Id
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Code
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>

                {
                    data.map(cate => {
                        return(

                            <tr key={cate.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {cate.id}
                                </th>
                                <td className="px-6 py-4">
                                    {cate.name}
                                </td>
                                <td className="px-6 py-4">
                                    {cate.code}
                                </td>
                                <td className="px-6 py-4">
                                    <span onClick={() => onEdit(cate.id)} className='text-blue-500 font-bold'>Edit</span> / <span onClick={() => onDelete(cate.id)} className='text-red-500 font-bold'>Delete</span>
                                </td>
                            </tr>
                        )
                    })
                }
        
            </tbody>
        </table>
{/* 
        <Modal isVisible={popUp} onChangePopUp={setPopUp} data={form} onChange={onChange} onSave={onClickSave}/> */}
    </div>

  )
}
