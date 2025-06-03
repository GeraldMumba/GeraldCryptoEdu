
// script.js
const toggleDarkBtn = document.getElementById('toggle-dark');
toggleDarkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Fetch live prices from Binance API
async function fetchPrices() {
  const response = await fetch('https://api.binance.com/api/v3/ticker/price');
  const data = await response.json();
  const container = document.getElementById('crypto-container');
  container.innerHTML = '';
  const topCoins = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT'];
  topCoins.forEach(symbol => {
    const coin = data.find(item => item.symbol === symbol);
    if (coin) {
      container.innerHTML += `<div class="col-md-3">
        <div class="card text-center border-info">
          <div class="card-body">
            <h5 class="card-title">${coin.symbol}</h5>
            <p class="card-text">$${parseFloat(coin.price).toFixed(2)}</p>
          </div>
        </div>
      </div>`;
    }
  });
}
fetchPrices();

// Comments section
function addComment() {
  const textArea = document.getElementById('comment');
  const commentText = textArea.value.trim();
  if (commentText !== '') {
    const commentSection = document.getElementById('comments-section');
    const comment = document.createElement('p');
    comment.textContent = commentText;
    comment.className = 'border p-2 rounded bg-white';
    commentSection.appendChild(comment);
    textArea.value = '';
  }
}
