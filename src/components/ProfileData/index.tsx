import React from 'react';

import {
  Container,
  MainContentProfileFlex,
  Avatar,
  FollowingAndFollowersRow,
  PeopleIcon,
  UserDescriptionColumn,
  CompanyIcon,
  LocationIcon,
  EmailIcon,
  WebsiteIcon,
} from './styles';

interface IProfileDataProps {
  username: string;
  name: string;
  avatarUrl: string;
  followers: number;
  following: number;
  company?: string;
  location?: string;
  email?: string;
  blog?: string;
}

const ProfileData: React.FC<IProfileDataProps> = ({ ...props }) => {
  return (
    <Container>
      <MainContentProfileFlex>
        <Avatar src={props.avatarUrl} alt={props.username} />

        <div>
          <h1>{props.name}</h1>
          <h2>{props.username}</h2>
        </div>
      </MainContentProfileFlex>

      <FollowingAndFollowersRow>
        <li>
          <PeopleIcon />
          <b>{props.followers}</b>
          <span>followers</span>
          <span>·</span>
        </li>

        <li>
          <b>{props.following}</b>
          <span>following</span>
        </li>
      </FollowingAndFollowersRow>

      <UserDescriptionColumn>
        {props.company && (
          <li>
            <CompanyIcon />
            <span>{props.company}</span>
          </li>
        )}

        {props.location && (
          <li>
            <LocationIcon />
            <span>{props.location}</span>
          </li>
        )}

        {props.email && (
          <li>
            <EmailIcon />
            <span>{props.email}</span>
          </li>
        )}

        {props.blog && (
          <li>
            <WebsiteIcon />
            <a href={props.blog}>{props.blog}</a>
          </li>
        )}
      </UserDescriptionColumn>
    </Container>
  );
};

export default ProfileData;
