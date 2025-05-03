// « »
function setDefaultDate() {
    const monthPack = {
        1: 'січня',
        2: 'лютого',
        3: 'березня',
        4: 'квітня',
        5: 'травня',
        6: 'червня',
        7: 'липня',
        8: 'серпня',
        9: 'вересня',
        10: 'жовтня',
        11: 'листопада',
        12: 'грудня',
    }
    const dateInput = document.getElementById('date_input')
    const dateRadioGroup =
        document.getElementById('date_radio_group')

    // Set default date
    const today = new Date()
    const formattedDate = `«${String(today.getDate()).padStart(
        2,
        '0'
    )}»   ${String(monthPack[today.getMonth() + 1])}    ${today.getFullYear()} р.`
    dateInput.value = formattedDate
    localStorage.setItem('date', JSON.stringify(formattedDate))

    // Handle radio button change
    dateRadioGroup.addEventListener('change', (event) => {
        if (event.target.value === 'custom') {
            dateInput.removeAttribute('readonly')
            dateInput.style.backgroundColor = ''
            dateInput.style.cursor = 'text'
            dateInput.value = ''
        } else {
            dateInput.setAttribute('readonly', true)
            dateInput.style.backgroundColor = '#e0e0e0'
            dateInput.style.cursor = 'not-allowed'
            dateInput.value = formattedDate
        }
    })

}
document.addEventListener('DOMContentLoaded', () => {
    setDefaultDate()
})

localStorage.setItem('certificate_type', JSON.stringify('Архівна довідка'))