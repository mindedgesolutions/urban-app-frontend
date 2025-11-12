import AdTitlePopover from './AdTitlePopover';

type TitleProps = {
  title: string;
  info?: string;
};

const AdTitleWrapper = ({ title, info }: TitleProps) => {
  return (
    <div className="bg-sidebar p-2 mb-4 flex items-center">
      <h1 className="font-inter text-sm font-semibold tracking-wide">
        {title}
      </h1>
      {info && <AdTitlePopover info={info} />}
    </div>
  );
};
export default AdTitleWrapper;
