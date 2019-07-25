const getters = {
    getShowList: (state) => {
        debugger    
        if (state.status === "completed") {
            return state.allItem.filter(item => item.statue === "completed");
        } else if (state.status === "ordered") {
            debugger;
            return state.allItem.filter(item => item.statue === "ordered");
        } else if (state.state === "none") {
            return state.allItem.filter(item => item.statue === "none");
        } else {
            return state.allItem;
        }
    }
}

export default getters;