<template>
  <container-vue name="block-number-app">
    <header-title-vue
      title="Block Number"
      subTitle="90584"
    ></header-title-vue>

    <info-vue :info="blockInfo" class="mt-31"></info-vue>

    <div class="row mt-50 transaction">
      <h2 class="mb-7">Transaction</h2>
      <col-vue cols="12" class="mt-16 tran-dtl">
        <row-vue>
          <col-vue cols="6">
            <span class="ml-24">Transaction Hash</span>
            <span class="ml-23 text-primary">3BEj4fH3kTA4iS5Dtm8JKXW9MBiA9pqD9Y</span> 
          </col-vue>
          <col-vue cols="6" style="text-align:right">
            <h5 class="mr-24">Total Value 102.96826878</h5>
          </col-vue>
        </row-vue>
        <row-vue style="background:#e2e8f1;color:#919191;">
          <col-vue cols="5">
            <span class="ml-24">Sender’s Address</span>
          </col-vue>
          <col-vue cols="5">
            <h5>Receiver’s Address</h5>
          </col-vue>
          <col-vue cols="2" style="text-align:right">
            <h5 class="mr-24">Value(WIT)</h5>
          </col-vue>
        </row-vue>
        <row-vue>
          <col-vue cols="5">
            <div>
              <span class="ml-24 text-primary">500cfa8efbc260566b02674a68436a6b9e2cc..</span>
              <span><b>(1.90001012WIT)</b></span>
            </div>
          </col-vue>
          <col-vue cols="5">
            <span class="text-primary">1CEFeYrLh9A5hMDHXUQbTrGRjf86qHPmRu</span>
          </col-vue>
          <col-vue cols="2" style="text-align:right">
            <h5 class="mr-24"><b>102.96826878</b></h5>
          </col-vue>
        </row-vue>
        <row-vue>
          <col-vue cols="5"></col-vue>
          <col-vue cols="5">
            <span class="text-primary">1CEFeYrLh9A5hMDHXUQbTrGRjf86qHPmRu</span>
          </col-vue>
          <col-vue cols="2" style="text-align:right">
            <h5 class="mr-24"><b>102.96826878</b></h5>
          </col-vue>
        </row-vue>
        <row-vue>
          <col-vue cols="5"></col-vue>
          <col-vue cols="5">
            <span class="text-primary">1CEFeYrLh9A5hMDHXUQbTrGRjf86qHPmRu</span>
          </col-vue>
          <col-vue cols="2" style="text-align:right">
            <h5 class="mr-24"><b>102.96826878</b></h5>
          </col-vue>
        </row-vue>
        <row-vue>
          <col-vue cols="5"></col-vue>
          <col-vue cols="5">
            <span class="text-primary">1CEFeYrLh9A5hMDHXUQbTrGRjf86qHPmRu</span>
          </col-vue>
          <col-vue cols="2" style="text-align:right">
            <h5 class="mr-24"><b>102.96826878</b></h5>
          </col-vue>
        </row-vue>
      </col-vue>

      <col-vue cols="12" class="mt-16 tran-dtl">
        <row-vue>
          <col-vue cols="6">
            <span class="ml-24">Transaction Hash</span>
            <span class="ml-23 text-primary">3BEj4fH3kTA4iS5Dtm8JKXW9MBiA9pqD9Y</span> 
          </col-vue>
          <col-vue cols="6" style="text-align:right">
            <h5 class="mr-24">Total Value 102.96826878</h5>
          </col-vue>
        </row-vue>
        <row-vue style="background:#e2e8f1;color:#919191;">
          <col-vue cols="5">
            <span class="ml-24">Sender’s Address</span>
          </col-vue>
          <col-vue cols="5">
            <h5>Receiver’s Address</h5>
          </col-vue>
          <col-vue cols="2" style="text-align:right">
            <h5 class="mr-24">Value(WIT)</h5>
          </col-vue>
        </row-vue>
        <row-vue>
          <col-vue cols="5">
            <span class="ml-24 text-primary">500cfa8efbc260566b02674a68436a6b9e2cc..</span>
            <span><b>(1.90001012WIT)</b></span>
          </col-vue>
          <col-vue cols="5">
            <span class="text-primary">1CEFeYrLh9A5hMDHXUQbTrGRjf86qHPmRu</span>
          </col-vue>
          <col-vue cols="2" style="text-align:right">
            <h5 class="mr-24"><b>102.96826878</b></h5>
          </col-vue>
        </row-vue>
        <row-vue>
          <col-vue cols="5"></col-vue>
          <col-vue cols="5">
            <span class="text-primary">1CEFeYrLh9A5hMDHXUQbTrGRjf86qHPmRu</span>
          </col-vue>
          <col-vue cols="2" style="text-align:right">
            <h5 class="mr-24"><b>102.96826878</b></h5>
          </col-vue>
        </row-vue>
        <row-vue>
          <col-vue cols="5"></col-vue>
          <col-vue cols="5">
            <span class="text-primary">1CEFeYrLh9A5hMDHXUQbTrGRjf86qHPmRu</span>
          </col-vue>
          <col-vue cols="2" style="text-align:right">
            <h5 class="mr-24"><b>102.96826878</b></h5>
          </col-vue>
        </row-vue>
        <row-vue>
          <col-vue cols="5"></col-vue>
          <col-vue cols="5">
            <span class="text-primary">1CEFeYrLh9A5hMDHXUQbTrGRjf86qHPmRu</span>
          </col-vue>
          <col-vue cols="2" style="text-align:right">
            <h5 class="mr-24"><b>102.96826878</b></h5>
          </col-vue>
        </row-vue>
      </col-vue>
      
    </div>
    <div>
        <nav style="text-align: center;">
          <ul class="pagination">
            <li>
              <a href="#" >
                <span>&lt;</span>
              </a>
            </li>
            <li ><span class="active">1</span></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><span class="other">...</span></li>
            <li><a href="#">16</a></li>
            <li>
              <a href="#" aria-label="Next">
                <span aria-hidden="true">&gt;</span>
              </a>
            </li>
          </ul>
        </nav>
    </div>
  </container-vue>
</template>
<script>
  export default {
    data(){
      return {
        blockInfo: {
          title: 'Block Info',
          headers: [
            { key: 'blockHash', title: 'Block Hash'},
            { key: 'blockNumber', title: 'Block Number'},
            { key: 'timestamp', title: 'Timestamp'},
            { key: 'numberOfTX', title: 'number of Tx'},
            { key: 'rootHash', title: 'State Root hash'},
            { key: 'prevHash', title: 'Previous hash'},
          ],
          item: {
            blockHash: '68b85e67a3d97e352848d2be7fc9b47c52110162',
            blockNumber: '2232',
            timestamp: '2019-09-03 14:26:25',
            numberOfTX: '32',
            rootHash: '68b85e67a3d97e352848d2be7fc9b47c52110162',
            prevHash: '68b85e67a3d97e352848d2be7fc9b47c52110162',

          }
        },
        tranList: [
          {
            tranItem: {
              tranHash: '3BEj4fH3kTA4iS5Dtm8JKXW9MBiA9pqD9Y',
              totalValue: '102.96826878',
              items: [
                {
                  sendAddress: '500cfa8efbc260566b02674a68436a6b9e2cc..',
                  sendAmt: '1.90001012',
                  receiveAddress: '1CEFeYrLh9A5hMDHXUQbTrGRjf86qHPmRu',
                  value: '102.96826878',
                },
                {
                  sendAmt: '1.90001012',
                  receiveAddress: '1CEFeYrLh9A5hMDHXUQbTrGRjf86qHPmRu',
                  value: '102.96826878',
                },
                {
                  sendAmt: '1.90001012',
                  receiveAddress: '1CEFeYrLh9A5hMDHXUQbTrGRjf86qHPmRu',
                  value: '102.96826878',
                },
                {
                  sendAmt: '1.90001012',
                  receiveAddress: '1CEFeYrLh9A5hMDHXUQbTrGRjf86qHPmRu',
                  value: '102.96826878',
                }
              ]


            }
          }

        ]
      }
    }
    
  }
</script>
<style lang="scss" scoped>
  #block-number-app{
    .block-info{
      ul{
        list-style-type: none;
        position: relative;
        margin: 0;
        padding: 0;
        
        &.header{
          padding-right: 8px !important;
          font-weight: 700;

        }
        li{
          position: relative;
          display: block;
          padding: rem(10.5) rem(24);
          background-color: #fff;
          border: 1px solid #ddd;
          margin-bottom: rem(-1);
        }
      }
    }
    
    
    .transaction{
      .tran-dtl{
        box-shadow: 3px 5px 5px #e2e8f1;
      }
      line-height: 1.71;
      .row{
        border: rem(1) solid #ddd;
        background-color: #fff;
        margin-bottom: rem(-1);
        max-height: rem(38)
      }

      [class^=col-]{
        margin: rem(8) 0;
      }
    }
  }
</style>