import {coins, encodePubkey, makeAuthInfoBytes, makeSignDoc, Registry} from "@cosmjs/proto-signing";
import {encodeSecp256k1Pubkey} from "@cosmjs/amino";
import {defaultRegistryTypes as defaultStargateTypes} from "@cosmjs/stargate/build/signingstargateclient.js";
import {Int53} from "@cosmjs/math";
import {longify} from "@cosmjs/stargate/build/queryclient/index.js";
import {VoteOption} from "secretjs";
import {AuthInfo, SignDoc, SignerInfo} from "cosmjs-types/cosmos/tx/v1beta1/tx.js";

const serialize_direct = (messages) => {
    const pubkey = encodePubkey(encodeSecp256k1Pubkey(Buffer.from("0280abfddd08b1ccb49d599356cf92bc6e70b30a6383660f83b51265692a7ccafc", "hex")));
    const registry = new Registry([...defaultStargateTypes])
    const txBodyFields = {
        typeUrl: "/cosmos.tx.v1beta1.TxBody",
        value: {
            messages,
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
    value: {
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

const withdrawRewardDirect = [{
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
    value: {
        delegatorAddress: "mantle1ceeqym2q878ek9337a5m7dp724cap00npx7e0h",
        validatorAddress: "mantlevaloper1yvrw5z5ec0n9c253hpy5lkq9cufmk8dvjqnfz8"
    }
},
    {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value: {
            delegatorAddress: "mantle1ceeqym2q878ek9337a5m7dp724cap00npx7e0h",
            validatorAddress: "mantlevaloper1gp957czryfgyvxwn3tfnyy2f0t9g2p4pmkjlwt",
            amount: {
                amount: 142609181,
                denom: "umntl"
            }
        }
    }]

serialize_direct(withdrawRewardDirect)