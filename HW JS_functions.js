function f1(a1,a2){
console.log(a1 + a2)

}
f1(5,5)


function f2(a1,a2){
    console.log(a1 ** a2)

}
f2(5,2)



function f3(И,Ф,О){
     res = JSON.stringify({И, Ф, О})
     res1 = res.replace(/"([^"]+)":/g, '$1:')

     console.log(res1)
     return res1
}
f3 ("name","surname","middlename")


function f4(q1){

let w1 = []
for (let i = 0; i < q1.length; i+= 1){
 if (q1[i] % 2 == 0){
    w1.push(q1[i])
 }
}
if(w1.length){
    return w1
} else {
    return 'No even numbers'
}

}
let e1 = f4 [2,5,6,10,33,22,40]
console.log(e1)
