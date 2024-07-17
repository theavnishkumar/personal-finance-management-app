import {
  Box,
  Fab,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
  Button,
  useMediaQuery,
  useTheme,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import EditIcon from "@mui/icons-material/Edit";
import Footer from "../components/Footer";
import * as React from "react";
import { CreateRounded } from "@mui/icons-material";
import "dayjs/locale/en-gb";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import ExpenseTable from "../components/ExpenseTable";
dayjs.locale("en-gb");

const expenses = [
  {
    _id: 1,
    title: "Mango",
    date: "17/07/2024",
    amount: 34,
    category: "food",
    paymentMode: "bank transfer",
    expenseType: "expense",
  },
  {
    _id: 2,
    title: "Books",
    date: "7/07/2024",
    amount: 854,
    category: "education",
    paymentMode: "upi",
    expenseType: "expense",
  },
  {
    _id: 3,
    title: "Pen",
    date: "19/07/2024",
    amount: 94,
    category: "education",
    paymentMode: "cash",
    expenseType: "expense",
  },
  {
    _id: 4,
    title: "Ice Cream",
    date: "15/07/2024",
    amount: 45,
    category: "food",
    paymentMode: "upi",
    expenseType: "expense",
  },
  {
    _id: 5,
    title: "Salary",
    date: "2/07/2024",
    amount: 45,
    category: "salary",
    paymentMode: "Cash",
    expenseType: "income",
  },
];

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);
  const [expenseData, setExpenseData] = React.useState({
    title: "",
    amount: 0,
    date: Date.now(),
    category: "food",
    paymentMode: "upi",
    expenseType: "expense",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log(expenseData);
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Fab
        aria-label="edit"
        sx={{
          position: "fixed",
          bottom: { xs: 70, sm: 20 },
          right: 15,
          backgroundColor: "#02474d",
          color: "white",
        }}
        onClick={handleClickOpen}
      >
        <EditIcon />
      </Fab>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 1,
          gap: 2,
        }}
      >
        <ExpenseTable expenses={expenses} month="This Month" />
        <ExpenseTable expenses={expenses} month="Last Month" />
      </Box>
      {/* Dialog */}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          id="responsive-dialog-title"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <CreateRounded sx={{ mr: 1 }} />
          {"Add your expenses"}
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minWidth: 300,
              maxWidth: 350,
              gap: 2,
            }}
          >
            {/* Income & Expense Toggle */}
            <ToggleButtonGroup
              color="primary"
              sx={{ height: 35 }}
              value={expenseData.expenseType}
              exclusive
              aria-label="Platform"
              onChange={(e, value) =>
                setExpenseData({ ...expenseData, expenseType: value })
              }
            >
              <ToggleButton value="expense">Expense</ToggleButton>
              <ToggleButton value="income">Income</ToggleButton>
            </ToggleButtonGroup>

            {/* Title Field */}
            <TextField
              required
              id="standard-required"
              label="Title"
              variant="standard"
              value={expenseData.title}
              onChange={(e) =>
                setExpenseData({ ...expenseData, title: e.target.value })
              }
              sx={{ marginBottom: 1 }}
            />

            {/* Amount Field */}
            <TextField
              required
              id="standard-required"
              label="Amount"
              variant="standard"
              type="number"
              value={expenseData.amount}
              onChange={(e) =>
                setExpenseData({ ...expenseData, amount: e.target.value })
              }
            />

            {/* Date Field */}
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              adapterLocale="en-gb"
            >
              <DatePicker
                label="Date"
                value={dayjs(expenseData.date)}
                sx={{ my: 2 }}
                onChange={(date) =>
                  setExpenseData({
                    ...expenseData,
                    date: date ? date.toDate() : null,
                  })
                }
                slots={{
                  textField: (params) => <TextField {...params} />,
                }}
              />
            </LocalizationProvider>

            {/* Category Select */}
            <InputLabel id="category">Category</InputLabel>
            {expenseData.expenseType === "expense" ? (
              <Select
                labelId="category"
                id="category-select"
                value={expenseData.category || ""}
                onChange={(e) =>
                  setExpenseData({ ...expenseData, category: e.target.value })
                }
              >
                <MenuItem value="food">Food</MenuItem>
                <MenuItem value="Household">Household</MenuItem>
                <MenuItem value="education">Education</MenuItem>
                <MenuItem value="transport">Transport</MenuItem>
                <MenuItem value="health">Health</MenuItem>
                <MenuItem value="beauty">Beauty</MenuItem>
                <MenuItem value="lifestyle">Lifestyle</MenuItem>
                <MenuItem value="social life">Scoail Life</MenuItem>
                <MenuItem value="Entertainment">Entertainment</MenuItem>
                <MenuItem value="pets">Pets</MenuItem>
                <MenuItem value="culture">Culture</MenuItem>
                <MenuItem value="apperal">Apperal</MenuItem>
                <MenuItem value="gift">Gift</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            ) : (
              <Select
                labelId="category"
                id="category-select"
                value={"salary"}
                onChange={(e) =>
                  setExpenseData({ ...expenseData, category: e.target.value })
                }
              >
                <MenuItem value="salary">Salary</MenuItem>
                <MenuItem value="allowance">Allowance</MenuItem>
                <MenuItem value="bonus">Bonus</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            )}

            {/* Payment Mode Select */}
            <InputLabel id="payment-mode">Payment Mode</InputLabel>
            <Select
              labelId="payment-mode"
              id="payment-mode-select"
              value={expenseData.paymentMode}
              onChange={(e) =>
                setExpenseData({
                  ...expenseData,
                  paymentMode: e.target.value,
                })
              }
            >
              <MenuItem value="upi">UPI</MenuItem>
              <MenuItem value="cash">Cash</MenuItem>
              <MenuItem value="bank transfer">Bank Transfer</MenuItem>
            </Select>
          </Box>
        </DialogContent>

        {/* Dialog Action Buttons */}
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancle
          </Button>
          <Button onClick={handleClose} autoFocus>
            Create
          </Button>
        </DialogActions>
      </Dialog>
      {/* Footer */}
      <Box
        sx={{
          // position: "fixed",
          marginTop: 4,
          bottom: { xs: 70, sm: 20 },
          left: 0,
          right: 0,
        }}
      >
        <Footer />
      </Box>
    </div>
  );
};

export default Dashboard;
