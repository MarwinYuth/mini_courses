import { useState } from 'react'
import { Input } from '../Input'
import SelectComponent from '../SelectComponent'
import ChapterForm from '../ChapterForm'
import LessonsForm from '../LessonsForm'

export const CategoryModal = ({data,onChangePopUp,onUpdate}) => {

  const [form,setForm] = useState({name:data.name,code:data.code})

  const onChange = (e) => {
    const field = e.target.name
    const value = e.target.value

    setForm({...form,[field]:value})
  }

  const protectModal = (e) => {
    e.stopPropagation()

  }

  const onClickUpdate = () => {
    data.name = form.name
    data.code = form.code

    onUpdate(data.id,form.name)
    onChangePopUp(false)
  }

  return(

    <div onClick={() => onChangePopUp('')} className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">

        <div onClick={protectModal} className="bg-gray-600 p-8 text-center rounded-lg">

            <h1 className="text-white font-bold text-[30px]">Category Modify</h1>

            <Input label='Name' name='name' value={form.name} Placeholder='Category Name' onChange={onChange}/>
            <Input label='Code' name='code' value={form.code} Placeholder='Code' onChange={onChange}/>

            <button onClick={onClickUpdate} className='p-2  font-bold rounded-lg bg-white'>Update</button>

        </div>

    </div>

  )

}

export const CourseModal = ({data,onChangePopUp,categories,onRemove}) => {

  const [form,setForm] = useState({
    category_id:data.category_id,
    name:data.name,
    summarize:data.summarize
  })

  const onChangeChapter = (chapterIndex,field,value) => { 

    const updatedChapters = [...data.totalChapters];
    updatedChapters[chapterIndex] = {
      ...updatedChapters[chapterIndex],
      [field]: value,
    };

    setForm((prevForm) => ({
      ...prevForm,
      totalChapters: updatedChapters,
    }));

  }

  const protectModal = (e) => {
    e.stopPropagation()

  }

  const onChange = (e) => {
    const field = e.target.name
    const value = e.target.value

    setForm({...form,[field]:value})
  }

  const onEdit = () => {
    const newCategory = categories.find(cate => parseInt(cate.id) === parseInt(form.category_id))
    
    data.name = form.name
    data.category_id = newCategory.id
    data.category = newCategory.name
    data.summarize = form.summarize
    
    onChangePopUp('')
  }

  return(

    <div onClick={() => onChangePopUp('')} className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">

      <div onClick={protectModal} className="bg-gray-600 p-8 text-center rounded-lg w-[1000px] h-[800px] overflow-y-auto">

          <h1 className="text-white font-bold text-[30px]">Course Modify</h1>

          <Input label='Name' value={form.name} name='name' Placeholder='Category Name' onChange={onChange}/>
          <SelectComponent value={form.category_id} name='category_id' options={categories} onChange={onChange}/>
          <Input label='Code' value={form.summarize} name='summarize' Placeholder='Code' onChange={onChange}/>

          {
            data.totalChapters.map((chapter,chapterIndex) => {

              return(

                <div key={chapter.id} className='border-2 border-white p-4 mt-4 rounded-lg'>

                  <ChapterForm chapter={chapter} chapterIndex={chapterIndex} onChangeChapter={onChangeChapter} />

                  {
                    chapter.lessons.map((lesson,lessonIndex) => {

                      return( 

                        <LessonsForm key={lesson.id} lesson={lesson} lessonIndex={lessonIndex} chapterIndex={chapterIndex}/>

                      )

                    })
                  }

                </div>

              )

            })
          }
    
          <button onClick={onEdit} className='p-2 font-bold rounded-lg bg-white mt-8'>Update</button>

      </div>

    </div>

  )

}