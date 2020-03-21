import React from "react";
import FlipCard from "./FlipCard/FlipCard";
import styled from "styled-components";

const PostHeader = styled.div`
  background-color: red;
`;

const PostBody = styled.div`
  background-color: green;
`;

const ContentIntroduction = styled.div`
  background-color: grey;
`;

const ContentFlipCardHolder = styled.div`
  background-color: aliceblue;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 320px) and (max-width: 480px) {
    background-color: royalblue;
    justify-content: center;
  }
`;

const ContentBody = styled.div`
  .header {
    background-color: red;
  }
  .body {
    background-color: purple;
  }
  .footer {
    background-color: darkgoldenrod;
  }
`;

const LessonPost = () => {
  return (
    <>
      <PostHeader>
        <h1>Introduction</h1>
      </PostHeader>
      <PostBody>
        <ContentIntroduction>
          The DNA double helix model was relatively simple and has
          revolutionized the study of biology and genetics. In order for the
          double helix model to explain the known facts about DNA, the
          model&#39;s chemical structure had to be able to explain three
          activities:
        </ContentIntroduction>
        <ContentFlipCardHolder>
          <FlipCard />
          <FlipCard />
          <FlipCard />
        </ContentFlipCardHolder>
        <ContentBody>
          <div className="header">
            Once the model was proposed, Watson and Crick and many others now
            turned to exploring how DNA went about carrying out these three
            functions.
          </div>
          <div className="body">
            <ul>
              <li>
                1. Replication of the DNA was relatively easy to demonstrate
                with the double helix.
              </li>
              <li>
                They knew that proteins were the molecules that carried out
                day-to-day chores of the cell. Thus, they knew that DNA carried
                the information required to properly construct the proteins, and
                that RNA copied and carried this genetic information to the
                sight of protein synthesis. This is the central dogma of life.
              </li>
              <li>
                The role of mutations and how these mutations are incorporated
                into the DNA molecule and how these then affect the evolution,
                or slow change of the population of organisms over time, was the
                last function to be breached.
              </li>
            </ul>
          </div>
          <div className="footer">
            The study of these three functions of DNA, sheds light on the
            fundamentals of the manner in which living organisms maintain life.
            This is one of the reasons why the discovery of the structure of DNA
            by Watson, Crick and Wilkins had such a significant effect in the
            world of molecular biology. This work was important not only to get
            to the root of the basis of life, but is also needed to give us
            better drugs to fight off so many diseases, some of which are
            extremely debilitating and lethal. Without knowledge of the
            structure of any of the biomolecules, it would be a very difficult
            task to work on the biochemistry of cellular reactions. Determining
            the DNA structure paved the way for these kinds of studies. It
            opened up the door to the world of microbiology, helping us
            visualize life at a biochemical level, and making us understand
            better how a cell functions.
          </div>
        </ContentBody>
      </PostBody>
    </>
  );
};

export default LessonPost;
