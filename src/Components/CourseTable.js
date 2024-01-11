import React from 'react'

export default function CourseTable({data}) {

 
  return (

    <div className="relative overflow-x-auto mt-32">

            <h1 className='text-white font-bold mb-3 text-[20px]'>Category Management</h1>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Summarize
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total Chapters
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total Lessons
                        </th>
                    </tr>
                </thead>
                <tbody>

                   {
                        data.map((course,courseIndex) => {

                            return(

                                <tr key={course.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {course.id}
                                    </th>
                                    <td className="px-6 py-4">
                                        {course.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {course.summarize}
                                    </td>
                                    <td className="px-6 py-4">
                                        {course.category}
                                    </td>
                                    <td className="px-6 py-4">
                                        {course.totalChapters.length}
                                    </td>
                                    <td className="px-6 py-4">
                                        {course.totalLessons}
                                    </td>
                                </tr>

                            )

                        })
                   }

                </tbody>
            </table>

            {/* <Modal isVisible={popUp} onChangePopUp={setPopUp} data={form} onChange={onChange} onSave={onClickSave}/> */} */
        </div>

  )
}