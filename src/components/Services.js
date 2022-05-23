import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  details = [
    {
      icons: <FaCocktail />,
      title: "Free cocktails",
      infor:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, dolores!",
    },
    {
      icons: <FaHiking />,
      title: "Endless Hiking",
      infor:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, dolores!",
    },
    {
      icons: <FaShuttleVan />,
      title: "Free shuttle",
      infor:
        "Nam quidem laboriosam, esse, nemo sunt fugit earum quas quaerat fuga aliquam iusto!",
    },
    {
      icons: <FaBeer />,
      title: " Strongest beer",
      infor:
        "Illo Repudiandae maxime neque consequuntur rerum magni tenetur minima odio! ",
    },
  ];
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.details.map((service, index) => (
            <article key={index} className="service">
              <span>{service.icons}</span>
              <h6>{service.title}</h6>
              <p>{service.infor}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}
