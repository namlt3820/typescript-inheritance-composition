"use strict";
// Inheritance style
// import { CsvFileReader } from './CsvFileReader';
// import { dateStringToDate } from './utils';
// import { MatchResult } from './MatchResult';
Object.defineProperty(exports, "__esModule", { value: true });
// type MatchData = [Date, string, string, number, number, MatchResult, string];
// export class MatchReader extends CsvFileReader<MatchData> {
//     mapRow(row: string[]): MatchData {
//         return [
//             dateStringToDate(row[0]),
//             row[1],
//             row[2],
//             parseInt(row[3]),
//             parseInt(row[4]),
//             row[5] as MatchResult,
//             row[6],
//         ];
//     }
// }
// Composition style
var utils_1 = require("./utils");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchReader.fromCsv = function (filename) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(filename));
    };
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (row) { return [
            utils_1.dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6],
        ]; });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
