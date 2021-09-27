import React, {useEffect} from 'react';
import Layout from "../components/Layout";
import {AvForm, AvField} from "availity-reactstrap-validation";
import {getLocations} from "../redux/actions/locationAction";
import {getLabos} from "../redux/actions/laboAction";
import {connect} from "react-redux";
import {save} from "../redux/actions/resultAction";

const AddResult = (props) => {
    useEffect(() => {
        props.getLabos();
        props.getLocations();
    }, []);

    const submit = (e) => {
        e.preventDefault();
        props.save(
            {
                serial: e.target.serial.value,
                fullName: e.target.fullName.value,
                birthDate: e.target.birthDate.value,
                gender: e.target.gender.value,
                vacinePlace: e.target.vacinePlace.value,
                passportNumber: e.target.passportNumber.value,
                vacineType: e.target.vacineType.value,
                vacineSerials: [
                    e.target.vacineSerialsZero.value && e.target.vacineSerialsZero.value.length > 0 ? e.target.vacineSerialsZero.value : '-',
                    e.target.vacineSerialsOne.value && e.target.vacineSerialsOne.value.length > 0 ? e.target.vacineSerialsOne.value : '-',
                    e.target.vacineSerialsTwo.value && e.target.vacineSerialsTwo.value.length > 0 ? e.target.vacineSerialsTwo.value : '-',
                ],
                vacineDates: [
                    e.target.vacineDatesZero.value && e.target.vacineDatesZero.value.length > 0 ? e.target.vacineDatesZero.value : '-',
                    e.target.vacineDatesOne.value && e.target.vacineDatesOne.value.length > 0 ? e.target.vacineDatesOne.value : '-',
                    e.target.vacineDatesTwo.value && e.target.vacineDatesTwo.value.length > 0 ? e.target.vacineDatesTwo.value : '-',
                ],
                pinfl: e.target.pinfl.value,
                givenDate: e.target.givenDate.value,
            },
            props.history,
            props.location.state ? props.location.state.item.id : null
        )
    }
    return (
        <Layout>

            <div className="container py-3">
                <h3 className="text-uppercase">Добавить новое</h3>

                {/*<AvForm onValidSubmit={(e, v) => props.save(v, props.history, props.location.state ? props.location.state.item.id : null )} model={props.location.state ? {...props.location.state.item, laboratory: props.location.state.item.laboratory.id, place: props.location.state.item.place.id}:{}}>*/}
                {/*    <div className="row">*/}
                {/*        <div className="col-md-12">*/}
                {/*            <p className="font-weight-bold">Информация о пользователе</p>*/}
                {/*        </div>*/}

                {/*        <div className="col-md-4 col-sm-6">*/}
                {/*            <AvField type="text" label={<>ID <span className="text-danger"> * </span></>}*/}
                {/*                     className="shadow-none" placeholder="id" required*/}
                {/*                     name="serial"/>*/}

                {/*            <AvField type="text" label={<>Полное имя <span className="text-danger"> * </span></>}*/}
                {/*                     className="shadow-none" placeholder="Полное имя"*/}
                {/*                     required name="fullName"/>*/}
                {/*        </div>*/}

                {/*        <div className="col-md-4 col-sm-6">*/}
                {/*            <AvField type="text" className="shadow-none"*/}
                {/*                     label={<> Дата рождения <span className="text-danger"> * </span></>}*/}
                {/*                     placeholder="Дата рождения"*/}
                {/*                     required name="birthDate"/>*/}

                {/*            <AvField name="gender" type="select" className="shadow-none" required*/}
                {/*                     label={<>Пол <span className="text-danger"> * </span></>}>*/}
                {/*                <option>-- Выберите пол --</option>*/}
                {/*                <option value="Mужчина / Male">Mужчина</option>*/}
                {/*                <option value="Женщина / Female">Женщина</option>*/}
                {/*            </AvField>*/}
                {/*        </div>*/}

                {/*        <div className="col-md-4 col-sm-6">*/}
                {/*            <AvField type="text" label={<> Адрес <span className="text-danger"> * </span></>}*/}
                {/*                     className="shadow-none" placeholder="Адрес " required*/}
                {/*                     name="address"/>*/}

                {/*            <AvField type="text" className="shadow-none" label={<>Серия и номер паспорта <span*/}
                {/*                className="text-danger"> * </span></>}*/}
                {/*                     placeholder="Серия и номер паспорта " required name="passportNumber"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className="row">*/}
                {/*        <div className="col-md-12">*/}
                {/*            <p className="font-weight-bold">Анализ</p>*/}
                {/*        </div>*/}

                {/*        <div className="col-md-4 col-sm-6">*/}
                {/*            <div className="form-group">*/}
                {/*                <AvField type="text" label={<> Метод исследования Ru <span*/}
                {/*                    className="text-danger"> * </span></>} className="shadow-none"*/}
                {/*                       placeholder="Метод исследования Ru " required name="methodRu"/>*/}
                {/*            </div>*/}

                {/*                <AvField type="text" label={<>Метод исследования En <span*/}
                {/*                    className="text-danger"> * </span></>} className="shadow-none"*/}
                {/*                       placeholder="Метод исследования En" required name="methodEn"/>*/}
                {/*        </div>*/}

                {/*        <div className="col-md-4 col-sm-6">*/}
                {/*                <AvField name="laboratory" type="select" label={<>Лаборатория (название) <span*/}
                {/*                    className="text-danger"> * </span></>} className="shadow-none" required>*/}
                {/*                    <option>-- Выберите --</option>*/}
                {/*                    {props.labos.map(item => (*/}
                {/*                        <option*/}
                {/*                            value={item.id}>{item.nameRu}*/}
                {/*                        </option>*/}
                {/*                    ))}*/}
                {/*                </AvField>*/}

                {/*                <AvField name="place" className="shadow-none" type="select" label={<> Место забора анализа <span*/}
                {/*                    className="text-danger"> * </span></>} required>*/}
                {/*                    <option>-- Выберите --</option>*/}
                {/*                    {props.locations.map(item => (*/}
                {/*                        <option*/}
                {/*                            value={item.id}>{item.nameRu}*/}
                {/*                        </option>*/}
                {/*                    ))}*/}
                {/*                </AvField>*/}
                {/*        </div>*/}

                {/*        <div className="col-md-4 col-sm-6">*/}

                {/*                <AvField name="status" label={<> Статус <span className="text-danger"> * </span></>} className="shadow-none" required type="select">*/}
                {/*                    <option>-- Выберите статус --</option>*/}
                {/*                    <option value="Positive / Положительный"> Positive / Положительный</option>*/}
                {/*                    <option value="Negative / Отрицательный"> Negative / Отрицательный</option>*/}
                {/*                </AvField>*/}

                {/*                <AvField label={<>Дата сдачи анализа <span*/}
                {/*                    className="text-danger"> * </span></>} type="text" className="shadow-none"*/}
                {/*                       placeholder="Дата сдачи анализа  " required name="analiseDate"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className="form-group">*/}
                {/*        <button className="btn btn-primary" type="submit">Добавить</button>*/}
                {/*        <span className="text-danger"> *</span>*/}
                {/*        <small>- Ячейки, которые нужно заполнить!</small>*/}
                {/*    </div>*/}
                {/*</AvForm>*/}

                <form onSubmit={submit}>
                    <div className="row">
                        <div className="col-md-12">
                            <p className="font-weight-bold">Информация о пользователе</p>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="id"> ID <span className="text-danger"> * </span></label>
                                <input type="text" className="form-control shadow-none" placeholder="id" required
                                       name="serial" id="id" defaultValue={props.location.state ? props.location.state.item.serial: ""}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="fullName"> Полное имя <span className="text-danger"> * </span></label>
                                <input type="text" className="form-control shadow-none" placeholder="Полное имя"
                                       required name="fullName" id="fullName" defaultValue={props.location.state ? props.location.state.item.fullName: ""}/>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="data-birthday"> Дата рождения <span className="text-danger"> * </span></label>
                                <input id="data-birthday" type="text" className="form-control shadow-none" placeholder="Дата рождения"
                                       required name="birthDate" defaultValue={props.location.state ? props.location.state.item.birthDate: ""}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="gender"> Пол <span className="text-danger"> * </span></label>
                                <select name="gender" id="gender" className="form-control shadow-none" required defaultValue={props.location.state ? props.location.state.item.gender: ""}>
                                    <option value="">-- Выберите пол --</option>
                                    <option value="Mужчина / Male">Erkak / Mужчина / Male</option>
                                    <option value="Женщина / Female">Ayol / Женщина / Female</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="testId"> ПИНФЛ <span className="text-danger"> * </span></label>
                                <input type="text" className="form-control shadow-none" placeholder="ПИНФЛ " required
                                       name="pinfl" id="testId" defaultValue={props.location.state ? props.location.state.item.pinfl: ""}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="passport-number"> Серия и номер паспорта <span
                                    className="text-danger"> * </span></label>
                                <input id="passport-number" type="text" className="form-control shadow-none"
                                       placeholder="Серия и номер паспорта " required name="passportNumber" defaultValue={props.location.state ? props.location.state.item.passportNumber: ""}/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <p className="font-weight-bold">Вакцинация</p>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="vacinePlace"> Место вакцинации <span
                                    className="text-danger"> * </span></label>
                                <input id="vacinePlace" type="text" className="form-control shadow-none"
                                       placeholder="Место вакцинации " required name="vacinePlace" defaultValue={props.location.state ? props.location.state.item.vacinePlace: ""}/>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="vacineType"> Тип вакцины <span
                                    className="text-danger"> * </span></label>
                                <input id="vacineType" type="text" className="form-control shadow-none"
                                       placeholder="Тип вакцины" required name="vacineType" defaultValue={props.location.state ? props.location.state.item.vacineType: ""}/>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="givenDate"> Дата выдачи<span
                                    className="text-danger"> * </span></label>
                                <input id="givenDate" type="text" className="form-control shadow-none"
                                       placeholder="Дата выдачи"  name="givenDate" defaultValue={props.location.state ? props.location.state.item.givenDate: ""}/>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p className="font-weight-bold">Вакцинация</p>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="vacineSerials1"> Номер серии 1-дозы <span
                                    className="text-danger"> * </span></label>
                                <input id="vacineSerials1" type="text" className="form-control shadow-none"
                                       placeholder="Номер серии 1-дозы "  name="vacineSerialsZero" defaultValue={props.location.state ? props.location.state.item.vacineSerials[0]: ""}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="vacineDates1"> Дата вакцинации 1-дозы <span
                                    className="text-danger"> * </span></label>
                                <input id="vacineDates1" type="text" className="form-control shadow-none"
                                       placeholder="Дата вакцинации 1-дозы "  name="vacineDatesZero" defaultValue={props.location.state ? props.location.state.item.vacineDates[0]: ""}/>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="vacineSerials2"> Номер серии 2-дозы <span
                                    className="text-danger"> * </span></label>
                                <input id="vacineSerials2" type="text" className="form-control shadow-none"
                                       placeholder="Номер серии 2-дозы "  name="vacineSerialsOne" defaultValue={props.location.state ? props.location.state.item.vacineSerials[1]: ""}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="vacineDates2"> Дата вакцинации 2-дозы <span
                                    className="text-danger"> * </span></label>
                                <input id="vacineDates2" type="text" className="form-control shadow-none"
                                       placeholder=" Дата вакцинации 2-дозы "  name="vacineDatesOne" defaultValue={props.location.state ? props.location.state.item.vacineDates[1]: ""}/>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="vacineSerials3"> Номер серии 3-дозы <span
                                    className="text-danger"> * </span></label>
                                <input id="vacineSerials3" type="text" className="form-control shadow-none"
                                       placeholder="Номер серии 3-дозы "  name="vacineSerialsTwo" defaultValue={props.location.state ? props.location.state.item.vacineSerials[2]: ""}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="vacineDates3"> Дата вакцинации 3-дозы <span
                                    className="text-danger"> * </span></label>
                                <input id="vacineDates3" type="text" className="form-control shadow-none"
                                       placeholder=" Дата вакцинации 3-дозы "  name="vacineDatesTwo" defaultValue={props.location.state ? props.location.state.item.vacineDates[2]: ""}/>
                            </div>

                        </div>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary" name="enter-data" type="submit" id="send">Добавить</button>
                        <span className="text-danger"> *</span>
                        <small>- Ячейки, которые нужно заполнить!</small>
                    </div>
                </form>

            </div>

        </Layout>

    );
};

const mapStateToProps= (state) => {
    return {
        labos: state.labo.labos,
        locations: state.location.locations
    }
}

export default connect(mapStateToProps, {getLabos, getLocations, save})(AddResult);