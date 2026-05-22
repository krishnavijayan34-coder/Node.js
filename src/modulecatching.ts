class SuperHero {
    name:string;
    constructor(name:string) {
        this.name=name
    }
    getName() {
        return this.name;
    }
    setName(name:string):void {
        this.name = name;
    }
}

export  default new  SuperHero("Batman");