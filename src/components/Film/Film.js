import React from "react";
import { Row } from "react-bootstrap";
import PropTypes from "prop-types";
import _ from "lodash";
import ButtonStandard from "../ButtonStandard/ButtonStandard";
import "./Film.scss";
import moment from "moment";

function Film(props) {
    const { data, editFilm } = props;

    const lodashTruncate = (data, maxLength) => {
        return _.truncate(data, {
            length: maxLength
        });
    };

    if (data !== undefined && typeof data == "object") {
        const releaseDate = moment(data.release_date).format("DD/MM/YYYY");

        const newData = {
            title: data.title,
            director: data.director,
            releaseDate: releaseDate
        };

        let cols = 12;
        const objects = Object.entries(newData);

        const math = Number((cols / objects.length).toFixed(1));

        const size = math > 1 ? math : 1;

        const maxLength = size * 12;

        const colEdit = (
            <div className="col-3 custom-col">
                <div className="custom-checkbox">
                    <ButtonStandard
                        text="Detalhes"
                        textClass="text-2"
                        className="btn btn-primary btn-rounded btn-standard px-4 ml-3"
                        onClick={() => editFilm(data.episode_id)}
                    />
                </div>
            </div>
        );

        if (objects.length > 0) {
            return (
                <Row className="custom-film-row my-2">
                    {objects.map((data, i) => {
                        return (
                            <div className="col-3" key={i}>
                                <span className="text-2 font-weight-bolder">
                                    {lodashTruncate(data[1], maxLength)}
                                </span>
                            </div>
                        );
                    })}
                    {colEdit}
                </Row>
            );
        } else {
            return <p>Nenhum filme encontrado.</p>;
        }
    } else {
        return <p>Dados inválidos</p>;
    }
}

Film.propTypes = {
    data: PropTypes.object.isRequired,
    id: PropTypes.string
};
export default Film;
