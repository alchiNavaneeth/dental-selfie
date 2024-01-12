import { createHashRouter } from 'react-router-dom';
import App from '../App';
import { ErrorPage } from '../pages/ErrorPage';
import { FirstStep } from '../pages/FirstStep';
import { SecondStep } from '../pages/SecondStep';
import { ThirdStep } from '../pages/ThirdStep';
import { Output } from '../pages/Output';


const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/first",
        element: <FirstStep />,
        errorElement: <ErrorPage />
    },
    {
        path: "/second",
        element: <SecondStep />,
        errorElement: <ErrorPage />
    },
    {
        path: "/third",
        element: <ThirdStep />,
        errorElement: <ErrorPage />
    },
    {
        path: "/output",
        element: <Output />,
        errorElement: <ErrorPage />
    }
]);
export default router;