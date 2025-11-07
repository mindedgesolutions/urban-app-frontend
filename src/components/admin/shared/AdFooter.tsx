import { titles } from '@/constants';

const AdFooter = () => {
  return (
    <div className="p-4 flex justify-end items-center bg-muted">
      <span className="font-inter text-muted-foreground text-xs tracking-wider">
        &copy;{' '}
        {`${new Date().getFullYear()} ${titles.siteName}. All rights reserved`}
      </span>
    </div>
  );
};
export default AdFooter;
