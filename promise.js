
let a = false;
function data() {
    return new Promise((res,rej) => {
        if (a) {
            res({ user: "Manthan", age: 19 });
        }
        else{
            rej("Error !");
        }

    });
}
data().then((res) => {
    console.log(res);
}).catch((rej) => {
    console.log(rej);
})