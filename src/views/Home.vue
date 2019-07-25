<template>
  <div class="home">
  <Header></Header>
  <OrderList></OrderList>
  </div>
</template>

<script>
import OrderList from '@/components/OrderList'
import Header from '@/components/Header'
export default {
  name: 'home',
  components: {
      OrderList,
      Header
  }
}
</script>
