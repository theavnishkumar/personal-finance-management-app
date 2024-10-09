/* eslint-disable react/prop-types */
import { Box, Paper, Typography } from "@mui/material";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";

const ExpensesList = ({ data, handleEdit, handleDelete }) => {
  return (
    <>
      {data.length > 0 ? (
        data.map((item) => (
          <Paper
            elevation={4}
            sx={{
              minWidth: {
                xs: 340,
                sm: 580,
                md: 750,
              },
              px: 2,
              py: 1.2,
            }}
            key={item._id}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography variant="body1">{item.title}</Typography>
                <Typography variant="caption" ml={0.2} sx={{ color: "gray" }}>
                  {item.category}
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  {new Date(item.expenseDate).toLocaleDateString("en-GB")}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "flex-end",
                    fontSize: 22,
                    pt: 0.8,
                    gap: 3,
                  }}
                >
                  <MdOutlineEdit
                    onClick={() => handleEdit(item)}
                    style={{ color: "blue", cursor: "pointer" }}
                  />
                  <MdDeleteOutline
                    onClick={() => handleDelete(item._id)}
                    style={{ color: "red", cursor: "pointer" }}
                  />
                </Box>
              </Box>
              <Box sx={{ flex: 0 }}>
                {`${item.expenseType}` === "Expense" ? (
                  <Typography variant="body2" sx={{ color: "red" }}>
                    -{item.amount}
                  </Typography>
                ) : (
                  <Typography variant="body2" sx={{ color: "green" }}>
                    +{item.amount}
                  </Typography>
                )}
                <Typography variant="caption" sx={{ color: "gray" }}>
                  {item.expenseType}
                </Typography>
              </Box>
            </Box>
          </Paper>
        ))
      ) : (
        <Typography variant="body1" sx={{ color: "gray", textAlign: "center", mt: 2 }}>
          No expenses in this month
        </Typography>
      )}
    </>
  );
};

export default ExpensesList;
