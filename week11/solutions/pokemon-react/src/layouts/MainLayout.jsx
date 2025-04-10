import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className='container mx-auto p-5'>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
