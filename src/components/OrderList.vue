<template>
  <a-table :columns="columns" :dataSource="getOrderList">
    <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
    <span slot="customTitle"> Name</span>
    <span slot="tags" slot-scope="tags">
      <a-tag v-for="tag in tags" color="blue" :key="tag">
      
      </a-tag>
    </span>
    <span slot="action" slot-scope="text, record">
      <a href="javascript:;" @click="changeItemStatue(record)">确认收货</a>
    </span>
  </a-table>
</template>
<script>
const columns = [{
  dataIndex: 'packageId',
  key: 'packageId',
  title: '订单号',
}, {
  title: '收件人',
  dataIndex: 'recipientName',
  key: 'recipientName',
}, {
  title: '电话',
  dataIndex: 'phoneNumber',
  key: 'phoneNumber',
}, {
  title: '状态',
  key: 'statue',
  dataIndex: 'statue',
}, {
  title: '预约时间',
  key: 'date',
  dataIndex: 'date',
}, {
  key: 'action',
  scopedSlots: { customRender: 'action' },
}]

export default {
  data() {
    return {
      columns,
    }
  },
  mounted() {
      this.$store.dispatch("flushItems")
  },
  computed: {
      getOrderList(){
          return this.$store.getters.getShowList
      }
  },
  methods: {
     changeItemStatue(tag){
         tag.statue = "completed"
        this.$store.dispatch("update", tag);
        
      }
  },
}
</script>