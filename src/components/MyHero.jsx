import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const MyHero = () => {
  const navigate = useNavigate();
  const [chooseCity, setChooseCity] = useState("");
  const dispatch = useDispatch();
  const handleChange = e => {
    setChooseCity(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "SEARCHED_CITY", payload: chooseCity });
    navigate("/:city");
  };

  return (
    <Container fluid>
      <h1 className="fs-1 mt-5">
        Welcome to <br />
        My Weather
      </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Control type="search" placeholder="insert a city" value={chooseCity} onChange={handleChange} />
      </Form>
    </Container>
  );
};

export default MyHero;
