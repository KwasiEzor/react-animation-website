import React from "react";
import styled from "styled-components";
import { SectionStyled } from "../Layout/Layout";
import GradientCard from "../utils/GradientCard";
import MainTitle from "../utils/MainTitle";

import person from "../assets/images/person.jpg";
import avatar from "../assets/images/person.jpg";
import person2 from "../assets/images/bitcoin3.jpg";
import person3 from "../assets/images/person3.jpg";
import bitcoin2 from "../assets/images/bitcoin2.jpg";
import bitcoin from "../assets/images/bitcoin.jpg";
import computer from "../assets/images/computer.jpg";
const GradientSections = () => {
  return (
    <GradientSectionsStyled>
      <SectionStyled>
        <div className="titleContainer">
          <MainTitle
            title={"New Upcoming Items"}
            subtitle={"Discover Upcoming Items"}
            paragraph={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi saepe fuga voluptas consectetur velit distinctio cum impedit, quidem nihil ratione, a repellendus repellat autem delectus corrupti quae? Perferendis, praesentium sit."
            }
          />
        </div>
        <div className="gradientCardContainer">
          <GradientCard
            image={person}
            avatar={avatar}
            name={"@Joel Clock"}
            price={"0.067 ETH"}
            title={"Just a dummy title"}
          />
          <GradientCard
            image={person2}
            avatar={avatar}
            name={"@Joel Clock"}
            price={"0.067 ETH"}
            title={"Just a dummy title"}
          />
          <GradientCard
            image={person3}
            avatar={avatar}
            name={"@Joel Clock"}
            price={"0.067 ETH"}
            title={"Just a dummy title"}
          />
          <GradientCard
            image={computer}
            avatar={avatar}
            name={"@Joel Clock"}
            price={"0.067 ETH"}
            title={"Just a dummy title"}
          />
          <GradientCard
            image={bitcoin2}
            avatar={avatar}
            name={"@Joel Clock"}
            price={"0.067 ETH"}
            title={"Just a dummy title"}
          />
          <GradientCard
            image={bitcoin}
            avatar={avatar}
            name={"@Joel Clock"}
            price={"0.067 ETH"}
            title={"Just a dummy title"}
          />
        </div>
      </SectionStyled>
    </GradientSectionsStyled>
  );
};

const GradientSectionsStyled = styled.div``;
export default GradientSections;
