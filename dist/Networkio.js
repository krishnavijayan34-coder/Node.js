"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = __importDefault(require("https"));
const Max_calls = 8;
const start = Date.now();
for (let i = 0; i < Max_calls; i++) {
    https_1.default.request("https://www.google.com", (res) => {
        res.on("data", () => { });
        res.on("end", () => {
            console.log(`Request ${i + 1}:`, Date.now() - start);
        });
    }).end();
}
