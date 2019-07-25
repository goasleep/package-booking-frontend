const mutations = {
    addNewItem(state, item) {
        state.allItem.push(item);
    },
    changeState(state, status) {
        state.status = status;
    },
    setName(state,name){
        state.name = name;
    },
    flush(state,items){
        state.allItem = items;
    }
    
}

export default mutations;