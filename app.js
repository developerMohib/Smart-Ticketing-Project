

let maximumSeletct = 4;
let initialSelect = document.getElementById('initialSelect').innerText;
console.log(initialSelect);
let allButton = document.getElementsByClassName('bus-seat');

for (const singleButton of allButton) {
    // console.log(singleButton);
    singleButton.addEventListener('click', function(){
        let text = singleButton.innerText;
        console.log(text);

        // where i place to element

        let seatContainer = document.getElementById('seatNumberAdd');
        // console.log(seatContainer);
        let p = document.createElement('p');
        p.innerHTML = text;
        let p2 = document.createElement('p');
        p2.innerHTML = 'Economy';
        let p3 = document.createElement('p');
        p3.innerHTML = 500;
        let div = document.createElement('div');
        div.classList.add('flex');
        div.classList.add('justify-between');
        seatContainer.appendChild(div);

        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p3);

        if(initialSelect <= maximumSeletct){
            singleButton.style.backgroundColor = 'green';
            initialSelect++
            console.log(initialSelect)
        }
        else{
            alert('you cant select more এই তরে না কইছি গাড়ি খাইয়া গাজা চালাবি না ');
        }
    })
}