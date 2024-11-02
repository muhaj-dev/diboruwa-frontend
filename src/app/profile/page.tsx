"use client";
import Profile from "@/containers/profile/Profile";
import "../../containers/profile/profile.css";
import styled from "styled-components";
import Head from "next/head";

const ProfileWrapper = styled.div`
  background: var(--Background-color, #f8f8f8);
`;

const page = () => {
  return (
    <>
      <ProfileWrapper>
        <Profile />
      </ProfileWrapper>
    </>
  );
};

export default page;
