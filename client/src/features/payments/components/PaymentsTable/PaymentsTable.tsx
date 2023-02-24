import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import EmptyState from '@components/EmptyState';
import { IPaymentMethod } from '@interfaces/paymentMethodsInterfaces';
import { format } from 'date-fns';
import _isEmpty from 'lodash/isEmpty';

import { StyledTableCell, StyledTableRow } from './PaymentsTable.styles';

interface PaymentsTableProps {
  payments: IPaymentMethod[];
}

const PaymentsTable: React.FC<PaymentsTableProps> = ({ payments }) => {
  return (
    <>
      {_isEmpty(payments) ? (
        <EmptyState text="No payment methods found" />
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Method</StyledTableCell>
                <StyledTableCell align="right">Expire Date</StyledTableCell>
                <StyledTableCell align="right">Last Four</StyledTableCell>
                <StyledTableCell align="right">Register</StyledTableCell>
                <StyledTableCell align="right">Location</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {payments.map((payment) => {
                return (
                  <StyledTableRow
                    key={payment.nameOnCard}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {payment.nameOnCard || '-'}
                    </TableCell>
                    <TableCell align="right">
                      {payment.methodType || '-'}
                    </TableCell>
                    <TableCell align="right">
                      {`${payment.expiryMonth}/${payment.expiryYear}` || '-'}
                    </TableCell>
                    <TableCell align="right">
                      {payment.cardLastFour || '-'}
                    </TableCell>
                    <TableCell align="right">
                      {format(
                        new Date(payment.registration_time),
                        'yyyy-MM-dd'
                      )}
                    </TableCell>
                    <TableCell align="right">
                      {payment.BillingAddress.city &&
                      payment.BillingAddress.country
                        ? `${payment.BillingAddress.city}/${payment.BillingAddress.country}`
                        : '-'}
                    </TableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default PaymentsTable;
