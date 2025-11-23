import { AdContentWrapper, AdPageWrapper, AdTitleWrapper } from '@/components';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AdListSubCategories = () => {
  return (
    <AdPageWrapper>
      <AdTitleWrapper title={`List of Sub-categories`} />
      <div>
        <Link to="/admin/settings/sub-categories/add">
          <Button>Add Sub-category</Button>
        </Link>
      </div>
      <AdContentWrapper>Sub-category List</AdContentWrapper>
    </AdPageWrapper>
  );
};
export default AdListSubCategories;
