import 'dotenv/config'
import constants from 'bip44-constants'
import bip32 from 'bip32'

const secret = constants.filter(item => item[1] === 'SCRT')
console.log({
    secret
})

const getNetwork = () {
    /* https://github.com/iancoleman/bip39/blob/c4f0c2908faab1452937e50a7d3a400fed42a0a8/src/js/bitcoinjs-extensions.js */
    return {
        bip32: {
            public: 0x0488B21E,
            private: 0x0488ADE4,
        },
        pubKeyHash: 0x3c,
        scriptHash: 0x7a,
        wif: 0x80,
    };
}

const getAddress = () => {
    const root = bip32.fromSeed(
        Buffer.from(
            // abandon
            process.env.SEED,
            'hex',
            ),
            );
    const childAuto = root.derivePath("m/44'/529'/0'/0/0");
    const childManual = root
        .deriveHardened(44)
        .deriveHardened(175)
        .deriveHardened(0)
        .derive(0)
        .derive(0);
    return getAddress(childAuto, getNetwork());
}