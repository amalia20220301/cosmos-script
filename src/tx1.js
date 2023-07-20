import {Wallet, SecretNetworkClient, MsgSend, MsgMultiSend, VoteOption} from "secretjs";

const myAddress="secret1ey8gvq402jq5yekl7w9zkg20udpguezegrpd0m";

const url = "http://testnet.securesecrets.org:1317";

const secretjs = new SecretNetworkClient({
    url,
    chainId: "pulsar-2",
    walletAddress: myAddress,
});

const checkBalance = async ()=>{
    const {
        balance: { amount },
    } = await secretjs.query.bank.balance(
        {
            address: myAddress,
            denom: "uscrt",
        }
    );

    console.log(`I have ${Number(amount) / 1e6} SCRT!`);
}

const tx = await secretjs.tx.gov.vote(
    {
        voter: myAddress,
        proposalId: 95,
        option: VoteOption.VOTE_OPTION_UNSPECIFIED,
    },
    {
        broadcastCheckIntervalMs: 100,
        gasLimit: 5_000_000,
    },
);
console.log('---------------');
console.log({tx});
console.log('---------------');