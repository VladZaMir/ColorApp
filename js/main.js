document.querySelector('.circle').style.backgroundColor = 'rgb(0, 0, 0)'
Vue.createApp({
    data() {
        return {
            redColor: 0,
            greenColor: 0,
            blueColor: 0
        }
    },
    methods: {
        redUpdate() {
            this.redColor = document.getElementById('red').value
            document.querySelector('.circle').style.backgroundColor = `rgb(${this.redColor}, ${this.greenColor}, ${this.blueColor})`
        },
        greenUpdate() {
            this.greenColor = document.getElementById('green').value
            document.querySelector('.circle').style.backgroundColor = `rgb(${this.redColor}, ${this.greenColor}, ${this.blueColor})`
        },
        blueUpdate() {
            this.blueColor = document.getElementById('blue').value
            document.querySelector('.circle').style.backgroundColor = `rgb(${this.redColor}, ${this.greenColor}, ${this.blueColor})`
        },
        reset() {            
            document.querySelector('.circle').style.backgroundColor = 'rgb(0, 0, 0)'
            let inputs = document.querySelectorAll('input')
            for (let i of inputs) {
                i.value = 0;
            }
            this.redColor = 0,
            this.greenColor = 0,
            this.blueColor = 0
        }
    }    
}).mount('.container')