// 🚗 1. Managing a Ride-Booking Queue (FIFO - First In, First Out)
let rideQueue = ["Alice", "Bob", "Charlie", "David"];

// ❌ Inefficient approach (shift() moves all elements)
let assignedRider = rideQueue.shift();
console.log(`🚖 Assigned to: ${assignedRider}`); // "Assigned to: Alice"
console.log(rideQueue); // ["Bob", "Charlie", "David"]

// ✅ Better approach using splice() (removes first without shifting all)
function assignRide(queue) {
    return queue.splice(0, 1)[0];
}
assignedRider = assignRide(rideQueue);
console.log(`🚖 Assigned to: ${assignedRider}`); // "Assigned to: Bob"

// 🛒 2. Filtering Available Products in an E-Commerce App
let products = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Phone", price: 500, inStock: false },
    { name: "Tablet", price: 300, inStock: true }
];

let availableProducts = products.filter(product => product.inStock);
console.log(availableProducts);
// Shows only in-stock items

// 📅 3. Finding the Next Available Appointment in a Booking System
let appointments = [
    { time: "9:00 AM", booked: true },
    { time: "10:00 AM", booked: false },
    { time: "11:00 AM", booked: true },
    { time: "1:00 PM", booked: false }
];

// Find the first available time slot
let nextAvailable = appointments.find(appointment => !appointment.booked);
console.log(nextAvailable); // { time: "10:00 AM", booked: false }

// 📦 4. Checking if Any Items in Cart Are Out of Stock (Using some())
let cart = [
    { name: "Keyboard", quantity: 1, inStock: true },
    { name: "Mouse", quantity: 2, inStock: false },
    { name: "Monitor", quantity: 1, inStock: true }
];

// Check if at least one item is out of stock
let hasOutOfStock = cart.some(item => !item.inStock);
console.log(hasOutOfStock); // true

// 🎓 5. Checking if All Students Passed an Exam (Using every())
let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 76 }
];

// Check if all students passed (grade >= 50)
let allPassed = students.every(student => student.grade >= 50);
console.log(allPassed); // true

// 🎨 6. Applying Discounts to All Products (Using map())
let discountedProducts = products.map(product => ({
    ...product,
    price: product.price * 0.9 // Apply a 10% discount
}));
console.log(discountedProducts);
// Shows products with new discounted prices

// 🏆 7. Counting Votes in an Election (Using reduce())
let votes = ["Alice", "Bob", "Alice", "Charlie", "Bob", "Alice"];

let voteCount = votes.reduce((acc, candidate) => {
    acc[candidate] = (acc[candidate] || 0) + 1;
    return acc;
}, {});

console.log(voteCount);
/*
{
  Alice: 3,
  Bob: 2,
  Charlie: 1
}
*/
