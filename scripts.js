document.getElementById("total-calculation").addEventListener("click", function () {

    const income = document.getElementById("income-amount").value;

    const rent = document.getElementById("rent").value;
    const maid = document.getElementById("maid").value;
    const electric = document.getElementById("electric").value;
    const gas = document.getElementById("gas").value;
    const water = document.getElementById("water").value;
    const wifi = document.getElementById("wifi").value;

    const expenseShow = document.getElementById("expense-show");
    const balanceShow = document.getElementById("balance-show");



    const expense = parseInt(rent) + parseInt(maid) + parseInt(electric) + parseInt(gas) + parseInt(water) + parseInt(wifi);
    const node = document.createTextNode(expense);
    expenseShow.appendChild(node);

    const balance = income - expense;
    const node2 = document.createTextNode(balance);
    balanceShow.appendChild(node2)






})



document.getElementById("savings-button").addEventListener("click", function () {

    const income = document.getElementById("income-amount").value;

    const rent = document.getElementById("rent").value;
    const maid = document.getElementById("maid").value;
    const electric = document.getElementById("electric").value;
    const gas = document.getElementById("gas").value;
    const water = document.getElementById("water").value;
    const wifi = document.getElementById("wifi").value;


    const expense = parseInt(rent) + parseInt(maid) + parseInt(electric) + parseInt(gas) + parseInt(water) + parseInt(wifi);


    const parcentage = document.getElementById("savings-percentage").value;
    const savingShow = document.getElementById("saving-show");
    const remainingShow = document.getElementById("remaining-show");

    const totalSavings = income * (parcentage/100);
    const node = document.createTextNode(totalSavings);
    savingShow.appendChild(node)

    const remainingIncome = income - expense - totalSavings;
    const node2 = document.createTextNode(remainingIncome);
    remainingShow.appendChild(node2)





})