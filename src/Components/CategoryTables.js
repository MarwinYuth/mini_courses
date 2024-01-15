import React from 'react'
import { FormikInput } from './Input'
import { Form, Formik } from 'formik'

export default function CategoryTables({data,onSave,onDelete,onEdit}) {

  const onSubmit = (values,actions) => {
    onSave(values)
    actions.resetForm()
  }

  return (

    <div className="relative overflow-x-auto">  
        
        <Formik
            initialValues={{name:'',code:''}}
            onSubmit={onSubmit}
        >

            <Form>
                <FormikInput label='Category' placeholder='category' name='name'/>
                <FormikInput label='Code' placeholder='code' name='code'/>

                <button type='submit' className='bg-white p-4 font-bold rounded-lg'>Save</button>
            </Form>
        </Formik>
        
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
