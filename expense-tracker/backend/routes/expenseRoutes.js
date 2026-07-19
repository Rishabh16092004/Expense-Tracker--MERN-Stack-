const express = require("express");
const router = express.Router();

const { 
  addExpense, 
  getExpenses, 
  updateExpense, 
  deleteExpense, 
  getCategoryData,
  getMonthlyData, 
  getAllUsersExpenses 
} = require("../controllers/expenseController");

const { protect, admin } = require("../middleware/authMiddleware");


router.post("/", protect, addExpense);
router.get("/", protect, getExpenses);
router.get("/category", protect, getCategoryData);
router.get("/monthly", protect, getMonthlyData); 
router.put("/:id", protect, updateExpense);
router.delete("/:id", protect, deleteExpense);


router.get("/admin/all", protect, admin, getAllUsersExpenses);

module.exports = router;