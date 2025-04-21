import { useState } from 'react';
import { Plus } from 'lucide-react';
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';
import AddDiaryForm from './components/AddDiaryForm';
import DiaryList from './components/DiaryList';

function App() {
  const [diaries, setDiaries] = useState(
    localStorage.getItem('diaries') ? JSON.parse(localStorage.getItem('diaries')) : [],
  );
  const today = new Date().toISOString().split('T')[0];
  const hasDiaryForToday = diaries.some((diary) => diary.date === today);
  return (
    <div className='flex flex-col min-h-screen bg-base-300'>
      <Header />
      <main className='container mx-auto flex-grow'>
        <div className='right-2 bottom-14 fixed p-4'>
          <Modal
            title='Add new Diary'
            triggerContent={<Plus />}
            triggerStyle={'btn btn-primary btn-circle btn-lg'}
          >
            {hasDiaryForToday ? (
              <p>You have a diary entry for today. Come back tomorrow </p>
            ) : (
              <AddDiaryForm setDiaries={setDiaries} />
            )}
          </Modal>
        </div>
        <DiaryList diaries={diaries} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
