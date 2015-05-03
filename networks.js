var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('c1a3c977'),
  addressVersion: 0x19,
  privKeyVersion: 143,
  P2SHVersion: 72,
  hkeyPublicVersion: 0x0473aee7,
  hkeyPrivateVersion: 0x0473d25e,
  genesisBlock: {
    hash: hex('493378045754BFE4DA6E10B75F64581B78B51A0FB4D77EF54018239CD60D0000'),
    merkle_root: hex('86F66EFED30FFC2AC0B1A3B7341268173A916A753FC2AFA8430D5D6526D39666'),
    height: 0,
    nonce: 1137703,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1429442154,
    bits: 504365055,
  },
  dnsSeeds: [
    'dnsseed.bti.ssdpool.com',
    '45.55.161.192',
    '71.61.206.57',
    '81.84.242.139',
    '45.55.161.192'
  ],
  defaultClientPort: 17991
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 117991
};
