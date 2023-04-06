"use strict"

function optionQoshish() {
    provencie.sort()
    provencie.forEach((item) => {
        const option = createElement("option", "option", item)
        $("#select").appendChild(option)
    })
}
optionQoshish()
// ==============================GetOption= =======================================

async function regionQoshish(select = "Toshkent", num) {
    const today = await fetch(`https://islomapi.uz/api/present/day?region=${select}`);
    const result = await today.json();
    console.log(result)
    const week = await fetch(`https://islomapi.uz/api/present/week?region=${select}`);
    const weekResult = await week.json();
    console.log(weekResult)
    const month = await fetch(`https://islomapi.uz/api/monthly?region=${select}&month=${new Date ().getMonth()+1}`);
    const monthResult = await month.json();
    console.log(monthResult);
    localStorage.setItem('data', JSON.stringify(result));
    localStorage.setItem('week', JSON.stringify(weekResult));
    localStorage.setItem('month', JSON.stringify(monthResult));
    renderData()
}
// ===========================GetRegion ========================================
$("#select").addEventListener("change", (e) => {
    e.preventDefault()
    $('#week').innerHTML = ""
    $('#month').innerHTML = ""
    localStorage.setItem('mintext', e.target.value)
    const mintext = localStorage.getItem('mintext').toLocaleLowerCase()
    switch (mintext) {
        case "qashqadaryo":
            regionQoshish("qarshi");
            break
        case "farg'ona":
            regionQoshish("qo'qon");
            break
        case "buxoro":
            regionQoshish("qоrоvulbоzоr");
            break
        case "sirdaryo":
            regionQoshish("guliston");
            break
        case "surxondaryo":
            regionQoshish("termiz");
            break
        case "samarqand":
            regionQoshish("urgut");
            break
        case "navoiy":
            regionQoshish("nurоta");
            break
        case "jizzax":
            regionQoshish("jizzax");
            break
        case "andijon":
            regionQoshish("andijon");
            break
        case "namangan":
            regionQoshish("namangan");
            break
        case "xorazm":
            regionQoshish("urganch");
            break
        case "toshkent":
            regionQoshish("angren");
            break
        case "qoraqalpog'iston":
            regionQoshish("nukus");
            break
        default:
            ("Toshkent");
    }
});

function renderData() {
    const result = JSON.parse(localStorage.getItem('data'));
    const week = JSON.parse(localStorage.getItem('week'));
    const month = JSON.parse(localStorage.getItem('month'));
    const {
        region,
        times: {
            asr,
            hufton,
            peshin,
            quyosh,
            shom_iftor,
            tong_saharlik
        }
    } = result;
    $(".mintext").textContent = region
    $a(".namozVaqti")[0].textContent = tong_saharlik;
    $a(".namozVaqti")[1].textContent = quyosh;
    $a(".namozVaqti")[2].textContent = peshin;
    $a(".namozVaqti")[3].textContent = asr;
    $a(".namozVaqti")[4].textContent = shom_iftor;
    $a(".namozVaqti")[5].textContent = hufton;


    const bugun = new Date().getDay()
    console.log(bugun);

    week.forEach((item, index) => {
        const tr = createElement("tr", `${(bugun===index+1) ? "bg-warning item" : "item"}`, `    <td>${item.region}</td><td>${item.date.substring(0,10)}</td><td>${item.weekday}</td><td>${item.times.tong_saharlik}</td><td>${item.times.quyosh}</td><td>${item.times.peshin}</td><td>${item.times.asr}</td><td>${item.times.shom_iftor}</td><td>${item.times.hufton}</td>`);
        $('#week').appendChild(tr)
        console.log(index);
    })
    console.log(week);

    const buoy = new Date().getDate()
    month.forEach((item, index) => {
        const tr = createElement("tr", `${(buoy===item.day) ? "bg-warning item" : "item"}`, `    <td>${item.region}</td><td>${item.date.substring(0,10)}</td><td>${item.weekday}</td><td>${item.times.tong_saharlik}</td><td>${item.times.quyosh}</td><td>${item.times.peshin}</td><td>${item.times.asr}</td><td>${item.times.shom_iftor}</td><td>${item.times.hufton}</td>`);
        $('#month').appendChild(tr)
    })
}
renderData()

function time() {
    setInterval(() => {
        const date = new Date();
        $('#soat').innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }, 1000)
}
time()
//=================================== week click ====================================================
let btn1 = document.querySelector(".xaflalikbtn");
let btn2 = document.querySelector(".oylikbtn");
let xaftalik = document.querySelector(".xaftalik");
let oylik = document.querySelector(".oylik");
btn1.addEventListener("click", () => {
    xaftalik.classList.toggle('xaftalik2')
    // =================================== month click  ==================================================
})
btn2.addEventListener("click", () => {
    oylik.classList.toggle('oylik2')
})
//=================================== body style=====================================================
let body = $("body")
$(".yoruq").addEventListener("click", () => {
    body.classList.toggle("bodyoq")
    $(".yoruq").style.display = "none"
    $(".oy").style.display = "block"
})
$(".oy").addEventListener("click", () => {
    body.classList.remove("bodyoq")
    $(".yoruq").style.display = "block"
    $(".oy").style.display = "none"
})


// window.addEventListener("load", () => {
//     let input = document.querySelector(".input1")
//     let input2 = document.querySelector(".input2")
//     let card1 = document.querySelector(".card1")
//     let card2 = document.querySelector(".card2")
//     let result = []
//     document.querySelector(".form").addEventListener("submit", (e) => {
//         e.preventDefault()
//         let value = input.value
//         let value2 = input2.value
//         result = [...result, value, value2]
//         console.log(result)
//         if (result.includes("muhammadamin") && result.includes("usha")) {
//             card2.classList.add("flex1")
//             let enkir = document.createElement("a", "page")
//             enkir.href = "./index.html"
//             enkir.appendChild(document.createTextNode("login"))
//             enkir.target = "_blank"
//             console.log(enkir)
//             $(".login").appendChild(enkir);

//         } else {
//             console.log("ishladi")
//             card1.classList.add("flex2");
//             $(".btn3").addEventListener("click", () => {
//                 card1.classList.add("cardop")
//             }
//             )
//         }
     
//     })
// })
