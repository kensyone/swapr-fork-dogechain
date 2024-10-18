# Swapr Fork Dogechain

This repo contains a complete fork of [Swapr](https://swapr.eth.limo) protocol added support for [Dogechain](https://dogechain.dog) & aggregates Dogeswap, Frax, QuickswapV2 & Kibbleswap.

## Interface on Dogechain

This interface is fork of [swapr dapp 1.0.0-beta.13](https://github.com/SwaprHQ/swapr-dapp/tree/v1.0.0-beta.13)

You can find the live interface on Dogechain here: https://swapr-fork-dogechain.netlify.app/#/swap?chainId=2000

### Run

```bash
yarn start
```

## Publish

Swapr releases are published to the IPFS at [swapr.eth](https://swapr.eth.limo). Before publishing, however, the [IPFS hash](https://docs.ipfs.io/concepts/hashing/) to be verified. To verfiy a release a hash, do the following:

Clone the repo

```bash
git clone https://github.com/kensyone/swapr-fork-dogechain.git
```

Install dependencies using Yarn

```bash
yarn install --frozen-lockfile
```

Build the app

```bash
yarn ipfs-build
```

Upload the build directory content to IPFS using [IPFS CLI](https://docs.ipfs.io/install/command-line/#system-requirements)

```bash
ipfs add -rn build
```

The last line of the output will have the IPFS hash. Different machines should output the same hash in order to publish the release.

# Run tests

### Remember to start server

`yarn start`

### Cypress open

`yarn cypress open`

### Cypress run

`yarn cypress:run`

### Synpress

`yarn synpress:run`
