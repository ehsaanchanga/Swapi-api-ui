import Navbar from './Navbar';
import Footer from './Footer';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      {router.pathname !== '/404' && <Navbar />}
      {children}
      {router.pathname !== '/404' && <Footer />}
    </>
  );
};

export default Layout;
