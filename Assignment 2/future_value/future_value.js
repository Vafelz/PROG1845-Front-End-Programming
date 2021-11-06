"use strict"

// get investment amount - loop until user enters a number
let investment = 0
do {
    investment = parseFloat(
        prompt("Enter investment amount as xxxxx.xx", 10000))
}
while ( isNaN(investment) )

// get interest rate - loop until user enters a number
let rate = 0
do {
    rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5))
}
while ( isNaN(rate) )

// get number of years - loop until user enters a number
let years = 0
do {
    years = parseInt(prompt("Enter number of years", 10))
}
while ( isNaN(years) )

// calulate future yearly value
let futureValueY = investment
for (let i = 1; i <= years; i++ ) {
    futureValueY += futureValueY * rate / 100
}

// calculate future monthly value
let futureValueM = investment
futureValueM *= (1 + (rate / 100) / 12) ** (12 * years)

// display yearly results
document.write(`<p><b>Future Value with Yearly Interest</b></p>`)
document.write(`<p><label>Investment amount:</label> ${investment}</p>`)
document.write(`<p><label>Interest rate:</label> ${rate}</p>`)
document.write(`<p><label>Years:</label> ${years}</p>`)
document.write(`<p><label>Future Value:</label> ${futureValueY.toFixed(2)}</p>`)

// display monthly results
document.write(`<br><p><b>Future Value with Monthly Interest</b></p>`)
document.write(`<p><label>Investment amount:</label> ${investment}</p>`)
document.write(`<p><label>Interest rate:</label> ${rate}</p>`)
document.write(`<p><label>Years:</label> ${years}</p>`)
document.write(`<p><label>Future Value:</label> ${futureValueM.toFixed(2)}</p>`)