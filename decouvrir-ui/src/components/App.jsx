import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Auth from './layouts/Auth';
import Page from './layouts/Page';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProtectedRoute from './providers/ProtectedRoute';

const App = () => {
    const isUserActive = false;

    const router = createBrowserRouter([
        {
            path: '/auth',
            element: <Auth />,
            children: [
                {
                    path: '/auth/login',
                    element: <Login />
                },
                {
                    path: '/auth/register',
                    element: <Register />
                }
            ]
        },
        {
            path: '/:username',
            element: (
                <ProtectedRoute isUserActive={isUserActive}>
                    <Page />
                </ProtectedRoute>
            ),
            children: [
                {
                    path: '/:username',
                    element: <Home />
                },
                {
                    path: '/:username/profile',
                    element: <Profile />
                }
            ]
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
};

export default App;
