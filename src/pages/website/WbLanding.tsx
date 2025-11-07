import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WbLanding = () => {
  return (
    <div className="p-4">
      <Link to={`/admin/sign-in`}>
        <Button variant="default">Go to Admin Sign In</Button>
      </Link>
    </div>
  );
};
export default WbLanding;
