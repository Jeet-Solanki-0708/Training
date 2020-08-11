const account={
    name:'Dhairya',
    expense:[],
    income:[],
    addExpense: function(description,amount){
        this.expense.push({
            description:description,
            amount:amount
        })
    },
    addIncome: function(description,amount){
        this.income.push({
            description:description,
            amount: amount
        })
    },
    getAccountSummary: function(){
        let totalExpense=0
        let totalIncome=0
        for(let i=0;i<this.expense.length;i++){
            totalExpense=totalExpense+this.expense[i].amount
        }
        for(let i=0;i<this.income.length;i++){
            totalIncome=totalIncome+this.income[i].amount
        }
        return `${this.name} has ${totalIncome-totalExpense}`
    }
}

account.addExpense('Coffee',10)
account.addExpense('Coffee',10)
account.addExpense('Coffee',10)
account.addExpense('Coffee',100)
account.addIncome('Coffee',200)
console.log(account.getAccountSummary())

