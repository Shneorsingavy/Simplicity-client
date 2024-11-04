import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TbLogout } from "react-icons/tb";
import UseUsers from '../hooks/UseUsers';
import UseProjects from '../hooks/UseProjects';
import { IProject } from '../utils/types';
import SideBar2 from './SideBar2';
import logoImg from '../assets/logoSimplicity.webp';
import { SideProps } from '../utils/types';
import LogoutPopup from '../components/LogoutPopUp';



const Side: React.FC<SideProps> = ({ isOpen }) => {
  
  const [projectList, setProjectList] = useState<IProject[]>([]);
  const { getAllProjects } = UseProjects();
  const [viewProjects, setViewProjects] = useState(false);
  const [popUpLogOut, setPopUpLogOut] = useState(false);

  const handleProjectList = async () => {
    if (viewProjects) {
      setViewProjects(false);
      return;
    }
    setViewProjects(true);
    await getAllProjects(setProjectList);
  };

  useEffect(() => {
    if (!isOpen) setViewProjects(false);
  }, [isOpen]);

  const { logout } = UseUsers();

  const handleLogoutConfirm = () => {
    logout();
    setPopUpLogOut(false);
  };

  return (
    <>
      <aside
        className={`fixed top-0 right-0 z-50 w-[150px] h-full bg-black text-white p-4 transform transition-transform duration-300 ease-in-out flex flex-col justify-between ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ zIndex: 1000 }}
      >
        <NavLink to="/about" className='relative flex justify-center items-center mb-6 mt-1'>
          <img src={logoImg} alt="Image" className='w-28 rounded-full' />
        </NavLink>

        <div className='flex flex-col items-center space-y-4 mt-4'>
          <div className='hover:text-green-400 hover:border-green-400 border-b-2 flex items-center gap-2 hover:cursor-pointer'>
            <span onClick={handleProjectList}>Projects</span>
          </div>

          <NavLink to="/users" className={({ isActive }) => isActive ? 'text-green-400 border-b-2 border-green-400' : 'hover:text-green-400 hover:border-b-2 hover:border-green-400 transition-colors duration-200'}>
            Users
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-green-400 border-b-2 border-green-400' : 'hover:text-green-400 hover:border-b-2 hover:border-green-400 transition-colors duration-200'}>
            About Us
          </NavLink>
        </div>

        <div className='flex flex-col items-center mt-auto'>
          <h2 className='mb-4'>MSbit</h2>
          <button onClick={() => setPopUpLogOut(true)} className="text-xl hover:text-red-400 transition-colors duration-200">
            <TbLogout />
          </button>
        </div>
      </aside>

      {isOpen && <SideBar2 projectList={projectList} viewProjects={viewProjects} />}
      {popUpLogOut && <LogoutPopup onConfirm={handleLogoutConfirm} onClose={() => setPopUpLogOut(false)} />}
    </>
  );
};

export default Side;
