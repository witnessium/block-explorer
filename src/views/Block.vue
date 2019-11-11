<template>
  <container-vue name="main-app">
    <div class="row">
      <div class="title">Blocks</div>
      <div>
        <table>
          <thead>
            <th 
              v-for="(header, idx) in hedaers"
              :width="header.width"
              :key="idx"
              :style="`text-align: ${header.align||'center'}; ${header.style||''}`"
              :class="`${sortBy === header.id && sortDesc ? 'sort': ''}`"
              @click="clickSort(header)"
            >
              <span>{{header.title}}</span>
              <icon-vue v-if="sortBy === header.id && sortDesc === 'asc'" name="up-arrow" bgColor="#0551f6" style="display: inline-block;"></icon-vue>
              <icon-vue v-if="sortBy === header.id && sortDesc === 'desc'" name="down-arrow" bgColor="#0551f6" style="display: inline-block;"></icon-vue>
            </th>
          </thead>
          <tbody>
            <tr
              v-for="(item, key) in pItems"
              :key="key"
            >
              <td
                v-for="(header, idx) in hedaers"
                :key="idx"
                :width="header.width"
                :style="`text-align: ${header.align||'center'}; ${header.style||''}`"
              >{{ item[header.id]}}</td>
            </tr>
            
          </tbody>
        </table>
      </div>
      <paginate-vue 
        :pageCount="totalSize"
        v-model="page"
        :pageRange="3"
      ></paginate-vue>
    </div>
  </container-vue>
</template>

<script>
  import arraySort from 'array-sort'
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        page: 1,
        itemSize: 15,
        sortBy: 'timestamp',
        sortDesc: 'asc',
        hedaers: [
          { width: '10%', title: 'Block Number', id: 'blockNumber'},
          { width: '60%', title: 'Block Hash', id: 'blockHash', align: 'left', style: 'padding-left: 40px;'},
          { width: '20%', title: 'Timestamp', id: 'timestamp', },
          { width: '20%', title: 'Number of Tx', id: 'numberOfTx'},
        ],
      }
    },
    created() {
			this.$store.dispatch( this.$types.FIND_ALL_BLOCKS, true)
		},
    computed:{
      ...mapGetters([
        'findAllBlocks'
      ]),
      pItems(){
        return this.$paginate(this.sortItems, this.page, this.itemSize)
      },
      totalSize(){
        return Math.ceil(this.findAllBlocks.length/ this.itemSize)
      },
      sortItems(){
        if ( this.sortDesc )
          return arraySort(Object.assign([], this.findAllBlocks), this.sortBy, {reverse: this.sortDesc === 'desc'})
        else
          return this.findAllBlocks
      }
    },
    methods: {
      clickSort(header){
        let sortDesc = this.sortDesc
        if (this.sortBy === header.id){
          this.sortDesc = sortDesc === 'desc'? '' : (sortDesc === 'asc'? 'desc' : 'asc')
        }else{
          this.sortBy = header.id
          this.sortDesc = 'asc'
        }
      },
    },
  }
</script>


<style lang="scss" scoped>
  #main-app{
    .title{
      padding-top: rem(47);
      padding-bottom: rem(25);
      font-size: rem(32);
      font-weight: 700;
    }

    table{
      border-spacing: 0;
      border-collapse: collapse;
      border-spacing: 0;
      width: 100%;
      overflow: hidden;
     
      thead{
        background-color:$primary;
        color: $lightPrimary;
        font-size: rem(14);
        font-weight: 700;
        position:relative;
        box-shadow: 0px 5px 5px $gray;
        th{
          height: rem(40) !important;
          pointer-events: auto;
          cursor: pointer;
          
          &.sort, &:hover{
            color: $white;
          }
        }
      }
      
      tbody{
       &:before
        {
          content: '';
          display: block;
          height: rem(10);
        }
        tr{
          height: rem(40);
          background-color: $white;
          border-bottom: rem(0.5) solid  $gray-300;
          border-right: rem(0.5) solid  $gray-300;
          border-left: rem(0.5) solid  $gray-300;
          
          &:hover{
            background-color: #f2f9ff;
          }
          
        }
      }

      th,td{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 0;
      }
    }
  }
  
</style>
