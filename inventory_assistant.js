// Coding Challenge 00

// Code goes here
"use strict";
/** @type {string} */
let itemName = "USB-C Cable";

/** @type {number} */ let unitCost = 3.25;
/** @type {number} */ let currentStock = 120;
/** @type {number} */ let reorderLevel = 80;
/** @type {number} */ let targetStock = 200;
/** @type {number} */ let weeklyDemand = 50;
/** @type {number} */ let supplierLeadTimeWeeks = 3;
/** @type {number} */
let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;

/** @type {number} */
let stockDeficit = Math.max(0, targetStock - currentStock);

/** @type {boolean} */
let reorderNow =
  currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;

/** @type {number} */
let reorderQuantity = reorderNow ? Math.ceil(stockDeficit) : 0;

/** @type {number} */
let estimatedReorderCost = reorderQuantity * unitCost;

let formatWeeks = (val /** @type {number} */) =>
  Number.isFinite(val) ? val.toFixed(2) : "Infinity";

let formatMoney = (val /** @type {number} */) => val.toFixed(2);

console.log("=== Inventory Assistant ===");
console.log(`Item: ${itemName}`);
console.log(`Weeks of cover: ${formatWeeks(weeksOfCover)}`);
console.log(`Reorder now?: ${reorderNow}`);
console.log(`Recommended reorder quantity: ${reorderQuantity}`);
console.log(`Estimated Cost: $${formatMoney(estimatedReorderCost)}`);
