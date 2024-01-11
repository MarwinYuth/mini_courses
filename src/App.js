import { useState } from 'react';
import './App.css';
import CategoryTables from './Components/CategoryTables';
import CourseTable from './Components/CourseTable';
import AddCourses from './Components/AddCourses';
import Modal from './Components/Modal';

function App() {

  const [category,setCategory] = useState([])
  const [courses,setCourses] = useState([])

  const [popUp,setPopUp] = useState(false)
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
    // console.log(courses);
  }

  const onEditCategory = (category_id) => {
    const Category = category.find(cate => cate.id === category_id)
    setPopUp(true)
    setViewEdit(Category);

  }

  const onEditCourse = (courseId) => {
    const course = courses.find(course => course.id === courseId);
    setPopUp(true)
    setViewEdit(course)
  }

  return (

    <div className="App w-[1200px] m-auto mt-14">
    
      <CategoryTables data={category} onSave={onSaveCategory} onDelete={onDeleteCategory} onEdit={onEditCategory}/>
      <CourseTable data={courses} onDelete={onDeleteCourses} onEdit={onEditCourse}/>

      <AddCourses categories={category} onSave={onSaveCourse}/>

      <Modal data={viewEdit} onChangePopUp={setPopUp} isVisible={popUp}/>  

    <div className='h-[50px]'></div>
    </div>

  );
}

export default App;
