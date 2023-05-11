class Statistics {
  constructor() {
    this.gameResults = [];
  }
  addGameToStatistics(winOrLose, bid) {
    let gameResult = { win: winOrLose, bid: bid };
    this.gameResults.push(gameResult);
  }
  showGameStatistics() {
    let games = this.gameResults.length;
    let wins = this.gameResults.filter((result) => result.win).length;
    let losses = this.gameResults.filter((result) => !result.win).length;

    // let wins = 0;
    // let losses = 0;
    // this.gameResults.forEach((result) => (result.win ? wins++ : losses++));

    return [games, wins, losses];
  }
}
