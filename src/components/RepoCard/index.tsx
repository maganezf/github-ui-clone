import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  TopSide,
  RepoIcon,
  BottomSide,
  StarIcon,
  ForkIcon,
} from './styles';

interface IRepoCardProps {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
}

const RepoCard: React.FC<IRepoCardProps> = ({ ...props }) => {
  const languageClass = props.language ? props.language.toLowerCase() : 'other';

  return (
    <Container>
      <TopSide>
        <header>
          <RepoIcon />
          <Link to={`/${props.username}/${props.reponame}`}>
            {props.reponame}
          </Link>
        </header>

        <p>{props.description}</p>
      </TopSide>

      <BottomSide>
        <ul>
          <li>
            <div className={`language ${languageClass}`} />
            <span>{props.language}</span>
          </li>

          <li>
            <StarIcon />
            <span>{props.stars}</span>
          </li>

          <li>
            <ForkIcon />
            <span>{props.forks}</span>
          </li>
        </ul>
      </BottomSide>
    </Container>
  );
};

export default RepoCard;
