import { FC } from 'react';
import styled from 'styled-components';
import 'react-perfect-scrollbar/dist/css/styles.css';

interface AvatarRootProps {
  isSmall?: boolean;
}

interface AvatarProps extends AvatarRootProps {
  imgSrc?: string;
  className?: string;
  alt?: string;
}

const AvatarRoot = styled.div<AvatarRootProps>`
  display: inline-flex;
  width: ${({ isSmall }) => (isSmall ? '35px' : '50px')};
  height: ${({ isSmall }) => (isSmall ? '35px' : '50px')};
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Avatar: FC<AvatarProps> = ({ imgSrc, isSmall, className, alt }) => {
  return (
    <AvatarRoot className={className} isSmall={isSmall}>
      {(imgSrc && <AvatarImage src={imgSrc} />) || alt}
    </AvatarRoot>
  );
};

export default Avatar;
