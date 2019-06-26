export default {
  namespaced: true,
  state: {
    items: [],
    addFormIsActive: false,
  },
  getters: {
    addFormIsActive(state) {
      return state.addFormIsActive;
    },
    lastItemId(state) {
      if (state.items.length === 0) return -1;
      return state.items[state.items.length - 1].id;
    },
    items(state) {
      return state.items;
    },
  },
  mutations: {
    getItemsFromLocalStorage(state, data) {
      state.items = data;
    },
    activateAddForm(state) {
      state.addFormIsActive = true;
    },
    disactivateAddForm(state) {
      state.addFormIsActive = false;
    },
    deleteTableRow(state, id) {
      state.items = state.items.filter(item => item.id !== id);
      window.localStorage.shopItems = JSON.stringify(state.items);
    },
    addShopItem(state, data) {
      state.items.push({
        name: data.name,
        description: data.description,
        price: data.price,
        date: data.date,
        id: data.id,
      });
      state.addFormIsActive = false;
      window.localStorage.shopItems = JSON.stringify(state.items);
    },
    changeItemValue(state, data) {
      const shopItem = state.items.filter(item => item.id === data.id)[0];
      const index = state.items.indexOf(shopItem);
      state.items[index][data.field] = data.value;
      window.localStorage.shopItems = JSON.stringify(state.items);
    },
  },
  actions: {
  },
};
