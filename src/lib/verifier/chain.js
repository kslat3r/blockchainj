const blojVerifier = require('./bloj');

module.exports = (chain, start = 0, end = 0) => {
  end = end || chain.length + 1;

  chain = chain
    .sort((a, b) => a.index - b.index)
    .slice(start, end);

  for (let i = 1; i < chain.length; i++) {
    chain[i].prevHash = chain[i - 1].hash;

    if (!blojVerifier(chain[i])) {
      return false;
    }
  }

  return true;
};