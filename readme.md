# tokenfactory
**tokenfactory** is a blockchain built using Cosmos SDK and Tendermint and created with [Ignite CLI](https://ignite.com/cli).

## Get started

```
ignite chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Ignite CLI docs](https://docs.ignite.com).

### Web Frontend
There is a test to create a denom with a javascript client in my-frontend-app

```
cd ts-client
npm install

cd my-frontend-app
npm install
npm run dev
```