import React from 'react';
import courseData from '@/data/music_course.json';
import  NotFound  from '@/components/NotFound';
import CourseDetails from '@/components/CourseDetails';
const Product = ({params} : {params : { slug : string }}) => {
  const course = courseData.courses.find((course)=> course.slug === params.slug);
  if(!course){
    return <NotFound/>
  } 
  return <CourseDetails course={course}/>
}

export default Product;
