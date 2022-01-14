require('@nomiclabs/hardhat-waffle');

const ALCHEMY_API_KEY = 'MZxJJjXP63tH7ZM8MiGn6JNAvR1qVB6j';

const ROPSTEN_PRIVATE_KEY = '677c60b59748776b144c482d559b6ccc16cec31f4f6668e96a61fa14bfb73a87';

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`],
    },
  },
};