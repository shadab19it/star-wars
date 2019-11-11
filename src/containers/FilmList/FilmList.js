import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container } from "react-bootstrap";
import { Creators as List } from "../../store/ducks/filmList";
import Film from "../../components/Film/Film";
import "./FilmList.scss";

class FilmList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
            isLoading: false,
            list: []
        };
    }

    componentDidMount() {
        this.props.filmList.cleanFilms();
        this.props.getFilms();

        this.loadList();
    }

    componentDidUpdate() {
        if (
            this.props.films &&
            this.props.films.results &&
            this.props.films.results.length &&
            this.props.films.results[0] === "error" &&
            !this.state.error
        ) {
            this.setState({
                error: "Erro1",
                isLoading: false
            });
        } else if (
            this.props.films &&
            this.props.films.results &&
            this.props.films.results.length &&
            !this.state.list.length
        ) {
            this.setState({
                list: this.props.films.results,
                isLoading: false
            });
        }
    }

    loadList = () => {
        this.setState({ isLoading: true });
        this.props.getFilms();
    };

    removeFilm = id => {
        this.props.removeFilm(id);

        this.setState({
            list: this.state.list.filter(function(item) {
                return item.id !== id;
            })
        });
    };

    editFilm = id => {
        this.props.history.push(`/film/${id}`);
    };

    render() {
        const { error, isLoading, list } = this.state;

        return (
            <Container className="text-center film-list-container">
                <div className="row film-list-header">
                    <div className="col-3" key="Nome">
                        <span>Nome</span>
                    </div>
                    <div className="col-3" key="Diretor">
                        <span>Diretor</span>
                    </div>
                    <div className="col-3" key="DataDeLançamento">
                        <span>Data de lançamento</span>
                    </div>
                    <div className="col-3" key="Detalhes">
                        <span>Detalhes</span>
                    </div>
                </div>
                {!error &&
                    !isLoading &&
                    list.map((film, i) => {
                        return (
                            <Fragment key={i}>
                                <Film
                                    data={film}
                                    status="idStatusConciliacao"
                                    removeFilm={this.removeFilm}
                                    editFilm={this.editFilm}
                                />
                            </Fragment>
                        );
                    })}
                {error && (
                    <div>
                        Erro ao buscar os filmes. Verifique se tem conexão com a
                        internet e tente novamente mais tarde.
                    </div>
                )}
                {isLoading && (
                    <div>
                        <p className="text-3 text-color-primary my-0 pt-1">
                            Carregando...
                        </p>
                    </div>
                )}
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        filmList: state.filmList,
        films: state.films
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getFilms: () => dispatch({ type: "GET_FILMS" }),
        removeFilm: id =>
            dispatch({
                type: "REMOVE_FILM",
                id: id
            }),
        filmList: bindActionCreators(List, dispatch)
    };
};

export const FilmListWithoutWithRouter = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmList);

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(FilmList)
);
