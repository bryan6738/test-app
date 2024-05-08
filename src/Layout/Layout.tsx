// Layout.tsx
import { FC } from 'react';
import Navbar from '../Components/Navbar';
import Home from '../pages/Home';

const Layout: FC = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default Layout;