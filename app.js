
let maximumSeletct = 4;

// 0 select seat 
let initialSelectNumber = document.getElementById('initialSelect');
let initialSelectText = initialSelectNumber.innerText;
let initialSelect = parseInt(initialSelectText);


//  40 seat find
let totalSeatTextNumber = document.getElementById('totalSeat');
let totalSeatText = totalSeatTextNumber.innerText;
let totalSeat = parseInt(totalSeatText);

//  initialTaka 00
let initialTaka = document.getElementById('initialTaka') ;
let totalTakaText = initialTaka.innerText;
let totalTaka = parseInt(totalTakaText);
let grandTotal = document.getElementById('grandTotal');
console.log(totalTaka);

// coupon button 
let couponButton = document.getElementById('couponApply');

// bus button or seat
let allButton = document.getElementsByClassName('bus-seat');

// input text 

let inputText = document.getElementById('inputtext').value ;


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
        

        if(initialSelect < maximumSeletct){
            
            // color change and count Number 
            singleButton.style.backgroundColor = 'green';
            initialSelect++;
            totalSeat--;

            // change the number 
            initialSelectNumber.innerText = initialSelect;
            totalSeatTextNumber.innerText = totalSeat;

            // caltulate taka
            let withoutOff = initialSelect * 550 ;
            initialTaka.innerText = withoutOff;

            // discont offer 
            if(initialSelect === maximumSeletct){
                singleButton.setAttribute("disabled", "");
                couponButton.removeAttribute('disabled');
                if(inputText === 'NEW15'){
                    // 15% discount
                    let off15 = withoutOff * 0.15;
                    initialTaka.innerText = off15;
                    grandTotal.classList.add('hidden');
                }
                else if(inputText === 'COUPLE20' ){
                    //20% discount
                    let off20 = withoutOff * 0.20;
                    grandTotal.innerText = off20;
                }
                else{
                    alert('apni ki coupon chuke na dekhe ascen.')
                }
            }

            // append child
            div.appendChild(p);
            div.appendChild(p2);
            div.appendChild(p3);
            
        }
        else{
            singleButton.setAttribute("disabled", "");
            alert('you cant select more এই তরে না কইছি গাড়ি খাইয়া গাজা চালাবি না ');
        }
        
    })
}