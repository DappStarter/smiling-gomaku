require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict hero force spot toy note oval unit gesture forum equal gasp'; 
let testAccounts = [
"0x7d900db1f8ea2b0527c894cca3f7b037bb22eac9f29539e7567c5b5b5dfb6f0c",
"0x5ad7b39debdc1b3354f993d61a3c52f0dfa5f5faeca93221ffb86391bba3478c",
"0x5454006819d2d9162c2d2e81c193eb90df533d2d4b54b46a631b250cd2e4d022",
"0xdc674b18ad7a4208ec417220382a661f9327ad13725dad3f739379eef87faacd",
"0x709987e587a063a6871263d334f46777b26a17cdc0bb3ca095024c5988c24655",
"0x9b58105e9dbc250d0eb8c39339188e313feb94ceae0cc3a07689739aa18ae11f",
"0x9cc6bbb989f213414aee2b6bd298750ddd280179877a203f4fedff474e501526",
"0x7bf230e3396f8f775d77bb5a75df589d22b1aeb395bc0f92425869021d039f86",
"0x83b112461cc1395e719e18e8912502072772a8beb18a31a106e35e6ca02bab80",
"0x4b2aa6e990f9c32d8492a7bf3ad5e3333c8262e70decffec043b35c40939d313"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

