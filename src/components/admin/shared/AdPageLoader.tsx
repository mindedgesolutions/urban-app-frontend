import { Spinner } from '@/components/ui/spinner';

const AdPageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-card-foreground/50">
      <div className="flex flex-col items-center gap-4">
        <Spinner className="size-12" />
        <span className="text-base font-inter sr-only">Loading…</span>
        <p className="text-base font-inter text-white/90">
          Loading, please wait…
        </p>
      </div>
    </div>
  );
};
export default AdPageLoader;
