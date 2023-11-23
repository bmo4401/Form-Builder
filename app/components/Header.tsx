import Logo from '@/app/components/Logo';

const Header = () => {
  return (
    <div className="px-5 justify-between flex items-center py-3 border-b border-r-slate-400">
      <Logo />
    </div>
  );
};
export default Header;
