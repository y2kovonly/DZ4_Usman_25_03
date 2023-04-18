var array = [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк", null, "uioo"]

var string = []
var numbers = []
var undefineds = []
var nulls = []
for (i of array){
    if(i===Number(i)){
        numbers.push(i)
    }else if (i===String(i)){
        string.push(i)
    }else if (i===null){
        nulls.push(i)
    }else if (i===undefined){
        undefineds.push(i)
    }
}
console.log([string, numbers, undefineds , nulls].sort((a,b)=>a.length - b
    .length).reverse())
