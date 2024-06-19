const input = document.getElementById("text")
const number = document.getElementById("inputnumber")

const handleClick = (event) => {
const val = event.target.value
    input.value += val   
    }

const handleEqual = () => {
const result = eval(input.value)
    console.log(result)
    input.value = result
    }

const handleClear = () => {
    input.value=''
    }