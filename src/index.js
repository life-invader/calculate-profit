const main = (operations) => {
	const portfolio = {};
	let absProfit = 0;

	operations.forEach(({ ticker, type, qnt, price }) => {
		if (!portfolio[ticker]) {
			portfolio[ticker] = 0;
		}

		if (type === 'BUY') {
			const totalPrice = qnt * price;

			portfolio[ticker] = portfolio[ticker] - totalPrice;
			absProfit -= totalPrice;
		}

		if (type === 'SELL') {
			const totalPrice = qnt * price;

			portfolio[ticker] = portfolio[ticker] + totalPrice;
			absProfit += totalPrice;
		}
	});

	const result = { portfolio, absProfit };

	return result;
};

module.exports = main;
