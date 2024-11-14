//Line of best fit proper way
//Sample data points
const data = [
    { x: 8, y: 3 },
    { x: 2, y: 10 },
    { x: 11, y: 3 },
    { x: 6, y: 6 },
    { x: 5, y: 8 },
    { x: 4, y: 12 },
    { x: 12, y: 1 },
    { x: 9, y: 4 },
    { x: 6, y: 9 },
    { x: 1, y: 14 }
];

//step 1: Calculate means of x and y
const meanX = data.reduce((sum, point) => sum + point.x, 0) / data.length;
const meanY = data.reduce((sum, point) => sum + point.y, 0) / data.length;

//Step 2: Calculate slope (m) and y-intercept (b) of the line of best fit
let numerator = 0;
let denominator = 0;

data.forEach(point => {
    numerator += (point.x - meanX) * (point.y - meanY);
    denominator += (point.x - meanX) ** 2;
});

const m = numerator / denominator;  //Slope
const b = meanY - m * meanX;       // Y-intercept

// Display results in console
console.log("Slope (m):", m.toFixed(2));
console.log("Y-Intercept (b):", b.toFixed(2));
console.log(`Equation of the line of best fit: y = ${m.toFixed(2)}x + ${b.toFixed(2)}`);
