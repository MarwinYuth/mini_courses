import { useEffect, useState } from 'react'
import { FormikInput} from './Input'
import { FormikSelect } from './SelectComponent'
import { Formik,Form, FieldArray } from 'formik'

export default function AddCourses({data,categories,onSave,isEdit,onUpdate}) {

  const [initiaValues,setInitiaValues] = useState({
    name:'',
    category_id:'',
    summarize:'',
    totalChapter:[{
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
    
    const categoryName = categories.find(cate => cate.id === parseInt(values.category_id))

    let lessonCount = 0

    if(isEdit){

      values.totalChapter.forEach(items => {
        lessonCount += items.lessons.length  
      });

      const newCourse = {
        name:values.name,
        summarize:values.summarize,
        category:categoryName.name,
        totalChapter:values.totalChapter,
        totalLessons:lessonCount,
        category_id:parseInt(values.category_id)
      }

      onUpdate(data.id,newCourse)
    }else{

      values.totalChapter.forEach(items => {
        lessonCount += items.lessons.length  
      });
  
      const newCourse = {
        name:values.name,
        summarize:values.summarize,
        category:categoryName.name,
        totalChapter:values.totalChapter,
        totalLessons:lessonCount,
        category_id:parseInt(values.category_id)
      }
  
      onSave(newCourse)
    }

    setInitiaValues({
      name:'',
      category_id:'',
      summarize:'',
      totalChapter:[{
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
            <FormikSelect label='Select Category' name='category_id' options={categories} />
            <FormikInput label='Summarize' placeholder='Summarize' name='summarize' />

            <FieldArray name='totalChapter'>
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

                  {values.totalChapter.map((chapter,index) => (

                    <div key={index} className='border border-white p-5 mt-4'>

                      <span onClick={() => remove(index)} className='text-white float-end font-bold'>X</span>
                      <FormikInput label='Chapter' placeholder='Chapter' name={`totalChapter.${index}.name`}/>
                      <FormikInput label='Summaarize' placeholder='Summarize' name={`totalChapter.${index}.summarize`}/>


                      <FieldArray name={`totalChapter.${index}.lessons`}>

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
                                <FormikInput label='Lessons' name={`totalChapter.${index}.lessons.${lessonIndex}.name`}/>
                                <FormikInput label='Content' name={`totalChapter.${index}.lessons.${lessonIndex}.content`}/>
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