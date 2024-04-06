'use client'
import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import CourseCard from '../CourseCard/CourseCard';
const Courses = () => {
    const [courses,setCourses] = useState([])

    useEffect(()=>{
        fetch('http://127.0.0.1:4000/api/course')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])

    return (
        <div className='mt-8'>
           <div className='text-center '>
           <h1 className='font-semibold text-4xl text-black'>Featured Courses </h1>
            <p className='mt-2'>The feature courses are we invented our teaching part</p>
           </div>
           <div className='md:grid grid-cols-3 max-w-6xl mx-auto mt-4'>
            {
                courses.map(course=><CourseCard key={course._id} course={course}></CourseCard>)
            }
           </div>

        </div>
    );
};

export default Courses;