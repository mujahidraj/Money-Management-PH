document.getElementById("total-calculation").addEventListener("click",function(){

    const income = document.getElementById("income-amount").value;

    const rent = document.getElementById("rent").value;
    const maid = document.getElementById("maid").value;
    const electric = document.getElementById("electric").value;
    const gas = document.getElementById("gas").value;
    const water = document.getElementById("water").value;
    const wifi = document.getElementById("wifi").value;

    const expenseShow = document.getElementById("expense-show");
        const balanceShow = document.getElementById("balance-show");

  

    const expense = parseInt(rent) + parseInt(maid)+parseInt(electric) + parseInt(gas) + parseInt(water) + parseInt(wifi);
    const node = document.createTextNode(expense);
    expenseShow.appendChild(node);

    const balance = income-expense;
    const node2 = document.createTextNode(balance);
    balanceShow.appendChild(node2)






})