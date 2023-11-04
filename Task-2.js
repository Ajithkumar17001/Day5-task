class circle {
constructor(radius,color){
    this.radius= radius,
    this.color= color
    }
radius(){
    return this.radius 
}
color(){
    return this.radius 
}

tostring(){
    return `circle [radius = ${this.radius}, color = ${this.color}]`
}
getarea(){
    return (this.radius**2)*22/7
}
getcircumstances(){
    return 2*(22/7)*this.radius
}
}

const circle1 = new circle(1.5,"red");
console.log(circle1);

console.log(circle1.radius);
console.log(circle1.color);
console.log(circle1.tostring());
console.log(circle1.getarea());
console.log(circle1.getcircumstances());


