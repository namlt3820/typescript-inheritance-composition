// Inheritance style
// import { MatchReader } from './MatchReader';
// import { MatchResult } from './MatchResult';

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
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReaderFromCsv = MatchReader.fromCsv('football.csv');
matchReaderFromCsv.load();

const summaryConsole = Summary.winsAnalysisWithConsoleReport('Tottenham');
summaryConsole.buildAndPrintReport(matchReaderFromCsv.matches);

const summaryHtml = Summary.winsAnalysisWithHtmlReport('Arsenal');
summaryHtml.buildAndPrintReport(matchReaderFromCsv.matches);
