import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { marvelRequest } from "../../../utils/requests";

export default function Carrousel() {
  const [events, setEvents] = React.useState([]);

  const getEvents = async () => {
    let newEvents = await marvelRequest("/events", "?limit=10");
    setEvents(newEvents);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div style={styles.container}>
      {events && (
        <Carousel showThumbs={false} autoPlay>
          {events.map((event: any) => (
            <div style={styles.carrouselItem}>
              <img
                width="500px"
                height="400px"
                src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
              />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "900px",
  },
  carrouselItem: {},
};
