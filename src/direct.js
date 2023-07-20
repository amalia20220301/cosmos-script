import {coins, encodePubkey, makeAuthInfoBytes, makeSignDoc, Registry} from "@cosmjs/proto-signing";
import {encodeSecp256k1Pubkey} from "@cosmjs/amino";
import {defaultRegistryTypes as defaultStargateTypes} from "@cosmjs/stargate/build/signingstargateclient.js";
import {Int53} from "@cosmjs/math";

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