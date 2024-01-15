import * as yup from "yup"


export const basicSchema = yup.object().shape({
    email:yup.string().email("Please enter a valid email").required('Required'),
    age:yup.number().positive().integer().required('Required'),
    password:yup.string().min(5).max(20).required('Required'),
    confirm:yup.string().oneOf([yup.ref('password'),"Password must match"]).required('Required')  
})