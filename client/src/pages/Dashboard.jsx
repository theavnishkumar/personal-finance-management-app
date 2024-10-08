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
dayjs.locale("en-gb");
import axios from "axios";
import ExpensesList from "../components/ExpenseList";

const VITE_API = `${import.meta.env.VITE_API}`;

const Dashboard = () => {
  const [data, setData] = React.useState([]);
  const currentMonth = new Date().getMonth() + 1;
  const [expenseDate, setExpenseDate] = React.useState(currentMonth);

  React.useEffect(() => {
    axios
      .get(`${VITE_API}/api/expenses/monthly/${expenseDate}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error making the GET request!", error);
      });
  }, [data, expenseDate]);

  const [open, setOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [expenseData, setExpenseData] = React.useState({
    title: "",
    amount: "",
    date: Date.now(),
    category: "Food",
    paymentMode: "UPI",
    expenseType: "Expense",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!expenseData.title || !expenseData.amount) return;
    const formattedDate = new Date(expenseData.date).toISOString();
    try {
      await axios.post(`${VITE_API}/api/expenses`, {
        ...expenseData,
        expenseDate: formattedDate,
      });
      setExpenseData({
        title: "",
        amount: "",
        date: Date.now(),
        category: "Food",
        paymentMode: "UPI",
        expenseType: "Expense",
      });
      handleClose();
      // console.log("Expense saved:", response.data);
    } catch (error) {
      console.error("Error saving expense:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${VITE_API}/api/expenses/${id}`);
      if (response.status === 200) {
        setData((prevData) => prevData.filter((item) => item._id !== id));
      } else {
        console.error("Failed to delete the expense");
      }
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  const handleExpenseTypeChange = (e, value) => {
    if (value !== null) {
      const defaultCategory = value === "Expense" ? "Food" : "Salary";
      setExpenseData({
        ...expenseData,
        expenseType: value,
        category: defaultCategory,
      });
    }
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setExpenseData({
      title: item.title,
      amount: item.amount,
      date: new Date(item.expenseDate),
      category: item.category,
      paymentMode: item.paymentMode,
      expenseType: item.expenseType,
    });
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (!expenseData.title || !expenseData.amount) return;
    const formattedDate = new Date(expenseData.date).toISOString();
    try {
      const response = await axios.put(
        `${VITE_API}/api/expenses/${selectedItem._id}`,
        {
          ...expenseData,
          expenseDate: formattedDate,
        }
      );
      setData((prevData) =>
        prevData.map((item) =>
          item._id === selectedItem._id ? response.data : item
        )
      );
      handleEditClose();
    } catch (error) {
      console.error("Error updating expense:", error);
    }
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Fab
        aria-label="edit"
        sx={{
          bottom: { xs: 70, sm: 20 },
          position: "fixed",
          right: 15,
          backgroundColor: "#02474d",
          color: "white",
        }}
        onClick={handleClickOpen}
      >
        <EditIcon />
      </Fab>
      {/* Expense Select */}
      <Box sx={{ minWidth: 120, paddingLeft:2, paddingTop:1 }}>
        <InputLabel id="expense-select">Expense Month</InputLabel>
      <Select
        labelId="expense-select"
        id="expense-date-select"
        label="Expense Date"
        value={expenseDate} 
        onChange={(e) => setExpenseDate(e.target.value)} 
      >
        <MenuItem value={1}>January</MenuItem>
        <MenuItem value={2}>February</MenuItem>
        <MenuItem value={3}>March</MenuItem>
        <MenuItem value={4}>April</MenuItem>
        <MenuItem value={5}>May</MenuItem>
        <MenuItem value={6}>June</MenuItem>
        <MenuItem value={7}>July</MenuItem>
        <MenuItem value={8}>August</MenuItem>
        <MenuItem value={9}>September</MenuItem>
        <MenuItem value={10}>October</MenuItem>
        <MenuItem value={11}>November</MenuItem>
        <MenuItem value={12}>December</MenuItem>
      </Select>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 1,
          paddingTop: 2,
          gap: 1,
        }}
      >

        <ExpensesList
          data={data}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </Box>
      {/* Dialog for Adding Expense*/}
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
              onChange={handleExpenseTypeChange}
            >
              <ToggleButton value="Expense">Expense</ToggleButton>
              <ToggleButton value="Income">Income</ToggleButton>
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
            <Select
              labelId="category"
              id="category-select"
              value={expenseData.category} 
              onChange={(e) =>
                setExpenseData({ ...expenseData, category: e.target.value })
              }
            >
              {expenseData.expenseType === "Expense"
                ? [
                    <MenuItem value="Food" key="Food">
                      Food
                    </MenuItem>,
                    <MenuItem value="Household" key="Household">
                      Household
                    </MenuItem>,
                    <MenuItem value="Education" key="Education">
                      Education
                    </MenuItem>,
                    <MenuItem value="Transport" key="Transport">
                      Transport
                    </MenuItem>,
                    <MenuItem value="Health" key="Health">
                      Health
                    </MenuItem>,
                    <MenuItem value="Beauty" key="Beauty">
                      Beauty
                    </MenuItem>,
                    <MenuItem value="Lifestyle" key="Lifestyle">
                      Lifestyle
                    </MenuItem>,
                    <MenuItem value="Social life" key="Social life">
                      Social Life
                    </MenuItem>,
                    <MenuItem value="Entertainment" key="Entertainment">
                      Entertainment
                    </MenuItem>,
                    <MenuItem value="Pets" key="Pets">
                      Pets
                    </MenuItem>,
                    <MenuItem value="Culture" key="Culture">
                      Culture
                    </MenuItem>,
                    <MenuItem value="Apparel" key="Apparel">
                      Apparel
                    </MenuItem>,
                    <MenuItem value="Gift" key="Gift">
                      Gift
                    </MenuItem>,
                    <MenuItem value="Other" key="Other">
                      Other
                    </MenuItem>,
                  ]
                : [
                    <MenuItem value="Salary" key="Salary">
                      Salary
                    </MenuItem>,
                    <MenuItem value="Allowance" key="Allowance">
                      Allowance
                    </MenuItem>,
                    <MenuItem value="Bonus" key="Bonus">
                      Bonus
                    </MenuItem>,
                    <MenuItem value="Other" key="Other">
                      Other
                    </MenuItem>,
                  ]}
            </Select>

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
              <MenuItem value="UPI">UPI</MenuItem>
              <MenuItem value="Cash">Cash</MenuItem>
              <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
            </Select>
          </Box>
        </DialogContent>

        {/* Dialog Action Buttons */}
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancle
          </Button>
          <Button onClick={handleSubmit} autoFocus>
            Create
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog for Editing Expense */}
      <Dialog
        fullScreen={fullScreen}
        open={editOpen}
        onClose={handleEditClose}
        aria-labelledby="edit-dialog-title"
      >
        <DialogTitle
          id="edit-dialog-title"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <EditIcon sx={{ mr: 1 }} />
          {"Edit Expense"}
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
            <ToggleButtonGroup
              color="primary"
              sx={{ height: 35 }}
              value={expenseData.expenseType}
              exclusive
              aria-label="Platform"
              onChange={handleExpenseTypeChange}
            >
              <ToggleButton value="Expense">Expense</ToggleButton>
              <ToggleButton value="Income">Income</ToggleButton>
            </ToggleButtonGroup>

            <TextField
              required
              id="edit-title"
              label="Title"
              variant="standard"
              value={expenseData.title}
              onChange={(e) =>
                setExpenseData({ ...expenseData, title: e.target.value })
              }
              sx={{ marginBottom: 1 }}
            />

            <TextField
              required
              id="edit-amount"
              label="Amount"
              variant="standard"
              type="number"
              value={expenseData.amount}
              onChange={(e) =>
                setExpenseData({ ...expenseData, amount: e.target.value })
              }
            />

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

            <InputLabel id="edit-category">Category</InputLabel>
            <Select
              labelId="edit-category"
              id="edit-category-select"
              value={expenseData.category}
              onChange={(e) =>
                setExpenseData({ ...expenseData, category: e.target.value })
              }
            >
              {expenseData.expenseType === "Expense"
                ? [
                    <MenuItem value="Food" key="Food">
                      Food
                    </MenuItem>,
                    <MenuItem value="Household" key="Household">
                      Household
                    </MenuItem>,
                    <MenuItem value="Education" key="Education">
                      Education
                    </MenuItem>,
                    <MenuItem value="Transport" key="Transport">
                      Transport
                    </MenuItem>,
                    <MenuItem value="Health" key="Health">
                      Health
                    </MenuItem>,
                    <MenuItem value="Beauty" key="Beauty">
                      Beauty
                    </MenuItem>,
                    <MenuItem value="Lifestyle" key="Lifestyle">
                      Lifestyle
                    </MenuItem>,
                    <MenuItem value="Social life" key="Social life">
                      Social Life
                    </MenuItem>,
                    <MenuItem value="Entertainment" key="Entertainment">
                      Entertainment
                    </MenuItem>,
                    <MenuItem value="Pets" key="Pets">
                      Pets
                    </MenuItem>,
                    <MenuItem value="Culture" key="Culture">
                      Culture
                    </MenuItem>,
                    <MenuItem value="Apparel" key="Apparel">
                      Apparel
                    </MenuItem>,
                    <MenuItem value="Gift" key="Gift">
                      Gift
                    </MenuItem>,
                    <MenuItem value="Other" key="Other">
                      Other
                    </MenuItem>,
                  ]
                : [
                    <MenuItem value="Salary" key="Salary">
                      Salary
                    </MenuItem>,
                    <MenuItem value="Allowance" key="Allowance">
                      Allowance
                    </MenuItem>,
                    <MenuItem value="Bonus" key="Bonus">
                      Bonus
                    </MenuItem>,
                    <MenuItem value="Other" key="Other">
                      Other
                    </MenuItem>,
                  ]}
            </Select>

            <InputLabel id="edit-payment-mode">Payment Mode</InputLabel>
            <Select
              labelId="edit-payment-mode"
              id="edit-payment-mode-select"
              value={expenseData.paymentMode}
              onChange={(e) =>
                setExpenseData({
                  ...expenseData,
                  paymentMode: e.target.value,
                })
              }
            >
              <MenuItem value="UPI">UPI</MenuItem>
              <MenuItem value="Cash">Cash</MenuItem>
              <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
            </Select>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleEditClose}>
            Cancel
          </Button>
          <Button onClick={handleEditSubmit} autoFocus>
            Save
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
