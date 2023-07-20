import {MsgVote} from "cosmjs-types/cosmos/gov/v1/tx.js";
import {VoteOption} from "cosmjs-types/cosmos/gov/v1/gov.js";
import {longify} from "@cosmjs/stargate/build/queryclient/index.js";
import {coins, encodePubkey, makeAuthInfoBytes, makeSignDoc, Registry} from "@cosmjs/proto-signing";
import {AuthInfo, SignDoc, SignerInfo} from "cosmjs-types/cosmos/tx/v1beta1/tx.js";
import {encodeSecp256k1Pubkey} from "@cosmjs/amino";
import {Int53} from "@cosmjs/math";
import {
    defaultRegistryTypes as defaultStargateTypes,
    SigningStargateClient,
} from "@cosmjs/stargate";

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

const serialize_amino = (msg) => {
    const defaultChainId = "evmos_9000-4";
    const defaultFee = {
        amount: [{amount: "100", denom: "ucosm"}],
        gas: "250",
    };
    const defaultMemo = "Some memo";
    const defaultSequence = "0";

    const accountNumbers = [0, 1, 2, 10];
    const signDoc = makeSignDoc(msg, defaultFee, defaultChainId, defaultMemo, 0, defaultSequence);

    let serialized = Buffer.from(serializeSignDoc(signDoc)).toString('hex');

    console.log('---------------');
    console.log(Buffer.from(serialized, 'hex').toString());
    console.log('---------------');
}

const serialize_direct = (msg) => {
    const pubkey = encodePubkey(encodeSecp256k1Pubkey(Buffer.from("0280abfddd08b1ccb49d599356cf92bc6e70b30a6383660f83b51265692a7ccafc", "hex")));
    const registry = new Registry([...defaultStargateTypes])
    const txBodyFields = {
        typeUrl: "/cosmos.tx.v1beta1.TxBody",
        value: {
            messages: [
                msg
            ],
        },
    };
    const txBodyBytes = registry.encode(txBodyFields);
    const gasLimit = Int53.fromString("12345").toNumber();
    const sequence = "7890";
    const authInfoBytes = makeAuthInfoBytes(
        [{pubkey, sequence}],
        coins(2000, "uosmo"),
        gasLimit,
        "feeGranter",
        "feePayer",
    );
    const signDoc = makeSignDoc(txBodyBytes, authInfoBytes, "osmosis-1", 5684);

    const serialized = SignDoc.encode(signDoc).finish();
    console.log('---------------');
    console.log(Buffer.from(serialized).toString('hex'));
    console.log('---------------');
}


const unknownMsg = [{
    type: "",
    value: {
        source_port: 'desmos1sender',
        source_channel: 'source channel',
        token: {
            amount: "1000000000",
            denom: "udaric"
        },
        sender: 'desmos1sender',
        receiver: 'desmos1receiver',
        timeout_height: {
            revision_number: 2,
            revision_height: 3000
        },
        timeout_timestamp: 1689751446873,
    },
}]



const voteMsg = [{
    type: "cosmos-sdk/MsgVote",
    value: {
        voter: 'desmos1voter',
        option: VoteOption.VOTE_OPTION_YES,
        proposal_id: 42,
    },
}]
// serialize_amino(voteMsg)


const withdrawMsg = [{
    type: "cosmos-sdk/MsgWithdrawDelegationReward",
    value: {
        delegator_address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
        validator_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
    },
}];

const voteDirect = {
    typeUrl: "/cosmos.gov.v1beta1.MsgVote",
    value: {
        proposalId: longify(95),
        voter: "desmos1voter",
        option: VoteOption.VOTE_OPTION_NO_WITH_VETO,
    }
}

const ibcTransferDirect = {
    typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
    value:{
        sourcePort: "transfer",
        sourceChannel: "channel-192",
        token: {
            denom: "uatom",
            amount: "8036296"
        },
        sender: "cosmos1fj9fjjwdp7kv7hwjr4ergc3thqwy9ttrjscexr",
        receiver: "sif1fj9fjjwdp7kv7hwjr4ergc3thqwy9ttrhdh0fg",
        timeoutHeight: {
            revisionNumber: "1",
            revisionHeight: "12969290"
        },
        timeoutTimestamp: "1689782451643963989",
        memo: ""
    }
}

serialize_direct(ibcTransferDirect)