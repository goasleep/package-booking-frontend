    import axios from "axios"
// import api from "./api.js"

const baseUrl = "http://localhost:8100/packages";

const actions = {
    flushItems({ commit }) {
        axios.get(baseUrl).then(response => {
            let data = response.data.map(element => {
                return {packageId:element.packageId,recipientName:element.recipientName,
                    phoneNumber:element.phoneNumber,
                statue:element.statue,date:element.date,weight:element.weight};
            })
            commit("flush", data)
        }
        )
    },
    
    add(commit, item) {
        axios.post(baseUrl, {
            "recipientName": item.recipientName,
            "phoneNumber": item.phoneNumber,
            "weight":item.weight
        }).then(() => {
            commit.dispatch("flushItems")
        })
    },

    update(commit, item) {
        debugger;
        axios.put(`${baseUrl}/${item.packageId}`, item).then(
            () => {
                commit.dispatch('flushItems');
            }
        )
    },

    deleteItem(commit, item) {
        axios.delete(`${baseUrl}/${item.id}`, item).then(
            () => {
                commit.dispatch('flushItems');
            }
        )
    }
}

export default actions;