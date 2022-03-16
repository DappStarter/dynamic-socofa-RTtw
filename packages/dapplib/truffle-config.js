require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note soap unaware hunt credit equal gesture'; 
let testAccounts = [
"0x26c0fd1364ecf338170af6a3e39c8984d51c7d987872ca9cff15306aced05453",
"0x7f26f3136ed4d696174e1baa09daf7b65b4527b7d63c8a60b907484e38ec2898",
"0x0f6eef1637687aace38fb5368349ab93953e8aef5941b74def7e87e9acbf322f",
"0xf9dbdead4be64b972ed495db25b9dbd8420ed5be6a87288cb7019b46911ffbb3",
"0xfd2a354ce742b8327a53adcefdfdbb9616895e6d687901713695895a3eaf05d9",
"0x4a230c61f70378c9dd917c6b42bb9371996d39290fe469759a354cfb4639c51e",
"0x87176c9fdb429efca640308f9da76a10bc0a637cc889558053c71495ebd0b80e",
"0xcafb86c2664ffa0ebbe44fadaf9d7d2ed82a511474defd660dc6abef7da4906a",
"0xc0d8bc6a1841cf7a70356f0075466ec8c1d45acaa9c994c1d9595eeaf0996730",
"0x911b81976e270b045d127e7aea021fb22ec4be4ca53cf16eb238bf346fe186e9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

