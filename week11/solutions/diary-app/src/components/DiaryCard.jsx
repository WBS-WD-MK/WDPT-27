import React from 'react';
import placeholder from '../assets/placeholder.jpg';
import Modal from './Modal';
import DiaryPreview from './DiaryPreview';
const DiaryCard = ({ diary }) => {
  const { img, title, date } = diary;
  return (
    <div className='card bg-base-100 shadow-sm'>
      <figure>
        <img src={img || placeholder} alt={title} className='h-48 w-full object-cover' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p className='text-sm text-gray-500'>{date}</p>
        <div className='card-actions justify-end'>
          <Modal triggerContent='Read More...' triggerStyle={'btn btn-primary'} title={title}>
            <DiaryPreview diary={diary} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default DiaryCard;
