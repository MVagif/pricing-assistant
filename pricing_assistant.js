// Coding Challenge 00

"use strict";
let productName = "Eco Water Bottle";
let costPerUnit = 12.50;
let basePrice = 19.99;
let discountRate = 0.15;
let salesTaxRate = 0.07;
let fixedMonthlyCosts = 2500.00;

let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let isProfitablePerUnit = profitPerUnit > 0;
let breakEvenUnits = isProfitablePerUnit
  ? Math.ceil(fixedMonthlyCosts / profitPerUnit)
    : null;
let fmt = (n) => `$${n.toFixed(2)}`;
console.log("=== Pricing Assistant Results ===");
console.log(`Product: ${productName}`);
console.log(`Discounted Price (before tax): ${fmt(discountedPrice)}`);
console.log(`Final Price with Tax: ${fmt(finalPriceWithTax)}`);
console.log(`Profit per Unit: ${fmt(profitPerUnit)}`);
console.log(
  `Break-even Units: ${isProfitablePerUnit ? breakEvenUnits : "Not achievable (loss per unit)"}`
);
console.log(`Profitable per Unit?: ${isProfitablePerUnit}`);
