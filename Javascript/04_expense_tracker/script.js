document.addEventListener('DOMContentLoaded', () => {

    const expenseForm = document.getElementById('expense-form');
    const expenseNameInput = document.getElementById('expense-name');
    const expenseAmountInput = document.getElementById('expense-amount');
    const expenseList = document.getElementById('expense-list');
    const totalExpenseDisplay = document.getElementById('total-amount');

    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    renderExpenses();

    let totalAmount = calculateTotal();

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = expenseNameInput.value.trim();
        const amount = parseFloat(expenseAmountInput.value.trim());

        if (name !== "" && !isNaN(amount) && amount > 0.0) {

            const newExpense = {
                id: Date.now(),
                name,
                amount
            }
            expenses.push(newExpense);
            saveExpensesToLocal();
            renderExpenses();
            updateTotal();

            expenseNameInput.value = "";
            expenseAmountInput.value = "";
        }
    });

    function calculateTotal() {
        return expenses.reduce((sum, expense) => sum + expense.amount, 0);
    }

    function saveExpensesToLocal() {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }

    function updateTotal() {
        const total = calculateTotal();
        totalExpenseDisplay.textContent = total.toFixed(2);

    }

    function renderExpenses() {
        expenseList.innerHTML = "";
        expenses.forEach((expense, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
            ${expense.name} - ${expense.amount}
            <button data-id = "${expense.id}">Delete</button>
            `;
            expenseList.appendChild(li);

            li.querySelector('button').addEventListener('click', () => {
                expenses.splice(index, 1);
                saveExpensesToLocal();
                updateTotal();
                renderExpenses();
            })
        });
    }

});