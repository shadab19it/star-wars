import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { matchPath } from "react-router";
import "./FilmPage.scss";
import moment from "moment";

class FilmPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            film: null
        };
    }

    componentDidMount() {
        if (!this.props.films.results) return this.props.history.push(`/main`);

        const match = matchPath(this.props.history.location.pathname, {
            path: "/film/:id",
            exact: true,
            strict: false
        });
        const id =
            match && match.params && match.params.id ? match.params.id : null;

        this.props.films.results.forEach(listFilm => {
            if (parseInt(listFilm.episode_id) === parseInt(id)) {
                this.setState({
                    film: listFilm
                });
            }
        });
    }

    render() {
        return (
            <Fragment>
                {this.state.film ? (
                    <div className="FilmPage">
                        <Container className="text-center py-4 container-sticky">
                            <Row>
                                <div className="text-left">
                                    <p className="text-5 text-color-primary font-weight-bolder my-0 pt-1">
                                        {this.state.film.title}
                                    </p>
                                </div>

                                <Container className="text-left mt-5">
                                    <Row>
                                        <Col xs={2} className="">
                                            <b>Data de lançamento:</b>{" "}
                                        </Col>
                                        <Col xs={10}>
                                            <p>
                                                {moment(
                                                    this.state.film.release_date
                                                ).format("DD/MM/YYYY")}
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={2} className="">
                                            <b>Prévia da abertura:</b>{" "}
                                        </Col>
                                        <Col xs={10}>
                                            <p>
                                                {this.state.film.opening_crawl}
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={2} className="">
                                            <b>Diretor:</b>{" "}
                                        </Col>
                                        <Col xs={10}>
                                            <p>{this.state.film.director}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={2} className="">
                                            <b>Produtor:</b>{" "}
                                        </Col>
                                        <Col xs={10}>
                                            <p>{this.state.film.producer}</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Row>
                        </Container>
                    </div>
                ) : (
                    <div>Filme não encontrado.</div>
                )}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        films: state.films
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        null
    )(FilmPage)
);
