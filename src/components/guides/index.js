// Library Imports
import React from "react";

// Relative Imports
import { Container, Image, Words, Description, LearnMore } from "./styles";
import { Header } from "../../constants/type.js";

const Guides = ({ ref }) => {
  return (
    <>
      <Container ref={ref}>
        <Image>First </Image>
        <Words>
          <Header>
            How does Haven
            <br />
            stay stable?
          </Header>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Description>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Description>
          <LearnMore to="/guide">Read the Technical Guide</LearnMore>
        </Words>
      </Container>
      <Container reverse>
        <Image reverse>First </Image>
        <Words reverse>
          <Header>
            How are prices <br />
            determined?
          </Header>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Description>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Description>
          <LearnMore to="/guide">Read the Technical Guide</LearnMore>
        </Words>
      </Container>
      <Container>
        <Image>First </Image>
        <Words>
          <Header>
            How private
            <br />
            is Haven?
          </Header>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Description>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Description>
          <LearnMore to="/guide">Read the Technical Guide</LearnMore>
        </Words>
      </Container>
      <Container reverse>
        <Image reverse>First </Image>
        <Words reverse>
          <Header>
            What is Haven's <br />
            token supply?
          </Header>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Description>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Description>
          <LearnMore to="/guide">Read the Technical Guide</LearnMore>
        </Words>
      </Container>
      <Container>
        <Image>First </Image>
        <Words>
          <Header>
            Who controls the
            <br />
            pricing oracle?
          </Header>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Description>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Description>
          <LearnMore to="/guide">Read the Technical Guide</LearnMore>
        </Words>
      </Container>
      <Container reverse>
        <Image reverse>First </Image>
        <Words reverse>
          <Header>
            How does Haven <br />
            prevent inflation?
          </Header>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Description>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Description>
          <LearnMore to="/guide">Read the Technical Guide</LearnMore>
        </Words>
      </Container>
      <Container>
        <Image>First </Image>
        <Words>
          <Header>
            How can I
            <br />
            trust Haven?
          </Header>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Description>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Description>
          <LearnMore to="/guide">Read the Technical Guide</LearnMore>
        </Words>
      </Container>
    </>
  );
};

export default Guides;
