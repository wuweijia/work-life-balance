"use strict";
// enum Color { Red = 1, Green, Blue }
// let colorName: string = Color[2];
// console.log(colorName);  // 显示'Green'因为上面代码里它的值是2
// function warnUser(): void {
//   console.log("This is my warning message");
// }
// warnUser()
// let someValue: any = "this is a string";
// let strLength: number = someValue.length;
// console.log(strLength);
// interface LabelledValue {
//   label: string
// }
// function printObj(labelledObj: LabelledValue) {
//   console.log(labelledObj.label);
// }
// printObj({label: '123'})
// interface SquareConfig {
//   color?: string;
//   width?: number;
//   [propName: string]: any;
// }
// function createSquare(config: SquareConfig) {
//   let newSquare = { color: "white", area: 100 };
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }
// let mySquare = createSquare({ colorr: "black", width: 120 });
// let a: number[] = [1, 2, 3, 4];
// console.log(a);
// let ro: ReadonlyArray<any> = a;
// a = ro as number[];
// interface SquareConfig {
//   color?: string;
//   width?: number;
// }
// class Greeter {
//   name: string;
//   constructor(params: string) {
//     this.name = params
//   }
// }
// const getName = new Greeter('张飞')
// class Animal {
//   name: string;
//   constructor(theName: string) { this.name = theName; }
//   move(distanceInMeters: number = 0) {
//     console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }
// class Snake extends Animal {
//   constructor(name: string) { super(name); }
//   move(distanceInMeters = 5) {
//     console.log("Slithering...");
//     super.move(distanceInMeters);
//   }
// }
// class Horse extends Animal {
//   constructor(name: string) { super(name); }
//   move(distanceInMeters = 45) {
//     console.log("Galloping...");
//     super.move(distanceInMeters);
//   }
// }
// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");
// sam.move();
// tom.move(34);
// class Animal2 {
//   private name: string;
//   constructor(theName: string) { this.name = theName; }
// }
// let an2name = new Animal2("Cat");
// an2name.name  = '123' // 错误: 'name' 是私有的.
// class Person {
//   protected name: string;
//   constructor(name: string) { this.name = name; }
// }
// class Employee extends Person {
//   private department: string;
//   constructor(name: string, department: string) {
//     super(name)
//     this.department = department;
//   }
//   public getElevatorPitch() {
//     // 这里的name可以使用
//     return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//   }
// }
// let howard = new Employee("Howard", "Sales");
// console.log(howard.getElevatorPitch());
// console.log(howard.name); // 我们不能在 Person类外使用 name，但是我们仍然可以通过 Employee类的实例方法访问，因为 Employee是由 Person派生而来的。
// class Octopus {
//   readonly numberOfLegs: number = 8;
//   constructor(protected name: string) {}
// }
// class Oct extends Octopus {
//   octname: string;
//   bab: string;
//   constructor(name: string, bab: string) {
//     super(name)
//     this.octname = this.name
//     this.bab = bab
//   }
// }
// let bab = new Oct('wang', 'li')
// let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
// // TypeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。
// let passcode = "secret passcode";
// class Employee2 {
//   private _fullName!: string;
//   public get fullName() : string {
//     return this._fullName
//   }
//   public set fullName(newName : string) {
//     if (passcode === 'secret passcode') {
//       this._fullName = newName
//     } else {
//       console.log('error: Unauthorized update of employee!');
//     }
//   }
// }
// let employee = new Employee2();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//   console.log(employee.fullName);
// }
// abstract class Department {
//   constructor(public name: string) {
//   }
//   printName(): void {
//     console.log('Department name: ' + this.name);
//   }
//   abstract printMeeting(): void; // 必须在派生类中实现
// }
// class AccountingDepartment extends Department {
//   constructor() {
//     super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
//   }
//   printMeeting(): void {
//     console.log('The Accounting   Department meets each Monday at 10am.');
//   }
//   generateReports(): void {
//     console.log('Generating accounting reports...');
//   }
// }
// let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
// department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
// department.printName();
// department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在
// class Greeter2 {
//   static standardGreeting = "Hello, there";
//   greeting: string;
//   greet() {
//     if (this.greeting) {
//       return "Hello, " + this.greeting;
//     }
//     else {
//       return Greeter2.standardGreeting;
//     }
//   }
// }
// let greeter1: Greeter2;
// greeter1 = new Greeter2();
// console.log(greeter1.greet());
// let greeterMaker: typeof Greeter2 = Greeter2;
// greeterMaker.standardGreeting = "Hey there!";
// let greeter2: Greeter2 = new greeterMaker();
// console.log(greeter2.greet());
// function buildName(firstName: string, ...restOfName: string[]) {
//   return firstName + " " + restOfName.join(" ");
// }
// let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;
//# sourceMappingURL=type.js.map