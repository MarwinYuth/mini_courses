import { FormikInput } from './Input'
import { Formik,Form } from 'formik'

export const CategoryModal = ({data,onChangePopUp,onUpdate}) => {

  // const [form,setForm] = useState({name:data.name,code:data.code})

  // const onChange = (e) => {
  //   const field = e.target.name
  //   const value = e.target.value

  //   setForm({...form,[field]:value})
  // }

  const protectModal = (e) => {
    e.stopPropagation()

  }

  const onClickUpdate = (values) => {

    data.value = values.value
    data.label = values.label

    onUpdate(data.id,values.value)
    onChangePopUp(false)
  }

  return(

    <div onClick={() => onChangePopUp(false)} className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">

        <div onClick={protectModal} className="bg-gray-600 p-8 text-center rounded-lg">

            <h1 className="text-white font-bold text-[30px]">Category Modify</h1>

            <Formik
              initialValues={{ value: data.value, label: data.label }}
              onSubmit={onClickUpdate}
            >

              <Form>

                <FormikInput label='value' name='value'/>

                <FormikInput label='label' name='label'/>

                <button type='submit' className='bg-white font-bold p-4'>Click</button>
              </Form>

            </Formik>
            {/* <Input label='Name' name='name' value={form.name} Placeholder='Category Name' onChange={onChange}/>
            <Input label='Code' name='code' value={form.code} Placeholder='Code' onChange={onChange}/> */}
        </div>

    </div>

  )

}
