import { useState } from 'react';
import './App.css';
import CategoryTables from './Components/CategoryTables';
import CourseTable from './Components/CourseTable';
import AddCourses from './Components/AddCourses';
import { CategoryModal } from './Components/Modal';

function App() {

  const [category,setCategory] = useState([])
  const [courses,setCourses] = useState([])

  const [isCourseEdit,setIsCourseEdit] = useState()
  const [isEdit,setIsEdit] = useState(false)

  const [popUp,setPopUp] = useState(false)
  const [viewEdit,setViewEdit] = useState()

  const onSaveCategory = (param) => {

    setCategory(prev => {

      prev.push({
        id:category.length + 1,
        ...param
      })

      return [...prev]
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

  }

  const onEditCategory = (category_id) => {
    const Category = category.find(cate => cate.id === category_id)
    setPopUp(true)
    setViewEdit(Category);

  }

  const onEditCourse = (courseId) => {
    const course = courses.find(course => course.id === courseId);
    setIsCourseEdit(course)
    setIsEdit(true)
  }

  const onUpdateCategory = (category_id,value) => {
    const course = courses.filter(cate => cate.category_id === category_id)

    course.forEach(item => {
      item.category = value
    });
    
  }

  const onUpdateCourse = (course_id,param) => {
    const courseIndex = courses.findIndex(course => course.id === course_id)
    courses.splice(courseIndex,1)

    setCourses(prev => {
      prev.push({
        id:course_id,
        ...param
      })
      return [...prev]
    })
    setIsEdit(false)
  }

  return (

    <div className="App w-[1200px] m-auto mt-14">
    
      <CategoryTables data={category} onSave={onSaveCategory} onDelete={onDeleteCategory} onEdit={onEditCategory}/>
      
      <CourseTable data={courses} onDelete={onDeleteCourses} onEdit={onEditCourse}/>

      <AddCourses data={isCourseEdit} categories={category} onSave={onSaveCourse} isEdit={isEdit} onUpdate={onUpdateCourse}/>

      {popUp && <CategoryModal data={viewEdit} onChangePopUp={setPopUp} onUpdate={onUpdateCategory}/>}

      <div className='h-[50px]'></div>

    </div>

  );
}

export default App;
