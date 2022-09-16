import React from "react";
import "./Bartenders.css";
import { StyledButton } from "../styled-components/styled-components";

const Bartenders = () => {
  return (
    <div className="bartenders">
      <h3>GET TO KNOW YOUR BARTENDERS</h3>
      <div className="wrap1">
        <div className="img1"></div>
        <div className="text1">
          <span className="hannah">HANNAH GONZALEZ</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            assumenda laudantium labore harum accusamus modi excepturi iusto
            necessitatibus consectetur fuga. Porro iusto sint hic doloremque
            sunt. Sint aperiam repudiandae unde! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Architecto quos omnis, excepturi
            officiis quas amet? Officiis, et. Maiores delectus, modi dolor esse
            illum quidem non laudantium, mollitia ratione, eveniet consectetur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A enim
            atque optio officiis suscipit, incidunt ab voluptatibus molestiae
            recusandae asperiores eum, debitis magnam impedit eius sequi nisi
            ullam non nostrum.
          </p>
          <StyledButton primary as="a" href="#" className="btn1">
            Book Now
          </StyledButton>
        </div>
      </div>
      <div className="wrap2">
        <div className="text2">
          <span className="ava">AVA MAXWELL</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            assumenda laudantium labore harum accusamus modi excepturi iusto
            necessitatibus consectetur fuga. Porro iusto sint hic doloremque
            sunt. Sint aperiam repudiandae unde! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Architecto quos omnis, excepturi
            officiis quas amet? Officiis, et. Maiores delectus, modi dolor esse
            illum quidem non laudantium, mollitia ratione, eveniet consectetur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A enim
            atque optio officiis suscipit, incidunt ab voluptatibus molestiae
            recusandae asperiores eum, debitis magnam impedit eius sequi nisi
            ullam non nostrum.
          </p>
          <StyledButton primary as="a" href="#" className="btn2">
            Book Now
          </StyledButton>
        </div>
        <div className="img2"></div>
      </div>
      <div className="wrap3">
        <div className="img3"></div>
        <div className="text3">
          <span className="jack">JACK ALLEN</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            assumenda laudantium labore harum accusamus modi excepturi iusto
            necessitatibus consectetur fuga. Porro iusto sint hic doloremque
            sunt. Sint aperiam repudiandae unde! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Architecto quos omnis, excepturi
            officiis quas amet? Officiis, et. Maiores delectus, modi dolor esse
            illum quidem non laudantium, mollitia ratione, eveniet consectetur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A enim
            atque optio officiis suscipit, incidunt ab voluptatibus molestiae
            recusandae asperiores eum, debitis magnam impedit eius sequi nisi
            ullam non nostrum.
          </p>
          <StyledButton primary as="a" href="#" className="btn3">
            Book Now
          </StyledButton>
        </div>
      </div>
    </div>
  );
};

export default Bartenders;
