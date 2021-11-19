import { FC } from 'react';
import styled from 'styled-components';

interface AvatarRootProps {
  isSmall?: boolean;
}

interface AvatarProps extends AvatarRootProps {
  imgSrc?: string;
  className?: string;
}

const AvatarRoot = styled.div<AvatarRootProps>`
  display: inline-flex;
  width: ${({ isSmall }) => (isSmall ? '40px' : '50px')};
  height: ${({ isSmall }) => (isSmall ? '40px' : '50px')};
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

const Avatar: FC<AvatarProps> = ({ imgSrc, isSmall, className }) => {
  return (
    <AvatarRoot className={className} isSmall={isSmall}>
      {(imgSrc && <AvatarImage src={imgSrc} />) || 'A'}
    </AvatarRoot>
  );
};

export default Avatar;