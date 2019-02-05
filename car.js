// Total profit for 2017
const profit = data
    .filter(sale => {
        return sale.purchase_date.split("-")[0] === "2017"
    }).map(sale => {
        return sale.gross_profit
    }).reduce((a, b) => a + b, 0)
console.log(profit)
// In which month did they sell the most cars?
const mostSales = data
    .filter(sale => {
        return sale.purchase_date.split("-")[0] === "2017"
    })
    .map(sales => {
        return sales.purchase_date.split("-")[1]
    })
    .reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1
        return acc
    })
console.log(mostSales)

// Which salesperson sold the most cars?
const soldMostCars = data.filter(salesperson => salesperson.purchase_date.split("-")[0] === "2017")
    .reduce((tally, salesName) => {
        let name = `${salesName.sales_agent.first_name} ${salesName.sales_agent.last_name}`
        tally[name] = (tally[name] || 0) + 1
        return tally
    }, [])
const newVar = Object.keys(soldMostCars).sort(function (a, b) { return soldMostCars[b] - soldMostCars[a] })[0]
console.log(newVar)

// Which salesperson sold the most cars?



// Which salesperson made the most profit?
// Which model was the most popular?
// Which bank provided the most loans to our customers?

// Which month had the most cars?
// const soldMostCars = data.filter(sale => sale.purchase_date.split("-")[0] === "2017")
//     .reduce((tally, data) => {
//         let name = `${data.sales_agent.first_name} ${data.sales_agent.last_name}`
//         tally[data] = (tally[data] || 0) + 1
//         return tally
//     }, [])

// console.log({ soldMostCars })

