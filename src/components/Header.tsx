// icones
import { RxHamburgerMenu } from "react-icons/rx";

type HeaderProps = {
  title: string;
  subtitle: string;
  onMenuClick?: () => void;
  isOpen?: boolean;
};

const Header = ({ title, subtitle, onMenuClick, isOpen }: HeaderProps) => {
  return (
    <header className="bg-slate-950 p-5 flex items-start justify-between relative">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-200 mb-1">
          {title}
        </h2>

        <div className="bg-slate-600 w-16 h-1.5"></div>

        <p className="text-slate-400 mt-2">{subtitle}</p>
      </div>

      {!isOpen && (
        <button className="md:hidden text-slate-200 mt-1 cursor-pointer" onClick={onMenuClick}>
          <RxHamburgerMenu size={28} />
        </button>
      )}
    </header>
  );
};

export default Header;
