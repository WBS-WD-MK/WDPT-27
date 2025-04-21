import React from 'react';
import DiaryCard from './DiaryCard';

const DiaryList = ({ diaries }) => {
  const sortedDiaries = [...diaries].sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <div className='grid grid-col-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-4 p-4'>
      {sortedDiaries.map((diary) => (
        <DiaryCard key={diary.id} diary={diary} />
      ))}
    </div>
  );
};

export default DiaryList;
