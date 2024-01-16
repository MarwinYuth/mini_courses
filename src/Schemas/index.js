import * as yup from 'yup'


export const categorySchema = yup.object().shape({
    name:yup.string().required('required'),
    code:yup.number().positive().required('required')
})
