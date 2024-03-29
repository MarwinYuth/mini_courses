import { useState } from 'react'
import { Input, TextArea} from './Input'
import SelectComponent from './SelectComponent'

export default function AddCourses({categories,onSave}) {

  const [course,setCourse] = useState({category_id:'',name:'',summarize:''})

  const [chapters,setChapters] = useState([])
  const [lessons,setLessons] = useState([]) 


  const onChangeCourse = (e) => {

    const field = e.target.name
    const value = e.target.value

    setCourse({...course,[field]:value})

  }

  const onChangeChapter = (chapterIndex,field,value) => {
    const updateChapter = [...chapters]
    updateChapter[chapterIndex][field] = value
    setChapters(updateChapter)
  }

  const onAddChapter = () => {

    const newChapter = {
      id:chapters.length + 1,
      name:'',
      summarize:'',
      lessons:[]
    }

    setChapters([...chapters,newChapter])
  }

  const onChangeLesson = (e,ChapterIndex,LessonIndex) => {

    const field = e.target.name
    const value = e.target.value

    const updateLesson = [...chapters]
    updateLesson[ChapterIndex].lessons[LessonIndex][field] = value

    setLessons(updateLesson)
  }

  const onAddLesson = (chapterIndex) => {

    const newLesson = {
      id:chapters[chapterIndex].lessons.length + 1,
      name:'',
      content:''
    }

    const updateLesson = [...chapters]
    updateLesson[chapterIndex].lessons.push(newLesson)

    setLessons([...lessons,newLesson])
  }

  const onRemoveChapter = (chapterId) => {
    setChapters(prev => prev.filter(chap => chap.id !== chapterId))
  }

  const onTest = () => {
    // });
    console.log(chapters);
    console.log(lessons);

    // console.log(categories);
    
  }

  const onSaveCourse = () => {

    const categoryName = categories.find(cate => cate.id === parseInt(course.category_id)).name

    let lessonCount = 0

    lessons.forEach(items => {
      lessonCount += items.lessons.length  
    });

    const newCourse = {
      name:course.name,
      summarize:course.summarize,
      category:categoryName,
      totalChapters:chapters,
      totalLessons:lessonCount,
      category_id:parseInt(course.category_id)
    }

    onSave(newCourse)
    setChapters([])
    setLessons([])
    setCourse({category_id:'',name:'',summarize:''} )
    
  }
  
  return (

    <div>
      
        <h1 className="text-white font-bold text-[30px]">New Course</h1>

        <div className='w-[900px] m-auto'>

         
          <Input label='New Course' name='name' value={course.name} Placeholder='New Course' onChange={onChangeCourse}/>
          <SelectComponent name='category_id' value={course.category_id} options={categories} onChange={onChangeCourse}/>
          <TextArea label='Summarize' placeholder='Summarize' name='summarize' value={course.summarize} onChange={onChangeCourse}/>

          <button onClick={onTest} className='mt-4 rounded-lg font-bold text-lg float-end bg-white p-3 m-2'>Test Button</button>
          <button onClick={onAddChapter} className='mt-4 rounded-lg font-bold text-lg float-end bg-white p-3 m-2'>Add Chapter</button>
          
          {
            chapters.map((chapter,chapterIndex) => {
              return(

                <div key={chapter.id} className='mt-24 border-2 border-white p-14 rounded-lg'>
                  
                  <div className='flex justify-between'>

                    <h1 className='text-white text-[30px] font-bold'>Chapter</h1>
                    <span onClick={() => onRemoveChapter(chapter.id)} className='text-white font-bold text-[20px] cursor-pointer'>X</span>

                  </div>
                  <Input label='Chapter' name='name' value={chapter.name} Placeholder='Chapter' onChange={(e) => onChangeChapter(chapterIndex,e.target.name,e.target.value)}/>
                  <Input label='Summarize' name='summarize' value={chapter.summarize} Placeholder='Summarize' onChange={(e) => onChangeChapter(chapterIndex,e.target.name,e.target.value)}/>

                  <button onClick={() => onAddLesson(chapterIndex)} className='p-2 text-xl bg-white font-bold mb-6 rounded-lg'>Add Lesson</button>

                  {
                    chapter.lessons.map((lesson,lessonIndex) => {

                      return(

                      <div key={lesson.id} className='mt-4 border-2 border-white p-8 rounded-lg'>
                        
                        <div className='flex justify-between'>
                          <h1 className='text-white font-bold text-[32px]'>Lessons</h1>
                          
                        </div>

                        <Input label='Lesson' name='name' value={lesson.name} Placeholder='Lesson' onChange={(e) => onChangeLesson(e,chapterIndex,lessonIndex)}/>\
                        <Input label='Content' name='content' value={lesson.content} Placeholder='Content' onChange={(e) => onChangeLesson(e,chapterIndex,lessonIndex)}/>\

                      </div>

                      )

                    })
                  }

                </div>
                
              )
            })
          }

          {chapters.length > 0 && <button className='bg-white p-4 mt-3 font-bold rounded-lg' onClick={onSaveCourse}>Save</button>}

        </div>

    </div>

  )
}
