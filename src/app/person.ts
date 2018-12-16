export class Person {
    _id:string;
    name: string;
    age: number;
    height: number;

    static people : Person[] = [
        new Person("aaa", 10,100),
        new Person("bbb", 11,110),
        new Person("ccc", 12,120)
    ]

    constructor(name: string,age: number,height: number) {
        this._id    = Math.round(Math.random() * 100000) +'';
        this.name   = name;
        this.age    = age;
        this.height = height;
    }
}