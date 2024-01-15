import { useField } from 'formik'
import React from 'react'

export default function SelectComponent({name,value,onChange,options=[]}) {
    
  return (
   
    <div>
        
        <label className="text-white font-bold">Category</label>
        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        name={name}
        value={value}
        onChange={onChange}
        >
            <option value=''>Choose a Cateogory</option>
            {
                options.map((items) => <option key={items.id} value={items.id}>{items.name}</option>)
            }
        </select>
    
    </div>

  )
}

export const FormikSelect = ({label,options,...props}) => {

  const [field,meta] = useField(props)

  return(

    <div>

        <label className="text-white font-bold">Category</label>
        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...field}
        {...props}
        >
            <option value=''>Choose a Cateogory</option>
            {
                options.map((items) => <option key={items.id} value={items.id}>{items.name}</option>)
            }
        </select>

    </div>

  )

}
