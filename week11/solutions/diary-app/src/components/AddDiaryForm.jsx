import { useState } from 'react';
const AddDiaryForm = ({ setDiaries, closeModal }) => {
  const [diary, setDiary] = useState({
    title: '',
    img: '',
    content: '',
    date: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, content, date, img } = diary;
    if (!title || !content || !date) {
      alert('please fill all fields');
    }
    setDiaries((prev) => {
      const newDiary = {
        id: self.crypto.randomUUID(),
        title,
        content,
        date,
        img,
      };
      const updatedDiaries = [...prev, newDiary];
      localStorage.setItem('diaries', JSON.stringify(updatedDiaries));
      return updatedDiaries;
    });
    closeModal();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.elements);
    setDiary((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form onSubmit={handleSubmit} className=''>
      <fieldset className='fieldset w-full p-4'>
        <label className='fieldset-label'>Title</label>
        <input
          type='text'
          className='input w-full'
          name='title'
          value={diary.title}
          onChange={handleChange}
        />
        <label className='fieldset-label'>Image</label>
        <input
          type='text'
          className='input w-full'
          name='img'
          value={diary.img}
          onChange={handleChange}
        />
        <label className='fieldset-label'>Date</label>
        <input
          type='date'
          className='input w-full'
          name='date'
          value={diary.date}
          onChange={handleChange}
        />
        <label className='fieldset-label'>Content</label>
        <textarea
          type='text'
          className='textarea w-full'
          name='content'
          value={diary.content}
          onChange={handleChange}
        />

        <button className='btn btn-primary mt-4'>Add Diary</button>
      </fieldset>
    </form>
  );
};
export default AddDiaryForm;
