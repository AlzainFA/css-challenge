// index.js
function viewTransaction(id) {
  alert(`Viewing transaction details for ID: ${id}`);
}

/**
 * Don't touch this function
 * This is a component that will be rendered inside the list
 */
const transactionComponent = (transaction) => `
  <div class="row" onclick="viewTransaction('${transaction.id}')">
    <div class="transaction-info">
      <span class="amount ${transaction.type}">${transaction.amount}</span>
      <span class="description">${transaction.description}</span>
      <span class="date">${transaction.date}</span>
    </div>
  </div>
`;

/**
 * This function will render the list of transactions
 */
function renderTransactions() {
  document.getElementById("list").innerHTML = transactions
    .map(transactionComponent)
    .join("\n");
}

renderTransactions();
