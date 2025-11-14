// import customFetch from '@/utils/auth/custom.fetch';
import { showError } from '@/utils/show.error';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdAuthenticating = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const createToken = async () => {
      try {
        // const response = await customFetch.post(`/auth/refresh-token`);
        // if (response.status === 200)
        navigate('/admin/dashboard');
      } catch (error) {
        console.log(error);
        showError('Authentication failed. Please sign in again.');
        navigate('/admin/sign-in');
      }
    };
    createToken();
  }, []);

  return <div>AdAuthenticating</div>;
};
export default AdAuthenticating;
