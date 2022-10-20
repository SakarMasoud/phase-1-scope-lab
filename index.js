// Write your solution in this file!

var customerName = `bob`
const leastFavoriteCustomer = `sakar`

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
    return customerName
}

function setBestCustomer(){
    globalThis.bestCustomer = `not bob`
    return bestCustomer
}

function overwriteBestCustomer(){
    bestCustomer = `maybe bob`
    return bestCustomer
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = `sakar masoud`
    return leastFavoriteCustomer
}