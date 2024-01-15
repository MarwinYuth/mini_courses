import { useField } from "formik"

export const Input = ({label,type='text',value,name,onChange,Placeholder}) => {

    return(

        <div className="mb-5 mt-8">
            <label className="float-start font-bold mb-2 text-xl text-gray-900 dark:text-white">{label}</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            type={type}
            value={value}
            name={name}
            placeholder={Placeholder}
            onChange={onChange}
            />
        </div>
    )
}

export const FormikInput = ({label,...props}) => {


    const [field,meta] = useField(props)

    return(

        <div className="mb-5 mt-8">
        <label className="float-start font-bold mb-2 text-xl text-gray-900 dark:text-white">{label}</label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...field}
          {...props}
        />
        {meta.touched && meta.error && <p className='text-red-500'>{meta.error}</p>}
      </div>

    )

}

export const TextArea = ({label,placeholder,name,value,onChange}) => {

    return(

        <div className="mt-4">

            <label className="font-bold mb-2 text-lg text-gray-900 dark:text-white">{label}</label>
            <textarea rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}>
            
            </textarea>

        </div>

    )

}

export const FormikTextArea = ({label,...props}) => {

    const [field,meta] = useField(props)

    return(

        <div className="mt-4">

            <textarea rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            {...field}
            {...props}
            >
            
            </textarea>

        </div>

    )

}