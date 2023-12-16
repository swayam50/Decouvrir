import { Outlet } from 'react-router-dom';
import Navbar from '../modules/Navbar';
import Leftbar from '../modules/Leftbar';
import Rightbar from '../modules/Rightbar';

const Page = () => {
    return (
        <>
            <Navbar />
            <div style={{ display: 'flex' }}>
                <Leftbar />
                <Outlet />
                <Rightbar />
            </div>
        </>
    );
};

export default Page;
