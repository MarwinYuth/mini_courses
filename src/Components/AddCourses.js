import { useEffect, useState } from 'react'
import { FormikInput} from './Input'
import { FormikSelect } from './SelectComponent'
import { Formik,Form, FieldArray } from 'formik'
import Select from 'react-select'

export default function AddCourses({data,categories,onSave,isEdit,onUpdate}) {

  const [initiaValues,setInitiaValues] = useState({
    name:'',
    category_id:'',
    category:'',
    summarize:'',
    chapters:[{
      name:'',
      summarize:'',
      lessons:[
        {
          name:'',
          content:''
        }
      ]
    }]
  })

  useEffect(() => {

    if(isEdit){
      setInitiaValues(data)
    }

  },[isEdit,data])

  const onSaveCourse = (values,actions) => {

    let lessonCount = 0

    if(isEdit){

      values.chapters.forEach(items => {
        lessonCount += items.lessons.length  
      });

      const newCourse = {
        name:values.name,
        summarize:values.summarize,
        category:values.category,
        chapters:values.chapters,
        totalLessons:lessonCount,
        category_id:parseInt(values.category_id)
      }

      onUpdate(data.id,newCourse)
    }else{

      values.chapters.forEach(items => {
        lessonCount += items.lessons.length  
      });
  
      const newCourse = {
        name:values.name, 
        summarize:values.summarize,
        category:values.category,
        chapters:values.chapters,
        totalLessons:lessonCount,
        category_id:parseInt(values.category_id)
      }
      
      console.log(newCourse);
      onSave(newCourse)
    }

    setInitiaValues({
      name:'',
      category_id:'',
      summarize:'',
      category:'',
      chapters:[{
        name:'',
        summarize:'',
        lessons:[
          {
            name:'',
            content:''
          }
        ]
      }]
    })
    actions.resetForm()
  }

  // const selectOption = [
  //   {id:1,value:'blue',label:'Blue'},
  //   {id:1,value:'red',label:'Red'},
  //   {id:1,value:'yelloe',label:'Yellow'}
  // ]

  const handleSelect = (selectOption) => {
    console.log(selectOption);
  }
  console.log(categories);
  return (

    <div>
      
        <h1 className="text-white font-bold text-[30px]">New Course</h1>

        <div className='w-[900px] m-auto'>

        <Formik
         initialValues={initiaValues}
         enableReinitialize={true}
         onSubmit={onSaveCourse}
         >
         {({values}) => (
          <Form>

            <FormikInput label='Course' placeholder='Course' name='name' />

            <Select options={categories}
            defaultInputValue={categories[0]}
            onChange={(selectOption) => {
              const selectCategory = categories.find(cate => cate.value === selectOption.value)
              values.category_id = selectCategory.id
              values.category = selectCategory.value
            }}/>
            <br></br>
            <Select options={categories} isMulti/>

            <FormikInput label='Summarize' placeholder='Summarize' name='summarize' />

            <FieldArray name='chapters'>
              {({push,remove}) => (
                <div>

                      <button
                        onClick={() => {
                          push({
                            name:'',
                            summarize:'',
                            lessons:[{name:'',content:''}]
                          })
                        }}
                        type='button'
                        className='bg-white float-start font-bold rounded-lg'
                        >
                        Add Chapter
                      </button>

                  {values.chapters.map((chapter,index) => (

                    <div key={index} className='border border-white p-5 mt-4'>

                      <span onClick={() => remove(index)} className='text-white float-end font-bold'>X</span>
                      <FormikInput label='Chapter' placeholder='Chapter' name={`chapters.${index}.name`}/>
                      <FormikInput label='Summaarize' placeholder='Summarize' name={`chapters.${index}.summarize`}/>


                      <FieldArray name={`chapters.${index}.lessons`}>

                        {({push:pushLesson,remove:removeLesson}) => (
                          
                          <div className='w-[800px] mt-14 m-auto border border-white p-5'>

                                <button
                                onClick={() => {
                                  pushLesson({name:'',content:''})
                                }}
                                type='button'
                                className='bg-white font-bold rounded-lg'
                                >
                                  Add Lessons
                                </button>

                            {chapter.lessons.map((lesson,lessonIndex) => (
                              <div key={lessonIndex}>
                                <span onClick={() => removeLesson(lessonIndex)} className='text-white float-end font-bold'>X</span>
                                <FormikInput label='Lessons' name={`chapters.${index}.lessons.${lessonIndex}.name`}/>
                                <FormikInput label='Content' name={`chapters.${index}.lessons.${lessonIndex}.content`}/>
                              </div>
                            ))}
                          </div>
                        )}
                      </FieldArray>

                    </div>
                    
                  ))}

                </div>
              )}
            </FieldArray>

            <button type='submit' className='rounded-lg font-bold p-4 bg-white mt-8'>
              {isEdit ? 'Update' : 'Save'}
            </button>

          </Form>
         )}

         </Formik>
         
          {/* {chapters.length > 0 && <button className='bg-white p-4 mt-3 font-bold rounded-lg' onClick={onSaveCourse}>Save</button>} */}

        </div>

    </div>

  )
}