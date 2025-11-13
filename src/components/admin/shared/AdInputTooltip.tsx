import { InputGroupButton } from '@/components/ui/input-group';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { InfoIcon } from 'lucide-react';

const AdInputTooltip = ({ msg }: { msg: string }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <InputGroupButton variant="ghost" aria-label="Info" size="icon-xs">
          <InfoIcon />
        </InputGroupButton>
      </TooltipTrigger>
      <TooltipContent>
        <p>{msg}</p>
      </TooltipContent>
    </Tooltip>
  );
};
export default AdInputTooltip;
