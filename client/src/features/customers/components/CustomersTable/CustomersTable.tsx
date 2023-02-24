import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import CustomButton from '@components/CustomButton';
import { ICustomerBase } from '@interfaces/customersInterfaces';
import _isEmpty from 'lodash/isEmpty';

import CustomersEmptyState from '../CustomersEmptyState';
import { StyledTableCell, StyledTableRow } from './CustomersTable.styles';

interface ICustomersTableProps {
  customers: ICustomerBase[];
}

const CustomersTable: React.FC<ICustomersTableProps> = ({ customers }) => {
  return (
    <>
      {_isEmpty(customers) ? (
        <CustomersEmptyState />
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">E-mail</StyledTableCell>
                <StyledTableCell align="right">Telephone</StyledTableCell>
                <StyledTableCell align="right">Country</StyledTableCell>
                <StyledTableCell align="right">ID</StyledTableCell>
                <StyledTableCell align="center">Details</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map((customer) => {
                return (
                  <StyledTableRow
                    key={customer.customerID}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {customer.name || '-'}
                    </TableCell>
                    <TableCell align="right">{customer.email || '-'}</TableCell>
                    <TableCell align="right">
                      {customer.telephone || '-'}
                    </TableCell>
                    <TableCell align="right">
                      {customer.Location.country || '-'}
                    </TableCell>
                    <TableCell align="right">{customer.customerID}</TableCell>
                    <TableCell align="center">
                      <CustomButton variant="text">See details</CustomButton>
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

export default CustomersTable;
