let trki = document.getElementById("bookTable").getElementsByTagName('tr')
for (let index = 1; index < trki.length; index++) {
    trki[index].innerHTML += '<td><div class = del> </div></td>';
    trki[index].children[4].addEventListener('click', function () {
        $(this).parent().remove()
        if (1 == trki.length) {
            $('#buyBtn').remove();
        }
    })
}

let Intsumma = 0;
for (let i = 0; i < $('.price').length; i++) {
    Intsumma += $('.price')[i].textContent * 1
}
for (let index = 0; index < $('.frm').length; index++) {
    $('.frm')[index].addEventListener('click', function () {
        console.log()
        if ($(this).contents()[1].value == 0) {
            $(this).parent().remove()
            if (1 == trki.length) {
                $('#buyBtn').remove();
            }
        }

        $(this).parent().find(".price")[0].textContent = $(this).contents()[1].dataset.price * $(this).contents()[1].value
        Intsumma = 0;
        for (let i = 0; i < $('.price').length; i++) {
            Intsumma += $('.price')[i].textContent * 1
        }
    })
}

$('#buyBtn')[0].addEventListener('click', function () {
    var table = document.createElement('table');
    table.className = "showedTable"
    table.id = "summatable"
    var btr = document.createElement('tr')
    var btd = document.createElement('td');
    btd.style = "background-color: lightgray;  text-align: left;"
    var bb = document.createElement("b")
    bb.textContent = "Итоговая Сумма заказа";
    var button = document.createElement('button');
    button.style = "margin-left: 25%;"
    button.textContent = "X"
    button.onclick = function () {
        $("#summatable")[0].remove();
    }
    table.appendChild(button);
    btd.appendChild(bb);
    btd.appendChild(button);
    btr.appendChild(btd);
    table.appendChild(btr);
    var endTable = document.createElement("tr")
    endTable.innerHTML = `<td style=" text-align: left" id = "itogSymma">Сумма вашего заказа: ${Intsumma}</td>`
    table.appendChild(endTable);
    document.getElementsByTagName("div")[0].appendChild(table);
})

for (let i = 0; i < $("a").length; i++) {
    document.getElementsByTagName("a")[i].addEventListener("click", function (event) {
        var table = document.createElement('table');
        table.className = "showedTable"
        table.style = "top: 30%"
        table.id = "summatable"
        var btr = document.createElement('tr')
        var btd = document.createElement('td');
        btd.style = "background-color: lightgray;  text-align: left;"
        var bb = document.createElement("b")
        bb.textContent = document.getElementsByTagName("a")[i].textContent;
        var button = document.createElement('button');
        button.style = "margin-left: 25%;"
        button.textContent = "X"
        button.onclick = function () {
            $("#summatable")[0].remove();
        }
        table.appendChild(button);
        btd.appendChild(bb);
        btd.appendChild(button);
        btr.appendChild(btd);
        table.appendChild(btr);
        var img = document.createElement("img");
        img.src = document.getElementsByTagName("a")[i].href;
        table.appendChild(img);
        document.getElementsByTagName("div")[0].appendChild(table);
        event.preventDefault()
    });
}