"use strict";
// Inheritance style
// import { MatchReader } from './MatchReader';
// import { MatchResult } from './MatchResult';
Object.defineProperty(exports, "__esModule", { value: true });
// const reader = new MatchReader('football.csv');
// reader.read();
// let manUnitedWins = 0;
// for (const match of reader.data) {
//     if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//         manUnitedWins++;
//     } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
//         manUnitedWins++;
//     }
// }
// Composition style
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var matchReaderFromCsv = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReaderFromCsv.load();
var summaryConsole = Summary_1.Summary.winsAnalysisWithConsoleReport('Tottenham');
summaryConsole.buildAndPrintReport(matchReaderFromCsv.matches);
var summaryHtml = Summary_1.Summary.winsAnalysisWithHtmlReport('Arsenal');
summaryHtml.buildAndPrintReport(matchReaderFromCsv.matches);
