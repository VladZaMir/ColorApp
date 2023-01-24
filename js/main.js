document.querySelector('.circle').style.backgroundColor = 'rgb(0, 0, 0)'
Vue.createApp({
    data() {
        return {
            redColor: 0,
            greenColor: 0,
            blueColor: 0,
            redColorHex: '00',
            greenColorHex: '00',
            blueColorHex: '00'
        }
    },
    methods: {
        redUpdate() {
            this.redColor = document.getElementById('red').value
            document.querySelector('.circle').style.backgroundColor = `rgb(${this.redColor}, ${this.greenColor}, ${this.blueColor})`
            this.redColorHex = ('0' + Number(this.redColor).toString(16)).slice(-2).toUpperCase()        
            
        },
        greenUpdate() {
            this.greenColor = document.getElementById('green').value
            document.querySelector('.circle').style.backgroundColor = `rgb(${this.redColor}, ${this.greenColor}, ${this.blueColor})`
            this.greenColorHex = ('0' + Number(this.greenColor).toString(16)).slice(-2).toUpperCase()
        },
        blueUpdate() {
            this.blueColor = document.getElementById('blue').value
            document.querySelector('.circle').style.backgroundColor = `rgb(${this.redColor}, ${this.greenColor}, ${this.blueColor})`
            this.blueColorHex = ('0' + Number(this.blueColor).toString(16)).slice(-2).toUpperCase()
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
            this.redColorHex = '00',
            this.greenColorHex = '00',
            this.blueColorHex = '00'
        }
    }    
}).mount('.container')