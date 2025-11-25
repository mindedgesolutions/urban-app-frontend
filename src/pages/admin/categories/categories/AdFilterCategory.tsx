import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import { Search } from 'lucide-react';
import { AdContentWrapper } from '@/components';

const AdFilterCategory = () => {
  return (
    <AdContentWrapper className="mt-0 md:-mt-4 mb-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <section className="col-span-1">
          <InputGroup>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
          </InputGroup>
        </section>
      </div>
    </AdContentWrapper>
  );
};
export default AdFilterCategory;
