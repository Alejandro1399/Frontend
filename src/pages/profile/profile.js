import React from "react";
import './profile.scss'

import NavBar from '../../components/NavBar/navbar'
const Profile = () => {
    return (
        <div className="profile">
            <NavBar />
            <div className="container-fluid">
                <div className="edit-profile">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title mb-0">{"Mi Perfil"}</h4>
                                    <div className="card-options">
                                        <a className="card-options-collapse" href="javascript" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a><a className="card-options-remove" href="javascript" data-toggle="card-remove"><i className="fe fe-x"></i></a></div>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row mb-2">
                                            <div className="col-auto"><img className="img_70_rounded_circle" alt="" src="https://www.un.org/sites/un2.un.org/files/user.png" /></div>
                                            <div className="col">
                                                <h3 className="mb-1">{"MarkJecno"}</h3>
                                                <p className="mb-4">{"Designer"}</p>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <h6 className="form-label">{"Bio"}</h6>
                                            <textarea className="form-control" rows="5" defaultValue="On the other hand, we denounce with righteous indignation" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">{"EmailAddress"}</label>
                                            <input className="form-control" placeholder="your-email@domain.com" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <form className="card">
                                <div className="card-header">
                                    <h4 className="card-title mb-0">{"Editar perfil"}</h4>
                                    <div className="card-options"><a className="card-options-collapse" href="javascript" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a><a className="card-options-remove" href="javascript" data-toggle="card-remove"><i className="fe fe-x"></i></a></div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-auto"><img className="img_70_rounded_circle" alt="" src="https://www.un.org/sites/un2.un.org/files/user.png" /></div>
                                        <div className="col-sm-3 col-md-3">
                                            <div className="form-group">
                                                <label className="form-label">{"Nombre"}</label>
                                                <input className="form-control" type="text" placeholder="Username" />
                                            </div>
                                        </div>
                                        <div className="col-sm-3 col-md-4">
                                            <div className="form-group">
                                                <label className="form-label">{"EmailAddress"}</label>
                                                <input className="form-control" type="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-0">
                                                <label className="form-label">{"AboutMe"}</label>
                                                <textarea className="form-control" rows="5" placeholder="Enter About your description"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-right">
                                    <button className="btn btn-primary" type="submit">{"UpdateProfile"}</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Profile