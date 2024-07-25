import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../components/container/PageContainer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getUsers from '../../actions/Authactions';

export default function Security() {
    const dispatch = useDispatch();
    const res = useSelector(state => state.userReducer);
    useEffect(() => {
        getUsers(dispatch);
      }, [dispatch]);
    
    const BCrumb = [
        {
            to: '/dashboards/dashboard',
            title: 'Home',
        },
        {
            title: 'Security',
        },
    ];
    return (
        <PageContainer title="Security" description="this is Buttons page">
            {/* breadcrumb */}
            <Breadcrumb title="" items={BCrumb} />
            <h1>Security</h1>
            {res.error != null && <p>Error : {res.error}</p>}
            {res.users && <div>
                <h2>User Data</h2>
                <ul>
                    {res.users.map((user) => {
                        return (
                            <li key={user.id}><span>{user.name}</span> -- <span>{user.email}</span></li>
                        )
                    })}
                </ul>
            </div>}
        </PageContainer>
    )
}