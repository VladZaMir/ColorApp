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
        }
    },
    computed: {
        colorUpdate: function() {
            return document.querySelector('.circle').style.backgroundColor = `rgb(${this.redColor}, ${this.greenColor}, ${this.blueColor})`
        }
    }
}).mount('.input_box')