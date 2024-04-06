import Link from 'next/link';
import React from 'react';

const CourseCard = (props) => {
    console.log(props.course);
    const {duration,imageUrl,name,price,skills,studentCurrent,_id} = props.course;
    return (
        <div className="w-80 h-auto bg-white shadow-md rounded-lg overflow-hidden m-4 flex flex-col">
        <img className="w-full h-56 object-cover object-center" src={imageUrl} alt={name} />

        <div className="p-4 flex flex-col flex-grow">
            <div className="flex-grow">
                <h2 className="text-gray-800 text-lg font-semibold">{name}</h2>
                <p className="mt-2 text-gray-600 text-sm">Duration: {duration}</p>
                <p className="text-gray-600 text-sm py-2">Price: <span className='font-bold'>${price}</span></p>
                <p className="text-gray-600 text-sm">Current Students: {studentCurrent}</p>
            </div>
            <div className="mt-4">
          <Link href=''> <button  className="btn btn-outline btn-info ">Enroll Now</button></Link>
            </div>
        </div>
    </div>
    
    
    );
};

export default CourseCard;