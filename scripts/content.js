function addScoresToGameList() {

  let gameList = document.querySelectorAll('li.game-list-item');

  gameList.forEach((game) => {

    let gameAnchor = game.querySelector('a');
    if (gameAnchor) {

      let scores = document.createElement('span');

      // TODO: add actual scores from match page anchorElement.href
      scores.textContent = ' Win / Loss / Tie ';
      scores.style.color = 'red';

      let iconElement = gameAnchor.firstElementChild;
      gameAnchor.insertBefore(scores, iconElement.nextSibling);
    }
  });

  // TODO: calculate win rate and put it next to document.querySelector('.games-caption')
}

function waitForElementToBeAvailable(selector, maxAttempts, interval) {

  let attempts = 0;

  function check() {

    attempts++;
    const targetNode = document.querySelector(selector);

    if (!targetNode) {

      if (attempts < maxAttempts) {
        setTimeout(check, interval);
      }
    } else {
      addScoresToGameList();
    }
  }

  check();
}

waitForElementToBeAvailable('.game-list', 10, 500);
