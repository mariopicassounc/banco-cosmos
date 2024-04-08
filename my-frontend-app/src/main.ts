import { Client } from "../../ts-client";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";

const mnemonic =
  "play butter frown city voyage pupil rabbit wheat thrive mind skate turkey helmet thrive door either differ gate exhibit impose city swallow goat faint";
const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic);

const client = new Client(
  {
    apiURL: "http://localhost:1317",
    rpcURL: "http://localhost:26657",
    prefix: "cosmos",
  },
  wallet
);

client.TokenfactoryTokenfactory.tx.sendMsgCreateDenom({value: {
  owner: "cosmos13xkhcx2dquhqdml0k37sr7yndquwteuvt2cml7",
  denom: "string",
  description: "string",
  ticker: "string",
  precision: 0,
  url: "string",
  maxSupply: 1111110,
  canChangeMaxSupply: true
}, fee: {
  amount: [{ amount: '0', denom: 'stake' }],
  gas: '200000',
}, memo: ''})

// list denoms and show in html
const denoms = await client.TokenfactoryTokenfactory.query.queryDenomAll()

console.log(denoms)