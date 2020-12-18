import React from 'react';

class Brif extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            mail: '',
            telephone: '',
            select: '',
            textar: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        alert(`${this.state.name}, Ваша заявка отправлена. `);
        e.preventDefault();
    };

    render() {
        const { name, mail, select, telephone } = this.state;
        return (
            <div className="popScroll">
                <div className="comment-respond">
                    <h2>Оставить заявку</h2>
                    <div className="space-30"></div>
                    <form className="comment-form" onSubmit={this.handleSubmit}>
                        <div className="form-double">
                            <div className="box">
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    placeholder="Имя"
                                />
                                <div className="space-30"></div>
                            </div>
                            <div className="box last">
                                <input
                                    type="email"
                                    name="mail"
                                    value={mail}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    placeholder="Email"
                                />
                                <div className="space-30"></div>
                            </div>
                        </div>
                        <div className="form-double">
                            <div className="box last">
                                <input
                                    type="tel"
                                    name="telephone"
                                    value={telephone}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    placeholder="Телефон"
                                />
                                <div className="space-30"></div>
                            </div>
                            <div className="box">
                                <select
                                    name="select"
                                    value={select}
                                    onChange={this.handleChange}
                                    className="form-control">
                                    <option value="grapefruit">LANDING</option>
                                    <option value="lime">КОРПОРАТИВНЫЙ</option>
                                    <option value="coconut">САЙТ-ПРИЛОЖЕНИЕ</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-30"></div>
                        <textarea
                            rows="5"
                            className="form-control"
                            name="textar"
                            value={this.state.textar}
                            placeholder="Опишите Вашу задачу, если хотите."
                            onChange={this.handleChange}></textarea>
                        <div className="space-30"></div>
                        <button className="bttn-default">Отправить</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Brif;
