import * as yup from 'yup'


export const categorySchema = yup.object().shape({
    label:yup.string().required('Label Required'),
    value:yup.string().required('Value Required')
})

export const CourseSchema = yup.object().shape({
    name:yup.string().required('Required'),
    category_id:yup.number().positive().required('Required'),
    category:yup.string().required('Required'),
    summarize:yup.string().required('Required'),
    image:yup.string().required('image Required')
})
