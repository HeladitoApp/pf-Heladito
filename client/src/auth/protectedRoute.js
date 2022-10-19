import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../componentes/loading/loading';

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