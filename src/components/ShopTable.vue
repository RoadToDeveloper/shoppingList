<template>
  <div class="table">
    <div class="table-header">
      <span>Название</span>
      <span>Описание</span>
      <span>Цена</span>
      <span>Дата покупки</span>
    </div>
    <table-row  v-for = "item in items"
                :key = "item.id"
                :name = "item.name"
                :id = "item.id"
                :description = "item.description"
                :price = "+(item.price)"
                :date = "item.date"
    ></table-row>
    <p class="table-empty_msg"
       v-if="items.length === 0"
    >У вас пока что нет покупок</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TableRow from './TableRow.vue';

export default {
  computed: {
    ...mapGetters('shoppingItems', {
      items: 'items',
    }),
  },
  components: {
    TableRow,
  },
};
</script>

<style lang="scss" scoped>
  .table {
    border: 1px solid lightgray;
    width: 100%;
    border-radius: 10px;
    overflow-y: auto;
    max-height: calc(100vh - 139px - 108px);
    &-header {
      display: flex;
      padding: 15px 0;
      border-bottom: 1px solid lightgray;
      span {
        padding: 0 10px;
        font-weight: 600;
        flex-basis: 25%;
        &:nth-of-type(2) {
          flex: 1;
        }
        &:nth-of-type(3) {
          flex-basis: 10%;
          min-width: 120px;
        }
      }
    }
    &-empty_msg {
      text-align: center;
    }
  }
</style>
