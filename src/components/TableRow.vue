<template>
  <div class="row">
    <input type="text"
           class="column"
           @blur="changeItemValue({
              id: id,
              field: 'name',
              value: $event.target.value
           })"
           :value="name">
    <input class="column"
           type="text"
           @blur="changeItemValue({
              id: id,
              field: 'description',
              value: $event.target.value
           })"
           :value="description"
    >
    <input type="text"
           class="column"
           @blur="changeItemValue({
              id: id,
              field: 'price',
              value: $event.target.value
           })"
           :value="price"
    >
    <span class="column">
      {{ date }}
    </span>
    <span class="row-delete_btn"
          @click="deleteRow(id)"
    >Удалить</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: null,
    },
    date: {
      type: String,
      default: () => new Date().toLocaleString('en-US', {
        day: 'numeric',
        month: 'numeric',
        year: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
      }),
    },
    id: {
      type: Number,
      default: null,
    },
  },
  methods: {
    ...mapMutations('shoppingItems', {
      deleteRow: 'deleteTableRow',
      changeItemValue: 'changeItemValue',
    }),
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  position: relative;
  padding: 10px 0;
  &:not(:last-of-type) {
    border-bottom: 1px solid lightgray;
  }
  .column {
    padding: 0 10px;
    border: none;
    outline: none;
    flex-basis: 25%;
    align-items: center;
    display: inline-flex;
    font-size: inherit;
    font-family: inherit;
    &:nth-of-type(2) {
      flex: 1;
    }
    &:nth-of-type(3) {
      flex-basis: 10%;
      min-width: 120px;
    }
  }
  &-delete_btn {
    position: absolute;
    right: 8px;
    padding: 3px 5px;
    border: 1px solid #E32636;
    color: #fff;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 600;
    top: 8px;
    background-color: #E32636;
    transition: all 0.3s;
    &:hover {
      cursor: pointer;
      color: #fff;
      background-color: #E32636;
    }
  }
}
</style>
