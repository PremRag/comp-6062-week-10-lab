const app = VTTCue.createApp({


data() {
    return {
        firstName: "Prem Rag",
        lastName: "Gudishala",
        quantity: 0,
        pricePerItem: 10
    };
},
Computed: {
    fullName() {
        return `${firstName} ${lastName}`;
    },
    totalPrice() {
        return `${pricePerItem} * ${quantity}`;
    }
},
Method: {
    clearField() {
        this.firstName = 0,
        this.lastName = 0,
        this.quantity = 0
    }
}
});
app.mount("#app");