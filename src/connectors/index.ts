import { ChainId } from '@swapr/sdk'

import { InjectedConnector } from '@web3-react/injected-connector'
import { providers } from 'ethers'

import swprLogo from '../assets/images/swpr-logo.png'
import getLibrary from '../utils/getLibrary'
import { CustomNetworkConnector } from './CustomNetworkConnector'
import { CustomWalletConnectConnector } from './CustomWalletConnectConnector'
import { CustomWalletLinkConnector } from './CustomWalletLinkConnector'

export const INFURA_PROJECT_ID = '4d1873850357465d98b32eb88ef28d55'

export const network = new CustomNetworkConnector({
  urls: {
    [ChainId.MAINNET]: `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
    [ChainId.XDAI]: 'https://rpc.dogechain.dog',
    [ChainId.ARBITRUM_ONE]: 'https://arb1.arbitrum.io/rpc',
    [ChainId.POLYGON]: 'https://polygon-rpc.com/',
  },
  defaultChainId: ChainId.MAINNET,
})

export const injected = new InjectedConnector({
  supportedChainIds: [
    ChainId.MAINNET,
    ChainId.RINKEBY,
    ChainId.ARBITRUM_ONE,
    ChainId.ARBITRUM_RINKEBY,
    ChainId.XDAI,
    ChainId.POLYGON,
  ],
})

// mainnet only
export const walletConnect = new CustomWalletConnectConnector({
  rpc: {
    [ChainId.XDAI]: 'https://rpc.dogechain.dog',
    [ChainId.MAINNET]: `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
  },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: 15000,
})

let networkLibrary: providers.Web3Provider | undefined
export function getNetworkLibrary(): providers.Web3Provider {
  return (networkLibrary = networkLibrary ?? getLibrary(network.provider))
}

// walletLink implements Metamask's RPC and should respond to most it's methods: window.ethereum.isMetaMask === true
// More info: https://github.com/walletlink/walletlink
export const walletLink = new CustomWalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
  appName: 'Swapr',
  appLogoUrl: swprLogo,
  supportedChainIds: [
    ChainId.MAINNET,
    ChainId.RINKEBY,
    ChainId.ARBITRUM_ONE,
    ChainId.ARBITRUM_RINKEBY,
    ChainId.XDAI,
    ChainId.POLYGON,
  ],
})
