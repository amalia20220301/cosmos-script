import {serializeSignDoc, makeSignDoc} from "@cosmjs/amino";

const unknownMsg = [{
    type: "/ibc.core.channel.v1.MsgAcknowledgement",
    value: {
        packet: {
            sequence: "326153",
            source_port: "provider",
            source_channel: "channel-568",
            destination_port: "consumer",
            destination_channel: "channel-0",
            data: "eyJ2YWxpZGF0b3JfdXBkYXRlcyI6W3sicHViX2tleSI6eyJlZDI1NTE5IjoiNlpTYWVaTVJkYlVRS0ZJSVRmamNTV0RKN2xJSk5VWnljbjU0eldPWUthYz0ifSwicG93ZXIiOiI1NTEyNjgifV0sInZhbHNldF91cGRhdGVfaWQiOiIxNzQ0MTE5Iiwic2xhc2hfYWNrcyI6W119",
            token: {
                amount: "1000000000",
                denom: "udaric"
            },
            timeout_height: {
                revision_number: 2,
                revision_height: 3000
            },
            timeout_timestamp: 1689751446873,
        },
        acknowledgement: "eyJyZXN1bHQiOiJBUT09In0=",
        proof_acked: "CokJCoYJCjdhY2tzL3BvcnRzL2NvbnN1bWVyL2NoYW5uZWxzL2NoYW5uZWwtMC9zZXF1ZW5jZXMvMzI2MTUzEiAI91V+1Rgm/hjYRRK/JOx1AB7bryEjpHffcqCp82QKfBoOCAEYASABKgYAAr6ExQEiLAgBEigCBL6ExQEg9/2YIT13EY2BwD1JwG4847YuX8coWqQMJjon1zkxc+kgIiwIARIoBAa+hMUBIHGQhh4g0A5e+uaXivSDO2iNvtR0eIOZhNdDzykIUoOxICIsCAESKAYKvoTFASBudGG3M3+DqFpgbFFkAn09zCqBTYbM4/BgcPeaw2az4SAiLggBEgcIGL6ExQEgGiEgaedZ9Fohd02sv7EHJX8ctL2vQqcXC1MPsHhi+QSTmEMiLggBEgcKKL6ExQEgGiEgGDryqalEiYWVx+aaePVFkaUvQRSaE5eM9+tLpufWinYiLggBEgcMPr6ExQEgGiEgsNqT+P0hHb2rACUxa/SsvKmtJuRFWJoXGZKaaJRDLMAiLwgBEggOgAG+hMUBIBohIEMNxZfL9Z+brQDGyBopxLIq3OiMtDIS1a3VRWLh8K49Ii0IARIpEPABvoTFASDysjKCUyxgBqaIsKmh9t5Tb22EzC9H2guM/EWBIpapqiAiLwgBEggS9gK+hMUBIBohIN+eqQhLIZS8rL4B9UM23xtb4AnJZtGCmVZWTi58DvYSIi8IARIIFMwHvoTFASAaISCizRa+axpzkNIcUwcHRfPT9C0bUE+nIhSjUYYNIGSd8SItCAESKRa0D76ExQEgbJmH2AmvsbSNFj4pgKEOq36xI5ME2lZ0e4mwbQjyUYcgIi0IARIpGNgavoTFASDWLDtPlAE74/Oea77uf3H589lgC9O8gHUY+RmPBxGOZiAiLQgBEika6DK+hMUBIOVaPhdxod4hlPUShXdk/1LUCXHSqw7Dul/XVEAW++9hICItCAESKRzGTb6ExQEgtGq4/8fiNMf2JDoNBaWNd+r/96qLGxi6drOpsVcUI2QgIi0IARIpHqJ4voTFASBK8jyXlOWD0fP0g132D+6oauuME//0vS/y46Z+xKdfniAiLggBEiog+pICvoTFASDfTy95DYfus7nB/TOKl5ifkOqpPgXPozdzGWicEb9kLiAiLggBEioirrsDvoTFASDKy7GAzTcWvKEENaGGAbEej961lCYDMR35IhJQ+XoB8CAiMAgBEgkkjpAHvoTFASAaISDikyajzXowv+jXV+DLxbozJEDltASwbcwvLM1SZkqiLCIuCAESKibo4g2+hMUBIBCKa1DZNZAXnG3sFZjWLuoIWvKmnVYhknrh26seVhZ0ICIuCAESKijkkRS+hMUBIG1dpjDtgO5Y3Rtb1mrxH1nYEVgsmPokUQOO2oFV/WNBICIuCAESKircsSK+hMUBINQ8AoiTtLhTrgNUHv9cgDOZ1NuQMWuLJNIldFggDpH5ICIwCAESCSyu206+hMUBIBohIM2wGYoSfeAbK70qc75TUcmyY8XSNBcBlnUTz7Q7ueRkCvwBCvkBCgNpYmMSIBUAB9F8iE7+Tp/etict4azgFU3F0PCHR9doUccgV0kHGgkIARgBIAEqAQAiJQgBEiEBTh1cVjsNsP/cum/JfcDHsTtbXJw0E1fwiCdWUEfWxrkiJwgBEgEBGiCqZQQG6g12453UPS6mqR4/2qHJCPwhp8po5eYsyBFWOSIlCAESIQFiLEa7j+wEwVU56y6P64jjKtdNEqytq5fGFW2Ie4xbOiIlCAESIQE11UQu57PTbK4kWeGkLUP1iSudxvGZr2xc0nel7BG0byInCAESAQEaIJLiEpwcnfrJWA8yyKX3a1lbN6HFBfYxI5oZuDOQhMEo",
        proof_height:{
            revision_number: "1",
            revision_height: "1614112"
        },
        signer: "cosmos1nna7k5lywn99cd63elcfqm6p8c5c4qcug4aef5"
    },
}];

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

    let serilized = Buffer.from(serializeSignDoc(signDoc)).toString('hex');
    console.log('---------------');
    console.log(serilized);
    console.log('---------------');


    console.log('---------------');
    console.log(Buffer.from(serilized, 'hex').toString());
    console.log('---------------');

}


serialize_amino(unknownMsg)