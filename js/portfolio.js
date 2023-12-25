document.addEventListener('DOMContentLoaded', function () {
    const transactionContainer = document.getElementById('transaction-container');

    // Function to generate a random transaction date within the last month
    function getRandomDate() {
        const currentDate = new Date();
        const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());
        return new Date(lastMonth.getTime() + Math.random() * (currentDate.getTime() - lastMonth.getTime()));
    }

    // Function to generate a random transaction type
    function getRandomTransactionType() {
        return Math.random() > 0.5 ? 'Deposit' : 'Withdrawal';
    }

    // Function to generate a random transaction amount
    function getRandomAmount() {
        return (Math.random() * 0.1 + 0.05).toFixed(8); // Random amount between 0.05 and 0.15 BTC
    }

    // Function to generate a specified number of transactions
    function generateTransactions(numTransactions) {
        for (let i = 0; i < numTransactions; i++) {
            const transaction = document.createElement('div');
            transaction.classList.add('transaction');

            const transactionType = getRandomTransactionType();
            const transactionAmount = getRandomAmount();
            const transactionDate = getRandomDate();

            transaction.innerHTML = `
                <p class="transaction-type">${transactionType}</p>
                <p class="transaction-details">${transactionType === 'Deposit' ? 'Deposited' : 'Withdrawn'} ${transactionAmount} BTC</p>
                <p class="transaction-date">${transactionDate.toLocaleString()}</p>
            `;

            transactionContainer.appendChild(transaction);
        }
    }

    // Generate 100 transactions
    generateTransactions(200);
});

document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch Bitcoin price data (replace this with a real API)
    async function fetchBitcoinPriceData() {
        try {
            const response = await fetch('https://api.coindesk.com/v1/bpi/historical/close.json');
            const data = await response.json();
            return data.bpi;
        } catch (error) {
            console.error('Error fetching Bitcoin price data:', error);
            return null;
        }
    }

    // Function to create and render a line chart using Chart.js
    function renderPriceChart(priceData) {
        const ctx = document.getElementById('priceChart').getContext('2d');

        const dates = Object.keys(priceData);
        const prices = dates.map(date => priceData[date]);

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    label: 'Bitcoin Price (USD)',
                    data: prices,
                    borderColor: '#ffbf00', // Gold color for the line
                    backgroundColor: 'rgba(255, 191, 0, 0.1)', // Light gold color for the fill
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'day',
                        },
                        title: {
                            display: true,
                            text: 'Date',
                        },
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Price (USD)',
                        },
                    },
                },
            },
        });
    }

    // Fetch Bitcoin price data and render the chart
    fetchBitcoinPriceData().then(data => {
        if (data) {
            renderPriceChart(data);
        }
    });
});