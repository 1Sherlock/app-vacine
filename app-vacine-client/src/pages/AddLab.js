import React from 'react';
import Layout from "../components/Layout";
import {AvField, AvForm} from "availity-reactstrap-validation";
import {connect} from "react-redux";
import {save} from "../redux/actions/laboAction";

const AddLab = (props) => {
    return (
        <Layout>
            <div className="container py-3">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <AvForm onValidSubmit={(e, v) => props.save(v, props.history)}>
                            <h4 className="text-uppercase">Добавить новое</h4>

                            <AvField type="text" className="shadow-none" placeholder="Названия на русском"
                                     required
                                     label={<>Названия на русском <span className="text-danger"> * </span></>}
                                     name="nameRu"/>

                            <AvField type="text" className="shadow-none"
                                     placeholder="Названия на английском"
                                     required name="nameEn"
                                     label={<>Названия на английском <span className="text-danger"> * </span></>}
                            />

                            <div className="form-group">
                                <button className="btn btn-primary" name="enter-location" type="submit"
                                        id="send-to-location">Добавить
                                </button>
                                <span className="text-danger"> *</span>
                                <small>- Ячейки, которые нужно заполнить!</small>
                            </div>

                        </AvForm>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
const mapStateToProps = (state) => {
    return {
        isLoading: state.labo.isLoading,

    }
}

export default connect(mapStateToProps, {save})(AddLab);