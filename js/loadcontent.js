localStorage.removeItem("selected_archive");
localStorage.removeItem("selected_event");
localStorage.removeItem("full_name");
localStorage.removeItem("address");
localStorage.removeItem("phone");
localStorage.removeItem("email");
localStorage.removeItem("date");
localStorage.removeItem("your_full_name");
localStorage.removeItem("passport_series");
localStorage.removeItem("passport_number");
localStorage.removeItem("passport_given");
localStorage.removeItem("full_name_marriage");
localStorage.removeItem("event_date");
localStorage.removeItem("event_place");
localStorage.removeItem("religion");
localStorage.removeItem("father_name");
localStorage.removeItem("mother_name");
localStorage.removeItem("relatedness");
localStorage.removeItem("purpose");
localStorage.removeItem("way_to_get");

function handleArchiveSelection(archiveName){
    localStorage.setItem("selected_archive", JSON.stringify(archiveName))
    checkEventsSelection();
}
function handleEventSelection(selectedEvent){
    localStorage.setItem("selected_event", JSON.stringify(selectedEvent));
    checkEventsSelection();
}

function handleInputValues(inputName, inputValue){
    switch (inputName) {
        case 'date_input':
            localStorage.setItem("date", JSON.stringify(inputValue));
            break;
        case 'your_full_name':
            localStorage.setItem("your_full_name", JSON.stringify(inputValue));
            break;
        case 'address':
            localStorage.setItem("address", JSON.stringify(inputValue));
            break;
        case 'phone':
            localStorage.setItem("phone", JSON.stringify(inputValue));
            break;
        case 'email':
            localStorage.setItem("email", JSON.stringify(inputValue));
            break;
        case 'passport_series':
            localStorage.setItem("passport_series", JSON.stringify(inputValue));
            break;
        case 'passport_number':
            localStorage.setItem("passport_number", JSON.stringify(inputValue));
            break;
        case 'passport_given':
            localStorage.setItem("passport_given", JSON.stringify(inputValue));
            break;
        case 'certificate_type':
            localStorage.setItem("certificate_type", JSON.stringify(inputValue));
            break;
        case 'full_name':
            localStorage.setItem("full_name", JSON.stringify(inputValue));
            break;
        case 'full_name_marriage':
            localStorage.setItem("full_name_marriage", JSON.stringify(inputValue));
            break;
        case 'event_date':
            localStorage.setItem("event_date", JSON.stringify(inputValue));
            break;
        case 'event_place':
            localStorage.setItem("event_place", JSON.stringify(inputValue));
            break;
        case 'religion':
            localStorage.setItem("religion", JSON.stringify(inputValue));
            break;
        case 'father_name':
            localStorage.setItem("father_name", JSON.stringify(inputValue));
            break;
        case 'mother_name':
            localStorage.setItem("mother_name", JSON.stringify(inputValue));
            break;
        case 'relatedness':
            localStorage.setItem("relatedness", JSON.stringify(inputValue));
            break;
        case 'purpose':
            localStorage.setItem("purpose", JSON.stringify(inputValue));
            break;
        case 'way_to_get':
            localStorage.setItem("way_to_get", JSON.stringify(inputValue));
            break;
        default:
            break;
    }
}

function checkEventsSelection(){
    if (localStorage.getItem("selected_archive") && localStorage.getItem("selected_event")){
        loadContent();
    }
}


function loadContent(){
    document.querySelector('.form_application_info').innerHTML = '';
    archiveFormFields[JSON.parse(localStorage.getItem("selected_archive"))][JSON.parse(localStorage.getItem("selected_event"))].forEach(element => {
        document.querySelector('.form_application_info').innerHTML += element
    });
}
 