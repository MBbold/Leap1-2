const products = [
    { number: 1, price: 100, name: 'Orange juice' },
    { number: 2, price: 200, name: 'Soda' },
    { number: 3, price: 150, name: 'Chocolate snack' },
    { number: 4, price: 250, name: 'Cookies' },
    { number: 5, price: 180, name: 'Gummy bears' },
    { number: 6, price: 500, name: 'Chocolates' },
    { number: 7, price: 120, name: 'Crackers' },
    { number: 8, price: 220, name: 'Potato chips' },
    { number: 9, price: 80, name: 'Small snack' },
    ];
    const coin = [500, 200, 50, 20, 10]
    let buyPro;
    const vendingMachine = (e, money, num)=>{
        if(num>e.length || num<1) return console.log("Enter valid number")
        if(e[num-1].price > money) return console.log("Not enough money")
        e.forEach((el)=>{
            if(el.number == num){
                buyPro = e.filter((ele)=> ele.number == num)         
                console.log("choose: ", buyPro)
                if(buyPro[0].number<=money){
                    const change = money - buyPro[0].price;
                    const changeMoney = coin.filter((e)=> change - e >=0)
                    console.log("changeMoney:", changeMoney)
                }
            }
        })

    }
    // vendingMachine(products, 50, 1)
    // vendingMachine(products, 400, 7)
    vendingMachine(products, 500, 9)


