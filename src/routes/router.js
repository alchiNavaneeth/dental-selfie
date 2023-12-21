import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { ErrorPage } from '../pages/ErrorPage';
import { FirstStep } from '../pages/FirstStep';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/first",
        element: <FirstStep />,
    },
    {
        path: "/second",
        element: <div>Hello 2</div>,
    },
    {
        path: "/third",
        element: <div>Hello 3</div>,
    },
    {
        path: "/output",
        element: <div>Hello output</div>,
    }
]);
export default router;