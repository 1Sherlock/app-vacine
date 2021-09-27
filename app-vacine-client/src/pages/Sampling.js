import React, {useEffect} from 'react';
import Layout from "../components/Layout";
import {connect} from "react-redux";
import {deleteLocation, getLocations, search, updateState} from "../redux/actions/locationAction";
import {Modal, ModalFooter, ModalHeader} from "reactstrap";

const Sampling = (props) => {

    useEffect(() => {
        props.getLocations();
    }, [])

    const addLocation = () => {
        props.history.push("/addloc");
    };

    return (
        <Layout location={props.history.location.pathname}>

            <div className="container">
                <div className="d-flex my-3 justify-content-between users-number-row">
                    <div className="">
                        <h4>Место забора анализа</h4>
                    </div>

                    <div className="d-flex">
                        <button onClick={addLocation} className="btn btn-primary mr-4 px-4 font-weight-bold shadow-none" type="button"> +
                        </button>

                        <div className="input-group">
                            <input className="form-control py-2 shadow-none" type="search" onChange={(e) => props.search(e.target.value)} placeholder="Поиск..."
                                   id="example-search-input"/>
                            <span className="input-group-append">
                                   <button className="btn btn-primary shadow-none" type="button">
                                       <img src="/search.png" alt=""/>
                                   </button>
                               </span>
                        </div>
                    </div>
                </div>

                <table className="table table-bordered table-striped table-sm">
                    <thead>
                    <tr>
                        <th>название (ru)</th>
                        <th>название (en)</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.searchs.map(item => (
                        <tr>
                            <td className="py-2 ">{item.nameRu}</td>
                            <td className="py-2 ">{item.nameEn}</td>
                            <td className="py-2 d-flex align-items-center justify-content-center">
                                <button className="btn btn-outline-danger btn-sm shadow-none" onClick={() => props.updateState({isDeleteModalShow: true, selectedId: item.id})}>
                                    <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="delete"
                                         width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                        <path
                                            d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"/>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>

            <Modal isOpen={props.isDeleteModalShow} toggle={() => props.updateState({isDeleteModalShow: false, selectedId: null})}>
                <ModalHeader>
                    Вы уверены, что хотите удалить?
                </ModalHeader>
                <ModalFooter>
                    <button className="btn btn-danger" onClick={props.deleteLocation}>Удалить</button>
                    <button className="btn btn-secondary" onClick={() => props.updateState({isDeleteModalShow: false, selectedId: null})}>Отменить</button>
                </ModalFooter>
            </Modal>
        </Layout>
    );
};

const mapStateToProps = (state) => {
    return {
        locations: state.location.locations,
        searchs: state.location.search,
        isDeleteModalShow: state.location.isDeleteModalShow,
        selectedId: state.location.selectedId,
    }
}

export default connect(mapStateToProps, {getLocations, updateState, deleteLocation, search})(Sampling);