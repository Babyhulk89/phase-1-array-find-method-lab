function superbowlWin(record) {
    // Use the find() method to check each object in the record array
    const winningYearObj = record.find(entry => entry.result === "W");
  
    // If there is a winning year, return that year. Otherwise, return undefined.
    return winningYearObj ? winningYearObj.year : undefined;
  }
  const assert = require('assert');

describe('superbowlWin', function () {
  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    //...
  ];

  it('returns a year the Denver Broncos won the Superbowl', function () {
    assert.strictEqual(superbowlWin(record), '2015');
  });

  it('returns undefined if the record has no win objects', function () {
    const recordWithoutWins = [
      { year: "2014", result: "N/A" },
      { year: "2013", result: "L" },
      //...
    ];

    assert.strictEqual(superbowlWin(recordWithoutWins), undefined);
  });
});
