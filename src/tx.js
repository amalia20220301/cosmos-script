import {makeSignDoc} from "@cosmjs/amino";

import {serializeSignDoc} from "@cosmjs/amino";

const msg = [
    {
        type: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value: {
            delegator_address: "cosmos1m3me9h5f2jtxxzy7rcrl6ek98u778lsvxchrcf",
            validator_address: "cosmosvaloper1ptyzewnns2kn37ewtmv6ppsvhdnmeapvtfc9y5"
        },
    },
    {
        type: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value: {
            delegator_address: "cosmos1m3me9h5f2jtxxzy7rcrl6ek98u778lsvxchrcf",
            validator_address: "cosmosvaloper1ptyzewnns2kn37ewtmv6ppsvhdnmeapvtfc9y5"
        },
    }
];

const defaultChainId = "evmos_9000-4";
const defaultFee = {
    amount: [{ amount: "100", denom: "ucosm" }],
    gas: "250",
};
const defaultMemo = "Some memo";
const defaultSequence = "0";

const accountNumbers = [0, 1, 2, 10];

const signDoc = makeSignDoc(msg, defaultFee, defaultChainId, defaultMemo, 0, defaultSequence);

let serilized = Buffer.from(serializeSignDoc(signDoc)).toString('hex');
console.log('---------------');
console.log(Buffer.from(serializeSignDoc(signDoc)).toString('hex'));
console.log('---------------');


console.log('---------------');
console.log(Buffer.from(serilized, 'hex').toString());
console.log('---------------');