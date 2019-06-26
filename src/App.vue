<template>
  <div id="app">
    <h1 class="app-title">Ваши текущие покупки</h1>
    <shop-table></shop-table>
    <transition name="formAnimation">
      <add-form v-if="addFormIsActive"></add-form>
    </transition>
    <span id="add_shop__item_btn"
          @click="activateAddForm"
    >Добавить покупку</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex';
import ShopTable from './components/ShopTable.vue';
import AddForm from './components/AddForm.vue';

export default {
  beforeMount() {
    if (window.localStorage.shopItems) {
      this.getItemsFromLocalStorage(JSON.parse(window.localStorage.shopItems));
    }
  },
  name: 'app',
  computed: {
    ...mapGetters('shoppingItems', {
      addFormIsActive: 'addFormIsActive',
    }),
  },
  methods: {
    ...mapMutations('shoppingItems', {
      activateAddForm: 'activateAddForm',
      getItemsFromLocalStorage: 'getItemsFromLocalStorage',
    }),
  },
  components: {
    ShopTable,
    AddForm,
  },
};
</script>

<style lang="scss">
.formAnimation-enter {
  opacity: 0;
}
.formAnimation-enter-active {
  transition: all 0.4s;
}
.formAnimation-leave-active {
  opacity: 0;
  transition: all 0.4s;
}
#app {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  min-width: 900px;
  margin: 0 auto;
  align-content: flex-start;
  .app-title {
    width: 100%;
    margin: 50px 0;
    text-align: center;
  }
  #add_shop__item_btn {
    margin: 30px 0 40px;
    background-color: #5a83ff;
    color: #fff;
    border-radius: 5px;
    font-weight: 600;
    font-size: 14px;
    padding: 10px 20px;
    border: none;
    outline: none;
    -webkit-transition: all .3s;
    transition: all .3s;
    &:hover {
      background-color: #fe903b;
      cursor: pointer;
    }
  }
}
</style>
