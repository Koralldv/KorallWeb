import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <section className="notFound">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-5 col-lg-6 ops d-flex flex-column justify-content-center align-items-start txtEr">
                        <h2 className="h2">Oooops!</h2>
                        <h3 className="h2">
                            Извините, но страницы по этому адресу не существует{' '}
                            <span role="img" aria-label=":(">
                                🥺
                            </span>
                        </h3>

                        <Link to={'/'} className="blockBut">
                            На главную
                        </Link>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center nfPic">
                        <div className="PNF">PAGE NOT FOUND</div>
                    </div>
                </div>
            </div>
            <div className="space-50"></div> <div className="space-50"></div>
        </section>
    );
}

export default NotFound;
