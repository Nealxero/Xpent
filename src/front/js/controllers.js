//Items controller 

const itemCtrl = (function(){
//constructor 
    const item = function(id, description, amount){
        this.id = id;
        this.description = description;
        this.amount = amount;

    }
    //data structure 
    const data = {items:[]}

    //public method 

    return {
        logData: function(){
            return data 
        }
    }
})();

//UI Controllers 

const UICtrl = (function(){
    //ui selectors
    const UISelectors = {
        incomeBtn: '#add_income',
        expenseBtn: '#add_expense',
        description: '#description',
        amount: '#amount',
        moneyEarned: '#amount_earned',
        moneyAvailable: '#amount_available',
        moneySpent: '#amount_spent',
        incomeList: '#income_container',
        expenseList: '#expense_container',
        incomeItem: '.income_amount',
        expenseItem : '.expense_amount',
        itemsContainer: '.items_container'
    }
    //public methods 
    return {
        //return selectors
        getSelectors: function(){
            return UISelectors
        }
    }
})();

//App controllers 
const API = (function(){
    //event listeners 
    const LoadEventListener = function(){
        //get ui selectors 
        const UISelectors = UICtrl.getSelectors();
        //add income 
        document.querySelector(UISelectors.incomeBtn).addEventListener
        ('click', addIncome);
    }

    //add income
    const addIncome = function(){
        console.log('try')
    }

    //Inic function 
    return {
        init: function(){
            LoadEventListener();
        }
    }
})(itemCtrl, UICtrl);

API.init();