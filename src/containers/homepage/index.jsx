  
import React from "react";
import styled from "styled-components";
import { ReviewsSection } from "./reviewsSection";
import { MoreAboutSection } from "./moreAboutSection";


import { Marginer } from "../../components/marginer";

import { AppFeature } from "./sappFeatures";
import { TopSection } from "./topSection";
import { Footer } from "../../components/fotor";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export function Homepage(props) {
  return (
    <PageContainer>
      <TopSection />
      <AppFeature />
      
      <Marginer direction="vertical" margin="2em" />
      <ReviewsSection />
      <MoreAboutSection />
      <Marginer direction="vertical" margin="8em" />
      <Footer/>
      
      
      
      
    </PageContainer>
  );
}