<template>
    <div >
        <a-button @click="change(all)"> 全部 </a-button>
        <a-button @click="change(completed)"> 已取件 </a-button>
        <a-button @click="change(ordered)">已预约 </a-button>
        <a-button @click="change(none)">未预约 </a-button>
          <a-button @click="showConfirm">
    Confirm
  </a-button>
    </div>
</template>

<script>
import AddButton from '@/components/AddButton'
    export default {
        components:{
            AddButton
        },
        data() {
            return {
                all: "all",
                completed: "completed",
                ordered: "ordered",
                none: "none"
            }
        },
        methods: {
            change(status){
                debugger;
                this.$store.commit('changeState',status)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>