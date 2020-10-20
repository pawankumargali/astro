$(document).ready(function() {
    let order = JSON.parse(localStorage.getItem('order'));
    let pricing = {
        'astrology': {'online': 51, 'offline':101 },
        'vasthu' : { 'online': 101, 'offline':151 }
    };
    let consultationType = {
        'online': 'Virtual',
        'offline': 'In Person'
    }
    console.log(order);
    const { name, email, mobile, gender, service, DOB, timeofbirth, place, consultation, message } = order;
    let price=0;
    let paymentBtn = null;
    if(service.toLowerCase().includes('vasthu') || service.toLowerCase().includes('vastu')) {
        if(consultation=='online') { 
            price = pricing['vasthu']['online'];
            paymentBtn = createPayPalButton('vasthu', 'online');
        }
        else {
            price = pricing['vasthu']['offline'];
            paymentBtn = createPayPalButton('vasthu', 'offline');
        }
    }
    else if(service.toLowerCase().includes('astrology')) {
        if(consultation=='online') {
            price = pricing['astrology']['online'];
            paymentBtn = createPayPalButton('astrology', 'online');
        }
        else {
            price = pricing['astrology']['offline'];
            paymentBtn = createPayPalButton('astrology', 'offline');
        }
    }

    const checkoutItem = createCheckoutItem(name, email, mobile, gender, consultationType[consultation], DOB, timeofbirth, place, message);
    $('#checkout-items').append(checkoutItem);
    $('#total-amt').text(price);
    $('#place-order-btn').html(paymentBtn);
});


function createCheckoutItem(name, email, mobile, gender, consultation, DOB, timeofbirth, place, message) {
    const checkoutItem = document.createElement('div');
    checkoutItem.classList.add('checkout-item');

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('product-info');

    const nameElt = document.createElement('h4');
    nameElt.classList.add('product-name');
    const nameText = document.createTextNode(`Name: ${name}`);
    nameElt.appendChild(nameText);

    const emailElt = document.createElement('h4');
    emailElt.classList.add('product-name');
    const emailText = document.createTextNode(`Email: ${email}`);
    emailElt.appendChild(emailText);

    const mobileElt = document.createElement('h4');
    mobileElt.classList.add('product-name');
    const mobileText = document.createTextNode(`Mobile: ${mobile}`);
    mobileElt.appendChild(mobileText);

    const genderElt = document.createElement('h4');
    genderElt.classList.add('product-name');
    const genderText = document.createTextNode(`Gender: ${gender}`);
    genderElt.appendChild(genderText);

    const consultationElt = document.createElement('h4');
    consultationElt.classList.add('product-name');
    const consultationText = document.createTextNode(`Consultation Type: ${consultation}`);
    consultationElt.appendChild(consultationText);

    const DOBElt = document.createElement('h4');
    DOBElt.classList.add('product-name');
    const DOBText = document.createTextNode(`Date of Birth: ${DOB}`);
    DOBElt.appendChild(DOBText);

    const timeofbirthElt = document.createElement('h4');
    timeofbirthElt.classList.add('product-name');
    const timeofbirthText = document.createTextNode(`Time of Birth: ${timeofbirth}`);
    timeofbirthElt.appendChild(timeofbirthText);

    const placeElt = document.createElement('h4');
    placeElt.classList.add('product-name');
    const placeText = document.createTextNode(`Place of Birth: ${place}`);
    placeElt.appendChild(placeText);

    const messageElt = document.createElement('h4');
    messageElt.classList.add('product-name');
    const messageText = document.createTextNode(`Message: ${message}`);
    messageElt.appendChild(messageText);

    infoDiv.appendChild(nameElt);
    infoDiv.appendChild(emailElt);
    infoDiv.appendChild(mobileElt);
    infoDiv.appendChild(genderText);
    infoDiv.appendChild(consultationElt);
    infoDiv.appendChild(DOBElt);
    infoDiv.appendChild(timeofbirthElt);
    infoDiv.appendChild(placeElt);
    infoDiv.appendChild(messageElt);

    checkoutItem.appendChild(infoDiv);

    return checkoutItem;
}



let astrologyOnlineBtn=`<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_s-xclick">
  <input type="hidden" name="hosted_button_id" value="G9NQV4FF78WQY">
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
  </form>`;

let astrologyOfflineBtn = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="6CMGVRPCNSPJU">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>`;

let vasthuOnlineBtn=`<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="HLTHPGTG4P4BG">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>`;

let vasthuOfflineBtn=`<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="G9NQV4FF78WQY">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>`;

function createPayPalButton(service, consultation) {
  
  let payButton= {
    'astrology': {
        'online': astrologyOnlineBtn, 
        'offline': astrologyOfflineBtn 
    },
    'vasthu' : { 
        'online': vasthuOnlineBtn, 
        'offline':vasthuOfflineBtn 
    }
  }
  
  return payButton[service][consultation];
}