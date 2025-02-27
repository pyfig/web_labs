class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

// Creating a Rectangle object
const rectangle = new Rectangle(5, 3);

// Calculating and displaying area and perimeter
console.log(`Rectangle Information:`);
console.log(`Area: ${rectangle.calculateArea()}`);
console.log(`Perimeter: ${rectangle.calculatePerimeter()}`);