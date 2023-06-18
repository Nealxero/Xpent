import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>Xpent</h1>
			<div className="budget_numbers">
				<div className="number" id="earned">
					<small>Money Earned</small>
					<p id="earned_symbol">$</p>
					<span id="amount_earned">100</span>
				</div>
				<div className="number" id="available">
					<small>Balance</small>
					<p>$</p>
					<span id="amount_available">100</span>
				</div>
				<div className="number" id="Spent">
					<small>Money Spent</small>
					<p id="spent_symbol">$</p>
					<span id="amount_spent">100</span>
				</div>
			</div>
		<div className="input_area">
			<input type="text" id="description" placeholder="Description"></input>
			<input type="number" id="amount" placeholder="Amount"></input>

		</div>
		<div className="buttons_container">
			<button id="add_income">Add Income </button>
			<button id="add_expense">Add Expense </button>
		</div>
		<div className="items_container">
			<div className="container" id="income_container">
				<h2> Income </h2>

				<div className="item income">
					<h4> Sold Items</h4>
					<div className="item_income">
						<p className="symbol">$</p>
						<span className="income_amount"> 100 </span>
					</div>
					<i className="far fa-trash-alt" id="#far"></i>
				</div>
			</div>
			
			<div className="container" id="expenses_container">
				<h2> Expenses </h2>

				<div className="item expense"> 
					<h4> Purchases </h4>
					<div className="item_expense">
						<p className="symbol"> $ </p>
						<span className="expense_amount"> 100</span>
					</div>
					<i className="far fa-trash-alt" id="far"></i>
				</div>
			</div>
		</div>
		</div>

		
		
	);
};
