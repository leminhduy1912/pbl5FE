import { Col, Container } from "react-bootstrap";

const RightRegister = (props) => {
  return (
    <Col md={5}>
      <Container>{props.children}</Container>
    </Col>
  );
};

export default RightRegister;
