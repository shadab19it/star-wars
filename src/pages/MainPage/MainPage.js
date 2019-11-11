import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import FilmList from "../../containers/FilmList/FilmList";
import "./MainPage.scss";

class MainPage extends Component {
    addFilm = () => {
        this.props.history.push(`/film/add`);
    };

    logout = () => {
        this.props.logout();
        this.props.history.push(`/login`);
    };

    render() {
        return (
            <Fragment>
                <div className="mainPage">
                    <Container className="text-center py-4 container-sticky">
                        <Row>
                            <Col xs={6} className="text-left">
                                <p className="text-5 text-color-primary font-weight-bolder my-0 pt-1">
                                    Lista de filmes:
                                </p>
                            </Col>
                        </Row>
                    </Container>

                    <FilmList />
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        filmList: state.filmList
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        null
    )(MainPage)
);
