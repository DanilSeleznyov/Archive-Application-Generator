document.querySelector('.application_form').addEventListener('submit', function (e) {
    e.preventDefault();

    let your_name = JSON.parse(localStorage.getItem('your_full_name') || '{}'),
        your_address = JSON.parse(localStorage.getItem('address') || '{}'),
        your_phone = JSON.parse(localStorage.getItem('phone') || '{}'),
        your_email = JSON.parse(localStorage.getItem('email') || '{}'),
        person = JSON.parse(localStorage.getItem('full_name') || '{}'),
        he_and_she = JSON.parse(localStorage.getItem('full_name_marriage') || '{}'),
        time_of_event = JSON.parse(localStorage.getItem('event_date') || '{}'),
        place_of_event = JSON.parse(localStorage.getItem('event_place') || '{}'),
        father_name = JSON.parse(localStorage.getItem('father_name') || '{}'),
        mother_name = JSON.parse(localStorage.getItem('mother_name') || '{}'),
        purpose_of_request = JSON.parse(localStorage.getItem('purpose') || '{}'),
        time_of_application = JSON.parse(localStorage.getItem('date') || '{}'),
        passport_number = JSON.parse(localStorage.getItem('passport_number') || '{}'),
        passport_series = JSON.parse(localStorage.getItem('passport_series') || '{}'),
        passport_given = JSON.parse(localStorage.getItem('passport_given') || '{}'),
        relatedness = JSON.parse(localStorage.getItem('relatedness') || '{}'),
        certificate_type = JSON.parse(localStorage.getItem('certificate_type') || '{}'),
        religion = JSON.parse(localStorage.getItem('religion') || '{}'),
        way_to_get = JSON.parse(localStorage.getItem('way_to_get') || '{}'),
        full_name_marriage = JSON.parse(localStorage.getItem('full_name_marriage') || '{}'),
        selected_archive = JSON.parse(localStorage.getItem('selected_archive') || '{}'),
        selected_event = JSON.parse(localStorage.getItem('selected_event') || '{}');

    fetch(`templates/${selected_archive}/${selected_archive}_${selected_event}.docx`)
        .then(res => res.arrayBuffer())
        .then(content => {
            const zip = new PizZip(content);
            const doc = new window.docxtemplater(zip, {
                paragraphLoop: true,
                linebreaks: true,
            });

            doc.setData({time_of_application, your_name, your_address,
                 your_phone, your_email, person, he_and_she, time_of_event,
                 place_of_event, father_name, mother_name, purpose_of_request,
                  passport_number, passport_series, passport_given, relatedness,
                   certificate_type, religion, way_to_get, full_name_marriage});

            try {
                doc.render();
                const out = doc.getZip().generate({
                    type: 'blob',
                    mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                });
                saveAs(out, 'Заява.docx');
            } catch (error) {
                console.error(error);
                alert('ERROR');
            }
        });
});




// full_name
// address
// phone
// email
// date
// your_full_name
// passport_series
// passport_number
// passport_given
// certificate_type
// full_name_marriage
// event_date
// event_place
// religion
// father_name
// mother_name
// relatedness
// he_and_she
// way_to_get
// purpose
