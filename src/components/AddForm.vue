<template>
  <div class="wrapper">
    <form class="form" @submit="submitAddForm">
      <span class="form-close"
            @click="disactivateAddForm"
      >X</span>

      <h2>Введите данные о совершенной покупке</h2>
      <input type="text"
             class="form-field"
             placeholder="Введите название товара"
             v-model = "name"
             required
      >
      <input type="text"
             class="form-field"
             placeholder="Введите описание товара"
             v-model = "description"
             required
      >
      <input type="number"
             class="form-field"
             placeholder="Введите цену товара"
             v-model = "price"
             required
      >
      <input type="submit" value="Добавить" class="form-submit">
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';


export default {
  data: () => ({
    name: '',
    description: '',
    price: null,
  }),
  methods: {
    ...mapMutations('shoppingItems', {
      addShopItem: 'addShopItem',
      disactivateAddForm: 'disactivateAddForm',
    }),
    submitAddForm(e) {
      e.preventDefault();
      if (this.formIsValid) {
        this.addShopItem({
          name: this.name,
          description: this.description,
          price: this.price,
          id: this.lastItemId + 1,
          date: new Date().toLocaleString('en-US', {
            day: 'numeric',
            month: 'numeric',
            year: '2-digit',
            hour: 'numeric',
            minute: 'numeric',
          }),
        });
      }
    },
  },
  computed: {
    ...mapGetters('shoppingItems', {
      lastItemId: 'lastItemId',
    }),
    formIsValid() {
      return this.name.length !== 0
        && this.description.length !== 0
        && this.price.toString().length !== 0;
    },
  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    position: absolute;
    background-color: rgba(0,0,0,0.4);
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
  }
  .form {
    width: 30vw;
    min-width: 400px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 30px 40px;
    background-color: #0b101c;
    border-radius: 20px;
    position: relative;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    &-close {
      position: absolute;
      padding: 15px;
      right: 0;
      top: -3px;
      color: #fff;
      font-size: 24px;
      border-radius: 50%;
      transform: scaleX(1.2);
      &:hover {
        cursor: pointer;
      }
    }
    &-field {
      width: 100%;
      background-color: rgba(255, 255, 255, 0);
      color: rgba(255, 255, 255, 0.4);
      border: none;
      border-bottom: 1px solid rgba(255,255,255,0.4);
      outline: none;
      font-family: inherit;
      font-size: 16px;
      margin-bottom: 15px;
      padding: 10px 15px;
      transition: all 0s;
      &::-webkit-input-placeholder {
        color: inherit;
      }
      &:focus {
        color: rgba(255, 255, 255, 0.8);
        transition: all 0.3s;
        border-bottom-color: #fe903b;
      }
    }
    h2 {
      margin-top: 0;
      margin-bottom: 30px;
      color: #fff;
    }
    &-submit {
      background-color: #5a83ff;
      color: #fff;
      border-radius: 5px;
      font-weight: 600;
      margin-top: 20px;
      font-size: 14px;
      padding: 10px 20px;
      border: none;
      outline: none;
      -webkit-transition: all .3s;
      transition: all .3s;
      font-family: Montserrat;
      &:hover {
        background-color: #fe903b;
        cursor: pointer;
      }
    }
  }
</style>
