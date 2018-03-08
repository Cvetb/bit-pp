class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
 
    print() {
        console.log(`(${this.x}, ${this.y})`);
    }
 
    description() {
        console.log('I\'m point');
    }
 }
 
 var p = new Point(3, 4);
 p.print();
 p.description();
 console.log(p.x);
 
 class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
 
    print() {
        console.log('Color point');
        super.print();
        console.log(this.color);
    }
 }
 
 var cp = new ColorPoint(5, 2, 'green');
 cp.print();
 cp.description();
 
 console.log(cp instanceof ColorPoint);
 console.log(cp instanceof Point);
 