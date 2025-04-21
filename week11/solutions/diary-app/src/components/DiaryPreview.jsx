import React from 'react';
import placeholder from '../assets/placeholder.jpg';
const DiaryPreview = ({ diary }) => {
  const { title, img, date, content } = diary;
  return (
    <div className='card bg-base-100 shadow-sm'>
      <figure>
        <img src={img || placeholder} alt={title} className='h-48 w-full object-cover' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p className='text-sm text-gray-500'>{date}</p>
        <p className='text-sm text-gray-500'>{content}</p>
      </div>
    </div>
  );
};

export default DiaryPreview;
