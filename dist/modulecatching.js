"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SuperHero {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
exports.default = new SuperHero("Batman");
