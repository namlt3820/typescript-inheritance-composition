"use strict";
// Inheritance style
// import fs from 'fs';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// export abstract class CsvFileReader<T> {
//     data: T[] = [];
//     constructor(public filename: string) {}
//     abstract mapRow(row: string[]): T;
//     read(): void {
//         this.data = fs
//             .readFileSync(this.filename, { encoding: 'utf-8' })
//             .split('\n')
//             .map((row: string): string[] => row.split(','))
//             .map(this.mapRow);
//     }
// }
// Composition style
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.filename, { encoding: 'utf-8' })
            .split('\n')
            .map(function (row) { return row.split(','); });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
