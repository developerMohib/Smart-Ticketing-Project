
let maximumSeletct = 4;

// 0 select seat 
let initialSelectNumber = document.getElementById('initialSelect');

//  40 seat find
let totalSeatTextNumber = document.getElementById('totalSeat');

//  initialTaka 00
let initialTaka = document.getElementById('initialTaka') ;

let grandTotal = document.getElementById('grandTotal');
// console.log(totalTaka);

function elementConverter(elementId){
    let element = document.getElementById(elementId);
    let elementText = element.innerText;
    let elementNumber = parseInt(elementText);
    return elementNumber;

}

let elementNumber = elementConverter('initialSelect');
let totalSeatNumber = elementConverter('totalSeat');
let totalTaka = elementConverter('initialTaka');



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
        

        if( elementNumber < maximumSeletct){
            
            // color change and count Number 
            singleButton.style.backgroundColor = 'green';
            elementNumber++;
            totalSeatNumber--;

            // change the number 
            // element.innerText = elementNumber;
            initialSelectNumber.innerText = elementNumber;
            totalSeatTextNumber.innerText = elementNumber;

            // caltulate taka
            let withoutOff = elementNumber * 550 ;
            initialTaka.innerText = withoutOff;

            // discont offer 
            if(elementNumber === maximumSeletct){
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