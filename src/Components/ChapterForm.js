import React from 'react'
import { Input } from './Input'

export default function ChapterForm({
    chapter,
    chapterIndex,
    onRemoveChapter,
    onChangeChapter,
    onAddLesson,
}) 
    {

  return (

    <div>

        <div className='flex justify-between'>

        <h1 className='text-white text-[30px] font-bold'>Chapter {chapter.id}</h1>
        <span onClick={() => onRemoveChapter(chapter.id)} className='text-white font-bold text-[20px] cursor-pointer'>X</span>
        </div>
        <Input label='Chapter' name='name' value={chapter.name} Placeholder='Chapter' onChange={(e) => onChangeChapter(chapterIndex,e.target.name,e.target.value)}/>
        <Input label='Summarize' name='summarize' value={chapter.summarize} Placeholder='Summarize' onChange={(e) => onChangeChapter(chapterIndex,e.target.name,e.target.value)}/>

        <button onClick={() => onAddLesson(chapterIndex)} className='p-2 text-xl bg-white font-bold mb-6 rounded-lg'>Add Lesson</button>


    </div>

  )
}
