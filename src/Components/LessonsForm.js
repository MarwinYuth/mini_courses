import React from 'react'
import { Input } from './Input'

export default function LessonsForm({lesson,lessonIndex,chapterIndex,onChangeLesson}) {

  return (

    <div key={lesson.id} className='mt-4 border-2 border-white p-8 rounded-lg'>
                        
        <div className='flex justify-between'>
          <h1 className='text-white font-bold text-[32px]'>Lessons</h1>
          
        </div>

        <Input label='Lesson' name='name' value={lesson.name} Placeholder='Lesson' onChange={(e) => onChangeLesson(e,chapterIndex,lessonIndex)}/>\
        <Input label='Content' name='content' value={lesson.content} Placeholder='Content' onChange={(e) => onChangeLesson(e,chapterIndex,lessonIndex)}/>\

    </div>

  )
}
