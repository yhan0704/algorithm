// You have an array of logs.  Each log is a space delimited string of words.

// For each log, the first word in each log is an alphanumeric identifier.  Then, either:

// Each word after the identifier will consist only of lowercase letters, or;
// Each word after the identifier will consist only of digits.
// We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.

// Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.

// Return the final order of the logs.

//debug
const logs = [
  "dig1 8 1 5 1",
  "let1 art can",
  "dig2 3 6",
  "let2 own kit dig",
  "let3 art zero",
];

let reorderLogFiles = function (logs) {
  const letterLogs = [];
  const digitLogs = [];

  logs.forEach((log) => {
    if (/\s\d/.test(log)) {
      digitLogs.push(log);
    } else {
      letterLogs.push(log);
    }
  });
  console.log(digitLogs);
  //use sort, localcompare, and indexOf
  letterLogs.sort((a, b) => {
    //slice after identifier
    const firstString = a.slice(a.indexOf(" ") + 1);
    const secondString = b.slice(b.indexOf(" ") + 1);
    //
    if (!firstString.localeCompare(secondString)) {
      return a.localeCompare(b);
    }
    return firstString.localeCompare(secondString)
  });

  return [...letterLogs, ...digitLogs];
};

console.log(reorderLogFiles(logs));
