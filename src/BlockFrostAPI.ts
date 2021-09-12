import { API_URLS } from './config';
import { AxiosInstance } from 'axios';

import { deriveAddress, getAccount } from './account';

import {
  accounts,
  accountsDelegations,
  accountsDelegationsAll,
  accountsRegistrations,
  accountsRegistrationsAll,
  accountsRewards,
  accountsRewardsAll,
  accountsHistory,
  accountsHistoryAll,
  accountsWithdrawals,
  accountsWithdrawalsAll,
  accountsMirs,
  accountsMirsAll,
  accountsAddresses,
  accountsAddressesAll,
} from './endpoints/api/accounts';

import {
  addresses,
  addressesTotal,
  addressesTransactions,
  addressesTransactionsAll,
  addressesUtxos,
  addressesUtxosAll,
} from './endpoints/api/addresses';

import {
  assets,
  assetsById,
  assetsHistory,
  assetsHistoryAll,
  assetsTransactions,
  assetsAddresses,
  assetsPolicyById,
  assetsPolicyByIdAll,
} from './endpoints/api/assets';

import {
  blocks,
  blocksLatest,
  blocksLatestTxs,
  blocksNext,
  blocksPrevious,
  blocksTxs,
  blocksTxsAll,
} from './endpoints/api/blocks';

import {
  epochs,
  epochsBlocks,
  epochsBlocksByPoolId,
  epochsLatest,
  epochsNext,
  epochsParameters,
  epochsPrevious,
  epochsStakes,
  epochsStakesByPoolId,
} from './endpoints/api/epochs';

import {
  pools,
  poolMetadata,
  poolsById,
  poolsByIdBlocks,
  poolsByIdDelegators,
  poolsByIdHistory,
  poolsByIdRelays,
  poolsByIdUpdates,
  poolsRetired,
  poolsRetiring,
} from './endpoints/api/pools';

import { genesis } from './endpoints/api/ledger';
import { root } from './endpoints/api/root';
import {
  metadataTxsLabel,
  metadataTxsLabelCbor,
  metadataTxsLabels,
} from './endpoints/api/metadata';

import { health, healthClock } from './endpoints/api/health';
import { metrics, metricsEndpoints } from './endpoints/api/metrics';
import {
  txs,
  txsDelegations,
  txsMetadataCbor,
  txsPoolRetires,
  txsPoolUpdates,
  txsStakes,
  txsUtxos,
  txsWithdrawals,
  txsMirs,
  txsMetadata,
  txsRedeemers,
  txSubmit,
} from './endpoints/api/txs';
import {
  scripts,
  script,
  scriptDatum,
  scriptRedeemers,
  scriptJson,
  scriptCbor,
} from './endpoints/api/scripts';
import {
  nutlinkAddress,
  nutlinkAddressTicker,
  nutlinkAddressTickers,
  nutlinkAddressTickersAll,
  nutlinkAddressTickerAll,
  nutlinkTickers,
  nutlinkTickersAll,
} from './endpoints/api/nutlink';

import { Options, ValidatedOptions } from './types';
import join from 'url-join';
import { validateOptions } from './utils';
import { hackInstance } from './utils/axios';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('../package.json');

class BlockFrostAPI {
  apiUrl: string;
  projectId?: string;
  userAgent?: string;
  options: ValidatedOptions;
  axiosInstance: AxiosInstance;

  constructor(options?: Options) {
    this.options = validateOptions(options);

    let apiBase = API_URLS.mainnet;

    if (this.options.isTestnet) {
      apiBase = API_URLS.testnet;
    }

    this.apiUrl =
      this.options?.customBackend || join(apiBase, `v${this.options.version}`);

    this.projectId = this.options.projectId;

    this.userAgent =
      options?.userAgent ?? `${packageJson.name}@${packageJson.version}`;

    this.axiosInstance = hackInstance(this.options, this.userAgent);
  }

  /**
   * accounts - Obtain information about a specific stake account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about a specific stake account.
   *
   */
  accounts = accounts;

  /**
   * accountsDelegations - Obtain information about the delegation of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the delegation of a specific account.
   *
   */
  accountsDelegations = accountsDelegations;

  /**
   * accountsDelegationsAll - Obtain information about all delegations of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the delegation of a specific account.
   *
   */
  accountsDelegationsAll = accountsDelegationsAll;

  /**
   * accountsRegistrations - Obtain information about the registrations and deregistrations of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the registrations and deregistrations of a specific account.
   *
   */
  accountsRegistrations = accountsRegistrations;

  /**
   * accountsRegistrationsAll - Obtain information about all registrations and deregistrations of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the registrations and deregistrations of a specific account.
   *
   */
  accountsRegistrationsAll = accountsRegistrationsAll;

  /**
   * accountsRewards - Obtain information about the history of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the history of a specific account.
   *
   */
  accountsRewards = accountsRewards;

  /**
   * accountsRewardsAll - Obtain information about whole history of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the history of a specific account.
   *
   */
  accountsRewardsAll = accountsRewardsAll;

  /**
   * accountsHistory - Obtain information about the history of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the history of a specific account.
   *
   */
  accountsHistory = accountsHistory;

  /**
   * accountsHistoryAll - Obtain information about whole history of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the history of a specific account.
   *
   */
  accountsHistoryAll = accountsHistoryAll;

  /**
   * accountsWithdrawals - Obtain information about the withdrawals of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the withdrawals of a specific account.
   *
   */
  accountsWithdrawals = accountsWithdrawals;

  /**
   * accountsWithdrawalsAll - Obtain information about all withdrawals of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the withdrawals of a specific account.
   *
   */
  accountsWithdrawalsAll = accountsWithdrawalsAll;

  /**
   * accountsMirs - Obtain information about the MIRs of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the MIRs of a specific account.
   *
   */
  accountsMirs = accountsMirs;

  /**
   * accountsMirsAll - Obtain information about all MIRs of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the MIRs of a specific account.
   *
   */
  accountsMirsAll = accountsMirsAll;

  /**
   * accountsAddresses - Obtain information about the addresses of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the addresses of a specific account.
   *
   */
  accountsAddresses = accountsAddresses;

  /**
   * accountsAddressesAll - Obtain information about all addresses of a specific account.
   *
   * @param stakeAddress - Bech32 stake address
   * @returns Information about the addresses of a specific account.
   *
   */
  accountsAddressesAll = accountsAddressesAll;

  /**
   * assets - List of assets.
   *
   * @returns List of assets.
   *
   */
  assets = assets;

  /**
   * assetsById - Information about a specific asset.
   *
   * @param asset - Concatenation of the policy_id and hex-encoded asset_name
   * @returns Information about a specific asset.
   *
   */
  assetsById = assetsById;

  /**
   * assetsHistory - History of a specific asset.
   *
   * @param asset - Concatenation of the policy_id and hex-encoded asset_name
   * @returns History of a specific asset.
   *
   */
  assetsHistory = assetsHistory;

  /**
   * assetsHistoryAll - Whole history of a specific asset.
   *
   * @param asset - Concatenation of the policy_id and hex-encoded asset_name
   * @returns History of a specific asset.
   *
   */
  assetsHistoryAll = assetsHistoryAll;

  /**
   * assetsTransactions - List of a specific asset transactions.
   *
   * @param asset - Concatenation of the policy_id and hex-encoded asset_name
   * @returns List of a specific asset transactions.
   *
   */
  assetsTransactions = assetsTransactions;

  /**
   * assetsAddresses - List of a addresses containing a specific asset.
   *
   * @param asset - Concatenation of the policy_id and hex-encoded asset_name
   * @returns List of a addresses containing a specific asset.
   *
   */
  assetsAddresses = assetsAddresses;

  /**
   * assetsPolicyById - List of asset minted under a specific policy.
   *
   * @param policyId - Specific policy_id
   * @returns List of asset minted under a specific policy.
   *
   */
  assetsPolicyById = assetsPolicyById;

  /**
   * assetsPolicyByIdAll - List of all assets minted under a specific policy.
   *
   * @param policyId - Specific policy_id
   * @returns List of asset minted under a specific policy.
   *
   */
  assetsPolicyByIdAll = assetsPolicyByIdAll;

  /**
   * addresses
   *
   * @param address
   * @returns xxx
   *
   */
  addresses = addresses;

  /**
   * addressesTotal
   *
   * @param address
   * @returns xxx
   *
   */
  addressesTotal = addressesTotal;

  /**
   * addressesTransactions
   *
   * @param address
   * @returns xxx
   *
   */
  addressesTransactions = addressesTransactions;

  /**
   * addressesTransactionsAll
   *
   * @param address
   * @returns xxx
   *
   */
  addressesTransactionsAll = addressesTransactionsAll;

  /**
   * addressesUtxos
   *
   * @param address
   * @returns xxx
   *
   */
  addressesUtxos = addressesUtxos;

  /**
   * addressesUtxosAll
   *
   * @param address
   * @returns xxx
   *
   */
  addressesUtxosAll = addressesUtxosAll;

  /**
   * addressesUtxos
   *
   * @param address
   * @returns xxx
   *
   */
  blocks = blocks;

  /**
   * blocksLatest
   *
   * @returns xxx
   *
   */
  blocksLatest = blocksLatest;
  blocksLatestTxs = blocksLatestTxs;

  /**
   * blocksNext
   *
   * @param address
   * @returns xxx
   *
   */
  blocksNext = blocksNext;

  /**
   * blockPrevious
   *
   * @param address
   * @returns xxx
   *
   */
  blocksPrevious = blocksPrevious;

  /**
   * addressesUtxos
   *
   * @param blocksTxs
   * @returns xxx
   *
   */
  blocksTxs = blocksTxs;

  /**
   * blocksTxsAll
   *
   * @param blocksTxsAll
   * @returns xxx
   *
   */
  blocksTxsAll = blocksTxsAll;

  /**
   * epochs
   *
   * @param number
   * @returns xxx
   *
   */
  epochs = epochs;

  /**
   * epochsBlocks
   *
   * @param number
   * @returns xxx
   *
   */
  epochsBlocks = epochsBlocks;

  /**
   * epochsBlocksByPoolId
   *
   * @param blocksTxs
   * @returns xxx
   *
   */
  epochsBlocksByPoolId = epochsBlocksByPoolId;

  /**
   * epochsLatest
   *
   * @returns xxx
   *
   */
  epochsLatest = epochsLatest;

  /**
   * epochsNext
   *
   * @param number
   * @returns xxx
   *
   */
  epochsNext = epochsNext;

  /**
   * epochsParameters
   *
   * @param number
   * @returns xxx
   *
   */
  epochsParameters = epochsParameters;

  /**
   * epochsPrevious
   *
   * @param number
   * @returns xxx
   *
   */
  epochsPrevious = epochsPrevious;

  /**
   * epochsStakes
   *
   * @param number
   * @returns xxx
   *
   */
  epochsStakes = epochsStakes;

  /**
   * epochsStakesByPoolId
   *
   * @param number
   * @returns xxx
   *
   */
  epochsStakesByPoolId = epochsStakesByPoolId;

  /**
   * health
   *
   * @returns xxx
   *
   */
  health = health;

  /**
   * healthClock
   *
   * @returns xxx
   *
   */
  healthClock = healthClock;

  /**
   * ledger
   *
   * @returns xxx
   *
   */
  genesis = genesis;

  /**
   * metadataTxsLabel
   *
   * @param label
   * @returns xxx
   *
   */
  metadataTxsLabel = metadataTxsLabel;

  /**
   * metadataTxsLabelCbor
   *
   * @param label
   * @returns xxx
   *
   */
  metadataTxsLabelCbor = metadataTxsLabelCbor;

  /**
   * metadataTxsLabels
   *
   * @returns xxx
   *
   */
  metadataTxsLabels = metadataTxsLabels;

  /**
   * metrics
   *
   * @returns xxx
   *
   */
  metrics = metrics;

  /**
   * metricsEndpoints
   *
   * @returns xxx
   *
   */
  metricsEndpoints = metricsEndpoints;

  /**
   * nutlinkAddress
   *
   * @returns xxx
   *
   */
  nutlinkAddress = nutlinkAddress;
  /**

  * nutlinkAddressTicker
   *
   * @returns xxx
   *
   */
  nutlinkAddressTicker = nutlinkAddressTicker;

  /**
   * nutlinkAddressTickers
   *
   * @returns xxx
   *
   */
  nutlinkAddressTickers = nutlinkAddressTickers;

  /**
   * nutlinkAddressTickersAll
   *
   * @returns xxx
   *
   */
  nutlinkAddressTickersAll = nutlinkAddressTickersAll;

  /**
   * nutlinkAddressTickerAll
   *
   * @returns xxx
   *
   */
  nutlinkAddressTickerAll = nutlinkAddressTickerAll;

  /**
   * nutlinkTickers
   *
   * @returns xxx
   *
   */
  nutlinkTickers = nutlinkTickers;

  /**
   * nutlinkTickersAll
   *
   * @returns xxx
   *
   */
  nutlinkTickersAll = nutlinkTickersAll;

  /**
   * pools
   *
   * @returns xxx
   *
   */
  pools = pools;

  /**
   * poolMetadata
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolMetadata = poolMetadata;

  /**
   * poolsById
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolsById = poolsById;

  /**
   * poolsByIdBlocks
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolsByIdBlocks = poolsByIdBlocks;

  /**
   * poolsByIdDelegators
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolsByIdDelegators = poolsByIdDelegators;

  /**
   * poolsByIdHistory
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolsByIdHistory = poolsByIdHistory;

  /**
   * poolsByIdRelays
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolsByIdRelays = poolsByIdRelays;

  /**
   * poolsByIdUpdates
   *
   * @param poolId
   * @returns xxx
   *
   */
  poolsByIdUpdates = poolsByIdUpdates;

  /**
   * poolsRetired
   *
   * @returns xxx
   *
   */
  poolsRetired = poolsRetired;

  /**
   * poolsRetiring
   *
   * @returns xxx
   *
   */
  poolsRetiring = poolsRetiring;

  /**
   * root
   *
   * @returns xxx
   *
   */
  root = root;

  /**
   * List scripts
   *
   * @returns List of script hashes
   *
   */
  scripts = scripts;

  /**
   * Information about a specific script
   *
   * @returns Information about a specific script
   *
   */
  script = script;

  /**
   *
   */
  scriptJson = scriptJson;

  /**
   *
   */
  scriptCbor = scriptCbor;

  /**
   *
   */
  scriptDatum = scriptDatum;

  /**
   * List of redeemers of a specific script
   *
   * @returns List the information about redeemers of a specific script
   *
   */
  scriptRedeemers = scriptRedeemers;

  /**
   * txs
   *
   * @param hash
   * @returns xxx
   *
   */
  txs = txs;

  /**
   * txsMetadataCbor
   *
   * @param hash
   * @returns xxx
   *
   */
  txsMetadataCbor = txsMetadataCbor;

  /**
   * txsDelegations
   *
   * @param hash
   * @returns xxx
   *
   */
  txsDelegations = txsDelegations;

  /**
   * txsPoolRetires
   *
   * @param hash
   * @returns xxx
   *
   */
  txsPoolRetires = txsPoolRetires;

  /**
   * txsPoolUpdates
   *
   * @param hash
   * @returns xxx
   *
   */
  txsPoolUpdates = txsPoolUpdates;

  /**
   * txsStakes
   *
   * @param hash
   * @returns xxx
   *
   */
  txsStakes = txsStakes;

  /**
   * txsUtxos
   *
   * @param hash
   * @returns xxx
   *
   */
  txsUtxos = txsUtxos;

  /**
   * txsWithdrawals
   *
   * @param hash
   * @returns xxx
   *
   */
  txsWithdrawals = txsWithdrawals;

  /**
   * txsMirs
   *
   * @param hash
   * @returns xxx
   *
   */
  txsMirs = txsMirs;

  /**
   * txsMetadata
   *
   * @param hash
   * @returns xxx
   *
   */
  txsMetadata = txsMetadata;

  // XXX:
  txsRedeemers = txsRedeemers;

  /**
   * txSubmit
   *
   * @param hash
   * @returns xxx
   *
   */
  txSubmit = txSubmit;

  /**
   * deriveAddress
   *
   * @param hash
   * @returns xxx
   *
   */
  deriveAddress = deriveAddress;

  /**
   * txSubmit
   *
   * @param hash
   * @returns xxx
   *
   */
  getAccount = getAccount;
}

export { BlockFrostAPI };
