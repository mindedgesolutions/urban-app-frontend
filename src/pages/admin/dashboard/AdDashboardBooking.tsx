import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Link } from 'react-router-dom';

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '₹250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Paid',
    totalAmount: '₹150.00',
    paymentMethod: 'Cash',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Paid',
    totalAmount: '₹350.00',
    paymentMethod: 'Cash',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '₹450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '₹550.00',
    paymentMethod: 'Cash',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Paid',
    totalAmount: '₹200.00',
    paymentMethod: 'Cash',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Paid',
    totalAmount: '₹300.00',
    paymentMethod: 'Credit Card',
  },
];

type AdDashboardBookingProps = {
  title: string;
};

const AdDashboardBooking = ({ title }: AdDashboardBookingProps) => {
  return (
    <div>
      <div className="bg-muted text-muted-foreground p-2 text-xs uppercase tracking-wider font-inter font-semibold mb-4">
        {title}
      </div>
      <div className="">
        <Table className="text-xs text-muted-foreground font-inter">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                <Link to={`#`}>Go to all transactions</Link>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};
export default AdDashboardBooking;
