import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const LongCards = ({ title, image }: { title: string; image: string }) => {
  return (
    <Card style={{ width: "18rem", height: "30rem" }}>
      <Card.Body>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Card.Img
            variant="top"
            src={image}
            style={{
              borderRadius: "50%",
              width: "60%",
              marginBottom: "1rem",
              height: "9rem",
              objectFit: "cover",
            }}
          />
          <Card.Title className="text-3xl">{title}</Card.Title>
        </div>
        <Card.Text
          className="text-center"
          style={{ lineHeight: "1.8rem", marginTop: "1rem" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aut
          dolores atque quibusdam alias iure. Ut nostrum amet autem dignissimos.
        </Card.Text>
      </Card.Body>
      <IconsContainer>
        <TwitterIcon />
        <FacebookIcon />
        <InstagramIcon />
        <LinkedInIcon />
      </IconsContainer>
    </Card>
  );
};

export default LongCards;

const IconsContainer = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;
