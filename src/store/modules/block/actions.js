import * as types from '../../mutation-types'
import blockData from '../../blockData'

let i = 0;
let blocks = Array.from({length: 10000}, () => {
  i ++;
  return {
    blockNumber: Number(90000) + i,
    blockHash: Math.random().toString(36) + Math.random().toString(36) + Math.random().toString(36) + Math.random().toString(36)+ Math.random().toString(36)+ Math.random().toString(36),
    timestamp: '2019-09-03 14:26:25',
    numberOfTx: i
  }
})

const findAllBlocks = ({commit}, params) => {
  // 쿼리로 페이징 처리해서 결과를 가지고 오시면 됩니다.
  // totalSize : 전체 데이터수
  // items: 페이징 처리된 데이터
  // params.page 현재 페이지 수
  // params.itemSize: 리스트 데이터 수 
  commit(types.FIND_ALL_BLOCKS, {
    totalSize: blocks.length,
    items: blocks.slice((params.page-1) * params.itemSize, params.page*params.itemSize)
  })
}

const findBlockNumber = ({commit}, blcokNumber) => {
  commit(types.FIND_BLOCK_NUMBER, Object.assign({}, blcokNumber, blockData.blockNumberData))
}

const findTxHash = ({commit}, txHash) => {
  commit(types.FIND_TX_HASH, Object.assign({}, txHash, blockData.txHashData))
}

const findAddress = ({commit}, address) => {
  commit(types.FIND_ADDRESS, Object.assign({}, address, blockData.addressData))
}

export default {
  [types.FIND_ALL_BLOCKS]: findAllBlocks,
  [types.FIND_BLOCK_NUMBER]: findBlockNumber,
  [types.FIND_TX_HASH]: findTxHash,
  [types.FIND_ADDRESS]: findAddress,
}