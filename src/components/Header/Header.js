import React, { PureComponent } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.scss";

class Header extends PureComponent {
    render() {
        return (
            <Container fluid className="header">
                <div className="grid">
                    <Row>
                        <Col>
                            <p>Star Wars</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}

export default Header;
