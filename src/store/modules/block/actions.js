import * as types from '../../mutation-types'
import blockData from '../../blockData'
import coreNodeApi from '../../../api/coreNodeApi'

const findAllBlocks = ({commit}, params) => {
  // 쿼리로 페이징 처리해서 결과를 가지고 오시면 됩니다.
  // totalSize : 전체 데이터수
  // items: 페이징 처리된 데이터
  // params.page 현재 페이지 수
  // params.itemSize: 리스트 데이터 수

  coreNodeApi.getStatus().then(status => {
    const from = status.number - (params.page - 1) * params.itemSize;
    coreNodeApi.getBlocks(from, params.itemSize).then(blocks => {
      commit(types.FIND_ALL_BLOCKS, {
	totalSize: status.number,
	items: blocks,
      });
    });
  });
}

const findBlockNumber = ({commit}, param) => {
  coreNodeApi.getBlock(param.blockNumber).then(blockinfo => {
    console.log(blockinfo);
    commit(types.FIND_BLOCK_NUMBER, blockinfo);
  });
}

const findTxHash = ({commit}, param) => {
  coreNodeApi.getTransaction(param.txHash).then(ticket => {
    console.log(ticket);
    commit(types.FIND_TX_HASH, {
      photoSrc: coreNodeApi.API_URL + '/ticket/file/' + param.txHash + '-' + ticket.photo.filename,
      ticket: ticket,
    });
  });
}

const findAddress = ({commit}, param) => {
  coreNodeApi.getAddress(param.address).then(addressInfo => {
    console.log(addressInfo);
    commit(types.FIND_ADDRESS, addressInfo);
  });
}

export default {
  [types.FIND_ALL_BLOCKS]: findAllBlocks,
  [types.FIND_BLOCK_NUMBER]: findBlockNumber,
  [types.FIND_TX_HASH]: findTxHash,
  [types.FIND_ADDRESS]: findAddress,
}
