import { useState } from 'react';
import './App.css';
import CategoryTables from './Components/CategoryTables';
import CourseTable from './Components/CourseTable';
import AddCourses from './Components/AddCourses';

function App() {

  const [category,setCategory] = useState([])
  const [courses,setCourses] = useState([])

  const onSaveCategory = (param) => {

    setCategory(prev => {

      prev.push({
        id:category.length + 1,
        ...param
      })

      return prev
    })
  }

  const onSaveCourse = (param) => {

    setCourses(prev => {

      prev.push({
        id:courses.length + 1,
        ...param
      })

      return [...prev]
    })

  }

  const onDeleteCategory = (cateogoryId) => {
    setCategory(prev => prev.filter(cate => cate.id !== cateogoryId))
    setCourses(prev => prev.filter(course => course.category_id !== cateogoryId))

  }

  const onDeleteCourses = (courseId) => {
    setCourses(courses.filter(cours => cours.id !== courseId))
    // console.log(courses);
  }

  return (

    <div className="App w-[1200px] m-auto mt-14">
    
      <CategoryTables data={category} onSave={onSaveCategory} onDelete={onDeleteCategory}/>
      <CourseTable data={courses} onDelete={onDeleteCourses}/>

      <AddCourses categories={category} onSave={onSaveCourse}/>


    <div className='h-[50px]'></div>
    </div>

  );
}

export default App;
