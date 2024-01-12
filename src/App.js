import { useState } from 'react';
import './App.css';
import CategoryTables from './Components/CategoryTables';
import CourseTable from './Components/CourseTable';
import AddCourses from './Components/AddCourses';
import { CategoryModal, CourseModal } from './Components/Modals/Modal';

function App() {

  const[isCourseEdit,setIsCourseEdit] = useState()

  const [category,setCategory] = useState([])
  const [courses,setCourses] = useState([])

  const [popUp,setPopUp] = useState('')
  const [viewEdit,setViewEdit] = useState()

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

  }

  const onEditCategory = (category_id) => {
    const Category = category.find(cate => cate.id === category_id)
    setPopUp('category')
    setViewEdit(Category);

  }

  const onEditCourse = (courseId) => {
    const course = courses.find(course => course.id === courseId)
    setPopUp('course')
    setIsCourseEdit(course)
  }

  const onUpdateCategory = (category_id,name) => {
    const course = courses.filter(cate => cate.category_id === category_id)

    course.forEach(item => {
      item.category = name
    });
    
  }

  const onUpdateCourse = (param) => {
    console.log(courses.find(course => parseInt(course.id) === param));
    
  }

  return (

    <div className="App w-[1200px] m-auto mt-14">
    
      <CategoryTables data={category} onSave={onSaveCategory} onDelete={onDeleteCategory} onEdit={onEditCategory}/>
      
      <CourseTable data={courses} onDelete={onDeleteCourses} onEdit={onEditCourse} isCourseEdit={isCourseEdit}/>

      <AddCourses categories={category} onSave={onSaveCourse}/>

      {popUp === 'category' && <CategoryModal data={viewEdit} onChangePopUp={setPopUp} onUpdate={onUpdateCategory}/>}

      {popUp === 'course' && <CourseModal data={isCourseEdit} onChangePopUp={setPopUp} categories={category} onUpdate={onUpdateCourse}/>}

      <div className='h-[50px]'></div>

    </div>

  );
}

export default App;
