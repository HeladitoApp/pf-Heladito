import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../componentes/loading/loading';


// const ProtectedRoute = ({ component, ...args }) => {
//     <Route
//         element={withAuthenticationRequired(component, {
//             onRedirecting: () => <Loading />,
//         })}
//         {...args}
//     />
// }

const ProtectedRoute = ({ component }) => {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => (
            <div className="page-layout">
                <Loading />
            </div>
        ),
    });

    return <Component />;
};

export default ProtectedRoute