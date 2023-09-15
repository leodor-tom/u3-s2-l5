import { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const TodayWeather = () => {
  const city = useSelector(state => state.city.content);
  const [data, setData] = useState("");
  const [data2, setData2] = useState("");
  const [url, setUrl] = useState("");

  console.log("city", city);
  const firstFetch = async () => {
    try {
      const resp = await fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&APPID=898cdf793de436b3ed6119d53ce53745"
      );
      if (resp.ok) {
        const data = await resp.json();
        console.log(data);
        const resp2 = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?lat=" +
            data[0].lat +
            "&lon=" +
            data[0].lon +
            "&APPID=898cdf793de436b3ed6119d53ce53745&units=metric"
        );
        console.log(resp2);
        if (resp2.ok) {
          const data2 = await resp2.json();
          console.log("data2", data2);
          setData(data2);

          setUrl("https://openweathermap.org/img/wn/" + data2.weather[0].icon + "@2x.png");
          const risposta = await fetch(
            "https://api.openweathermap.org/data/2.5/forecast?lat=" +
              data2.coord.lat +
              "&lon=" +
              data2.coord.lon +
              "&appid=898cdf793de436b3ed6119d53ce53745"
          );

          if (risposta.ok) {
            const data3 = await risposta.json();
            console.log("data3", data3);
            setData2(data3);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    firstFetch();
  }, [city]);
  console.log(data);

  return (
    <Container fluid>
      <h3>{city}</h3>
      <img src={`${url}`} alt="" />
      {data !== "" && <span>{data.main.temp}°</span>}
      <ListGroup>
        <ListGroup.Item>
          temp: {data !== "" && <span>{data.main.temp_min}°</span>} -{" "}
          {data !== "" && <span>{data.main.temp_max}°</span>}
        </ListGroup.Item>
        <ListGroup.Item>humidity : {data !== "" && <span>{data.main.humidity}%</span>} </ListGroup.Item>
        <ListGroup.Item>fells like : {data !== "" && <span>{data.main.feels_like}°</span>} </ListGroup.Item>
        {data2.city.list.slice(0, 4).map()}
      </ListGroup>
    </Container>
  );
};

export default TodayWeather;
