import { AdContentWrapper, AdPageWrapper, AdTitleWrapper } from '@/components';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AdListCategories = () => {
  return (
    <AdPageWrapper>
      <AdTitleWrapper title={`List of Categories`} />
      <div>
        <Link to="/admin/settings/categories/add">
          <Button>Add Category</Button>
        </Link>
      </div>
      <AdContentWrapper>Category List</AdContentWrapper>
    </AdPageWrapper>
  );
};
export default AdListCategories;
