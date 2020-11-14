const VueApp = {
    data() {
        return {
            message: "Let's keep count of your sets! 💪",
            headerText: "Workout Counter"
        }
    }
}

// mounted() {
//     setInterval(() => {
//       this.counter++
//     }, 1000)
//   }

Vue.createApp(VueApp).mount("#app")

