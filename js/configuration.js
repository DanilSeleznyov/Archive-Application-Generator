const groupPassportSeries = `<div class="form_group">
								<label for="passport_series">Серія паспорту</label>
								<input
									class="formal"
									type="text"
									id="passport_series"
									name="passport_series"
									placeholder="ХХ"
                                    oninput="handleInputValues(this.id, this.value)"
									required
								/>
							</div>`,
    groupPassportInfoTitle = `<h3>Паспортні дані</h3>`,

    groupPassportNumber = `<div class="form_group">
								<label for="passport_number">Номер паспорту</label>
								<input
									class="formal"
									type="text"
									id="passport_number"
									name="passport_number"
                                    oninput="handleInputValues(this.id, this.value)"
									placeholder="000000"
									required
								/>
							</div>`,
    groupPassportGiven = `<div class="form_group">
								<label for="passport_given">Паспорт виданий</label>
								<textarea
									class="formal"
									id="passport_given"
									name="passport_given"
									rows="3"
                                    oninput="handleInputValues(this.id, this.value)"
									placeholder="...таким-то органом, такої-то дати"
									required
								></textarea>
							</div>`,
    groupArchiveCertType = `<div class="form_group form_group_radio">
                                <label for="certificate_type" style="font-size: 18px; font-weight: bold;">Тип відповіді</label>
                                <label class="form_radio_wrapper">
                                    <input
                                        type="radio" class="form_input_radio"
                                        id="certificate_type"
                                        name="certificate_type"
                                        oninput="handleInputValues(this.id, 'Архівна довідка')"
                                        checked
                                    />
                                    Архівна довідка
                                </label>
                                <label class="form_radio_wrapper">
                                    <input 
                                        type="radio" class="form_input_radio"
                                        id="certificate_type" 
                                        name="certificate_type" 
                                        oninput="handleInputValues(this.id, 'Архівна копія')"
                                    />
                                    Архівна копія
                                </label>
                            </div>`,
    groupRequestFullName = `<div class="form_group">
                                <label for="full_name">Повне ім'я народженого/померлого</label>
                                <input
                                    class="formal"
                                    type="text"
                                    id="full_name"
                                    name="full_name"
                                    oninput="handleInputValues(this.id, this.value)"
                                    placeholder="Іванов Іван Іванович"
                                    required
                                />
                            </div>`,
    groupRequestFullNameMarriage = `<div class="form_group">
                                        <label for="full_name_marriage">Повне ім'я одружених/розлучених</label>
                                        <textarea
                                            class="formal"
                                            id="full_name_marriage"
                                            name="full_name_marriage"
                                            oninput="handleInputValues(this.id, this.value)"
                                            placeholder="Іванов Іван Іванович та Петрова Ольга Петрівна"
                                            required
                                        ></textarea>
                                    </div>`,
    groupRequestDate = `<div class="form_group">
                            <label for="event_date">Дата події</label>
                            <input
                                class="formal"
                                type="text"
                                id="event_date"
                                oninput="handleInputValues(this.id, this.value)"
                                name="event_date"
                                placeholder="1 січня 1950 року"
                                required
                            />
                        </div>`,
    groupRequestPlace = `<div class="form_group">
                             <label for="event_place">Місце події</label>
                             <textarea
                                 class="formal"
                                 id="event_place"
                                 name="event_place"
                                 oninput="handleInputValues(this.id, this.value)"
                                 placeholder="Область, район, населений пункт"
                                 required
                             ></textarea>
                         </div>`,
    groupRequestReligion = `<div class="form_group">
                                <label for="religion">Віросповідання (якщо до 1919 року)</label>
                                <input
                                    class="formal"
                                    type="text"
                                    id="religion"
                                    oninput="handleInputValues(this.id, this.value)"
                                    name="religion"
                                    placeholder="Православне, католицьке..."
                                    required
                                />
                            </div>`,
    groupRequestFather = `<div class="form_group">
                               <label for="father_name">Ім'я батька народженого</label>
                               <input
                                   class="formal"
                                   type="text"
                                   id="father_name"
                                   name="father_name"
                                   oninput="handleInputValues(this.id, this.value)"
                                   placeholder="Іванов Іван Іванович"
                                   required
                               />
                           </div>`,
    groupRequestMother = `<div class="form_group">
                                <label for="mother_name">Ім'я матері народженого</label>
                                <input
                                    class="formal"
                                    type="text"
                                    id="mother_name"
                                    name="mother_name"
                                    oninput="handleInputValues(this.id, this.value)"
                                    placeholder="Іванова Ольга Іванівна"
                                    required
                                />
                            </div>`,
    groupRelatednessExtent = `<div class="form_group">
                                    <label for="relatedness">Ступінь родинного зв'язку заявника</label>
                                    <input
                                        class="formal"
                                        type="text"
                                        id="relatedness"
                                        name="relatedness"
                                        oninput="handleInputValues(this.id, this.value)"
                                        placeholder="Правнук, син, дочка..."
                                        required
                                    />
                                </div>`,
    groupRequestPurpose = `<div class="form_group">
						    	<label for="purpose">Мета заяви</label>
						    	<textarea
						    		class="formal"
						    		id="purpose"
						    		name="purpose"
						    		rows="3"
                                    oninput="handleInputValues(this.id, this.value)"
						    		placeholder="Інформація потрібна для..."
						    		required
						    	></textarea>
						    </div>`,
    groupRequestWayToGet = `<div class="form_group form_group_radio">
                                <label for="way_to_get" style="font-size: 18px; font-weight: bold;">Спосіб отримання відповіді</label>
                                <label class="form_radio_wrapper">
                                    <input type="radio" id="way_to_get" class="form_input_radio"
                                    name="way_to_get" oninput="handleInputValues(this.id, 'Електронна пошта')"/>
                                    Електронна пошта
                                </label>
                                <label class="form_radio_wrapper">
                                    <input type="radio" id="way_to_get" class="form_input_radio"
                                    name="way_to_get" oninput="handleInputValues(this.id, 'Укрпошта')"/>
                                    Укрпошта
                                </label>
                                <label class="form_radio_wrapper">
                                    <input type="radio" id="way_to_get" class="form_input_radio"
                                    name="way_to_get" oninput="handleInputValues(this.id, 'Особисто')"/>
                                    Особисто
                                </label>
                                <label class="form_radio_wrapper">
                                    <input type="radio" id="way_to_get" class="form_input_radio"
                                    name="way_to_get" oninput="handleInputValues(this.id, 'Кур\'єром за рахунок отримувача')"/>
                                    Кур\'єром за рахунок отримувача
                                </label>
                            </div>`;
                            // « »



const archiveFormFields = {
    kyiv_archive: {
        birth: [groupRequestFullName, groupRequestDate, groupRequestPlace, groupRequestFather, groupRequestMother, groupRequestPurpose,],
        marriage: [groupRequestFullNameMarriage, groupRequestDate, groupRequestPlace, groupRequestPurpose,],
        divorce: [groupRequestFullNameMarriage, groupRequestDate, groupRequestPlace, groupRequestPurpose,],
        death: [groupRequestFullName, groupRequestDate, groupRequestPlace, groupRequestPurpose,],
    },
    lviv_archive: {
        birth: [],
        marriage: [],
        divorce: [],
        death: [],
    },
    odessa_archive: {
        birth: [],
        marriage: [],
        divorce: [],
        death: [],
    },
    kharkiv_archive: {
        birth: [groupRequestFullName, groupRequestDate, groupRequestPlace, groupRequestFather, groupRequestMother, groupRequestPurpose, groupArchiveCertType, groupRequestWayToGet,],
        marriage: [groupRequestFullNameMarriage, groupRequestDate, groupRequestPlace, groupRequestPurpose, groupArchiveCertType, groupRequestWayToGet,],
        divorce: [groupRequestFullNameMarriage, groupRequestDate, groupRequestPlace, groupRequestPurpose, groupArchiveCertType, groupRequestWayToGet,],
        death: [groupRequestFullName, groupRequestDate, groupRequestPlace, groupRequestPurpose, groupArchiveCertType, groupRequestWayToGet,],
    },
    dnipro_archive: {
        birth: [groupRequestFullName, groupRequestDate, groupRequestPlace, groupRequestFather, groupRequestMother, groupRequestReligion, groupRequestPurpose, groupRelatednessExtent, groupRequestWayToGet,],
        marriage: [groupRequestFullNameMarriage, groupRequestDate, groupRequestPlace, groupRequestReligion, groupRequestPurpose, groupRelatednessExtent, groupRequestWayToGet,],
        divorce: [groupRequestFullNameMarriage, groupRequestDate, groupRequestPlace, groupRequestReligion, groupRequestPurpose, groupRelatednessExtent, groupRequestWayToGet,],
        death: [groupRequestFullName, groupRequestDate, groupRequestPlace, groupRequestReligion, groupRequestPurpose, groupRelatednessExtent, groupRequestWayToGet,],
    },
    vinnytsia_archive: {
        birth: [],
        marriage: [],
        divorce: [],
        death: [],
    },
    chernivtsi_archive: {
        birth: [],
        marriage: [],
        divorce: [],
        death: [],
    },
    ivano_frankivsk_archive: {
        birth: [],
        marriage: [],
        divorce: [],
        death: [],
    },
    zhytomyr_archive: {
        birth: [groupArchiveCertType, groupRequestFullName,
            groupRequestDate, groupRequestPlace, groupRequestReligion, groupRequestFather, groupRequestMother, groupRequestPurpose, groupRequestWayToGet, groupPassportInfoTitle, groupPassportNumber, groupPassportSeries, groupPassportGiven, ],
        marriage: [groupArchiveCertType, groupRequestFullNameMarriage,
            groupRequestDate, groupRequestPlace, groupRequestReligion, groupRequestPurpose, groupRequestWayToGet, groupPassportInfoTitle, groupPassportNumber, groupPassportSeries, groupPassportGiven, ],
        divorce: [groupArchiveCertType, groupRequestFullNameMarriage,
            groupRequestDate, groupRequestPlace, groupRequestPurpose, groupRequestWayToGet, groupPassportInfoTitle, groupPassportNumber, groupPassportSeries, groupPassportGiven, ],
        death: [groupArchiveCertType, groupRequestFullName,
            groupRequestDate, groupRequestPlace, groupRequestReligion, groupRequestPurpose, groupRequestWayToGet, groupPassportInfoTitle, groupPassportNumber, groupPassportSeries, groupPassportGiven, ],
    },
    zaporizhzhia_archive: {
        birth: [],
        marriage: [],
        divorce: [],
        death: [],
    },
    poltava_archive: {
        birth: [],
        marriage: [],
        divorce: [],
        death: [],
    },
    sumy_archive: {
        birth: [],
        marriage: [],
        divorce: [],
        death: [],
    },
    chernihiv_archive: {
        birth: [],
        marriage: [],
        divorce: [],
        death: [],
    },
    khmelnytskyi_archive: {
        birth: [],
        marriage: [],
        divorce: [],
        death: [],
    },
    mykolaiv_archive: {
        birth: [],
        marriage: [],
        divorce: [],
        death: [],
    },
    cherkasy_archive: {
        birth: [groupRequestFullName, groupRequestDate, groupRequestPlace, groupRequestReligion, groupRequestFather, groupRequestMother, groupRequestPurpose, groupRequestWayToGet, groupPassportInfoTitle, groupPassportNumber, groupPassportSeries, groupPassportGiven, ],
        marriage: [groupRequestFullNameMarriage, groupRequestDate, groupRequestPlace, groupRequestReligion, groupRequestPurpose, groupRequestWayToGet, groupPassportInfoTitle, groupPassportNumber, groupPassportSeries, groupPassportGiven, ],
        divorce: [groupRequestFullNameMarriage, groupRequestDate, groupRequestPlace, groupRequestPurpose, groupRequestWayToGet, groupPassportInfoTitle, groupPassportNumber, groupPassportSeries, groupPassportGiven, ],
        death: [groupRequestFullName, groupRequestDate, groupRequestPlace, groupRequestReligion, groupRequestPurpose, groupRequestWayToGet, groupPassportInfoTitle, groupPassportNumber, groupPassportSeries, groupPassportGiven, ],
    },
    rivne_archive: {
        birth: [],
        marriage: [],
        divorce: [],
        death: [],
    },
    ternopil_archive: {
        birth: [],
        marriage: [],
        divorce: [],
        death: [],
    },
    volyn_archive: {
        birth: [],
        marriage: [],
        divorce: [],
        death: [],
    },
    zakarpattia_archive: {
        birth: [],
        marriage: [],
        divorce: [],
        death: [],
    },
    kropyvnytskyi_archive: {
        birth: [],
        marriage: [],
        divorce: [],
        death: [],
    },
    lugansk_archive: {
        birth: [],
        marriage: [],
        divorce: [],
        death: [],
    },
    donetsk_archive: {
        birth: [],
        marriage: [],
        divorce: [],
        death: [],
    },
}




