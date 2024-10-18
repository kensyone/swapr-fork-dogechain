// used to mark unsupported tokens, these are hosted lists of unsupported tokens

import { DEFAULT_TOKEN_LIST } from '.'

const UNISWAP_LIST = 'https://tokens.uniswap.org'
const OMNOM_LIST = 'https://raw.githubusercontent.com/omnomcommunity/tokenlist/refs/heads/main/tokenlist/tokenlist.json'
const QUICKSWAP_LIST = 'https://unpkg.com/quickswap-default-token-list@1.3.55/build/quickswap-default.tokenlist.json'
// const DFYN_LIST = 'https://raw.githubusercontent.com/dfyn/new-host/main/list-token.tokenlist.json'

export const UNSUPPORTED_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  DEFAULT_TOKEN_LIST,
  QUICKSWAP_LIST,
  UNISWAP_LIST,
  OMNOM_LIST,
  // COMPOUND_LIST,
  // HONEYSWAP_LIST,
  // LEVINSWAP_LIST,
  // BAOSWAP_LIST,
  // AAVE_LIST,
  // SYNTHETIX_LIST,
  // UMA_LIST,
  // WRAPPED_LIST,
  // SET_LIST,
  // ROLL_LIST,
  // COINGECKO_LIST,
  // CMC_ALL_LIST,
  // CMC_STABLECOIN,
  // KLEROS_LIST,
  // GEMINI_LIST,
  // DFYN_LIST,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [DEFAULT_TOKEN_LIST]
