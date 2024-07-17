import * as React from "react";
import PropTypes from "prop-types";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { CiMenuKebab } from "react-icons/ci";
import { DeleteForeverRounded } from "@mui/icons-material";

const ExpenseTable = ({ expenses, month }) => {
  const [selectedExpense, setSelectedExpense] = React.useState(null);
  //   const [open, setOpen] = React.useState(false);

  const handleClickOpen = (expense) => {
    setSelectedExpense(expense);
  };

  const handleClose = () => {
    setSelectedExpense(null);
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ maxWidth: { xs: 340, sm: 580, md: 750 } }}
      >
        <Typography variant="h6" align="center" sx={{ mt: 1 }}>
          {month}
        </Typography>
        <Table aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="left">Category</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">More</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.map((expense) => (
              <TableRow key={expense._id}>
                <TableCell>{expense.title}</TableCell>
                <TableCell>{expense.category}</TableCell>
                <TableCell>{`Rs.${expense.amount}`}</TableCell>
                <TableCell>
                  <CiMenuKebab onClick={() => handleClickOpen(expense)} />
                  <Dialog
                    open={selectedExpense?._id === expense._id}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                  >
                    <DialogTitle id="responsive-dialog-title">
                      {`Details of ${expense.title}`}
                    </DialogTitle>
                    <DialogContent
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {`Product: ${expense.title}`}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {`Category: ${expense.category}`}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {`Amount: Rs.${expense.amount}`}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {`Date: ${expense.date}`}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {`Payment Mode: ${expense.paymentMode}`}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {`Type: ${expense.expenseType}`}
                      </Typography>
                    </DialogContent>
                    <DialogActions
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <DeleteForeverRounded sx={{ color: "red", ml: 3 }} />
                      <Button autoFocus onClick={handleClose}>
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

ExpenseTable.propTypes = {
  expenses: PropTypes.array.isRequired,
  month: PropTypes.string.isRequired,
};

export default ExpenseTable;
