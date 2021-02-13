function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}
const player = document.querySelector('#player');
const coin = document.querySelector('#coin');
const extractPos = (pos) => {
  if (!pos) return 100;
  return parseInt(pos.slice(0, -2));
};

const moveCoin = () => {
  const x = Math.floor(Math.random() * window.innerHeight);
  const y = Math.floor(Math.random() * window.innerWidth);

  coin.style.top = `${x}px`;
  coin.style.left = `${y}px`;
};

window.addEventListener('keyup', function (e) {
  console.log(e.key);
  if (e.key === 'ArrowDown') {
    const currPos = extractPos(player.style.top);
    player.style.top = `${currPos + 50}px`;
  } else if (e.key === 'ArrowUp') {
    const currPos = extractPos(player.style.top);
    player.style.top = `${currPos - 50}px`;
  } else if (e.key === 'ArrowRight') {
    const currPos = extractPos(player.style.left);
    player.style.left = `${currPos + 50}px`;
    player.style.transform = 'scaleX(1)';
  } else if (e.key === 'ArrowLeft') {
    const currPos = extractPos(player.style.left);
    player.style.left = `${currPos - 50}px`;
    player.style.transform = 'scaleX(-1)';
  }
  if (isTouching(player, coin)) {
    moveCoin();
  }
});

moveCoin();
