import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  return (
    <header className='navbar bg-neutral text-neutral-content justify-between px-6'>
      <button className='btn btn-ghost text-xl'>My Diary</button>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
