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
const salesPersonWithHighestSales = data
.filter(sale => {
    return sale.purchase_date.split("-")[0] === "2017"
})
// .map(agents => {
//     return `${agents.sales_agent.first_name} ${agents.sales_agent.last_name}`
// })
.reduce((acc, curr) => {
     acc[curr] = (acc[curr] || 0) + 1
     console.log({acc})
     return acc
})


// console.log(salesPersonWithHighestSales)

// Which salesperson sold the most cars?



// Which salesperson made the most profit?
// Which model was the most popular?
// Which bank provided the most loans to our customers?