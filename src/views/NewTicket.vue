<template>
  <container-vue name="new-ticket-app">
    <div class="title">New Traffic Ticket</div>
    <row-vue class="info">
      <col-vue cols="12">
        <div class="badge"></div><span class="h4">Input New Traffic Ticket</span>
      </col-vue>
      <col-vue cols="12" class="mt-12">
        <div class="items-class">
          <col-vue cols="3" class="header label col-sm-5">
            <label for="photo">Camera Footage</label>
          </col-vue>
          <col-vue cols="9" class="col-sm-7">
            <input type="file" name="footage" id="footage" ref="footage" accept="image/jpeg" @change="updateFootage()">
          </col-vue>
        </div>
        <div v-for="item in items" :key="item.key" class="items-class">
          <col-vue cols="3" class="header label col-sm-5">
            <label v-bind:for="item.key">{{ item.label }}</label>
          </col-vue>
          <col-vue cols="9" class="col-sm-7">
            <div v-if="item.type === 'date'"><datetime v-model="$data.ticket[item.key]" type='datetime' /></div>
            <input v-else  v-bind:type="item.type" v-bind:name="item.key" v-bind:id="item.key" v-model="$data.ticket[item.key]">
          </col-vue>
        </div>
      </col-vue>
    </row-vue>
    <row-vue class="info">
      <col-vue cols="12">
        <button type="submit" class="styled" id="submit" @click="submit()">Submit</button>
        <a v-if="notifyUrl" v-bind:href="notifyUrl" target="_blank">{{ notifyUrl }}</a>
      </col-vue>
    </row-vue>
  </container-vue>
</template>

<script>
  import coreNodeApi from '@/api/coreNodeApi'

  export default {
    name: 'NewTicket',
    data(){
      return {
        ticket: {
          footage: '',
          driverName: '',
          licenseNo: '',
          plateNo: '',
          contactInfo: '',
          offense: '',
          location: '',
          date: '',
          penalty: '',
          ticketTxHash: '',
          paymentDate: '',
          paymentType: '',
        },
        items: [
          { type: 'text', label: "Driver's Name", key: 'driverName'},
          { type: 'text', label: 'License No.', key: 'licenseNo'},
          { type: 'text', label: 'Plate No.', key: 'plateNo'},
          { type: 'text', label: 'Contact Info', key: 'contactInfo'},
          { type: 'text', label: 'Offense', key: 'offense'},
          { type: 'text', label: 'Location', key: 'location'},
          { type: 'date', label: 'Date', key: 'date'},
          { type: 'text', label: 'Penalty', key: 'penalty'},
          { type: 'text', label: 'Ticket Transaction Hash', key: 'ticketTxHash'},
          { type: 'date', label: 'Payment Date', key: 'paymentDate'},
          { type: 'text', label: 'Payment Type', key: 'paymentType'},
        ],
	notifyUrl: ''
      }
    },
    methods: {
      updateFootage(){
        this.ticket.footage = this.$refs.footage.files[0];
      },
      submit() {
        let formData = new FormData();
        let ticket = this.$data.ticket;
        if (ticket.footage) {
          formData.append('footage', ticket. footage);
        }
	for(const item of this.$data.items) {
          let value = this.$data.ticket[item.key]
          if (value) formData.append(item.key, value);
	}
        let this0 = this;
        coreNodeApi.postTicket(formData).then(function (response) {
          console.log(response);
          this0.notifyUrl = coreNodeApi.API_URL + '/notification/' + response;
          console.log(this0.$data.notifyUrl);
          this0.footage='';
        });
      }
    },
    beforeMount() {
      this.$data.notifyUrl = '';
    }
  }
</script>

<style lang="scss" scoped>
  #new-ticket-app{
    .info{
      .items-class{
        box-shadow: 0 rem(1.5) $gray;
        line-height: 1.71;
        list-style-type: none;
        position: relative;
        margin: 0;
        padding: 0;

        .label{
          font-weight: 700;
          padding: rem(10.5) rem(10);
          background-color: $white;
          border-bottom: 1px solid $gray-300;
          border-right: rem(1) solid$light-gray;;
          border-left: rem(1) solid $light-gray;;
        }

        input{
          width: inherit;
          position: relative;
//          display: block;
          padding: rem(10.5) rem(24);
          background-color: $white;
          border-bottom: 1px solid $gray-300;
          border-right: rem(1) solid$light-gray;;
          border-left: rem(1) solid $light-gray;;
        }

      }

      .badge{
        width: rem(10);
        height: rem(17);
        background: $primary;
        transform: skewx(10deg);
        float: left;
        margin-right: rem(8);
        margin-left: rem(12);
      }
    }
    .title{
      padding-top: rem(47);
      padding-bottom: rem(25);
      font-size: rem(32);
      font-weight: 700;
    }
    .styled {
        border: 0;
        line-height: 2.5;
	margin: 10px 5px;
        padding: 0 20px;
        font-size: 1rem;
        text-align: center;
        color: #fff;
        text-shadow: 1px 1px 1px #000;
        border-radius: 10px;
        background-color: rgba(5, 81, 246, 1);
        background-image: linear-gradient(to top left,
                                          rgba(0, 0, 0, .2),
                                          rgba(0, 0, 0, .2) 30%,
                                          rgba(0, 0, 0, 0));
        box-shadow: inset 2px 2px 3px rgba(255, 255, 255, .6),
                    inset -2px -2px 3px rgba(0, 0, 0, .6);
    }

    .styled:hover {
        background-color: rgba(89, 139, 255, 1);
    }

    .styled:active {
        box-shadow: inset -2px -2px 3px rgba(255, 255, 255, .6),
                    inset 2px 2px 3px rgba(0, 0, 0, .6);
    }

  }

</style>
