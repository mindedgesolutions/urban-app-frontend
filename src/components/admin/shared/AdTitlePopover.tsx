import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { InfoIcon } from 'lucide-react';

const AdTitlePopover = ({ info }: { info: string }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <InfoIcon className="ml-2 cursor-pointer font-extralight h-4 w-4 text-muted-foreground" />
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none text-xs font-medium">Note:</h4>
            <p className="text-muted-foreground text-xs">{info}</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
export default AdTitlePopover;
