import { FC, ComponentProps } from 'react';
import { css } from 'styled-components/macro';
import { useBoolean } from 'hooks';
import { TextField, IconButton, Icon } from 'components';
import { faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const PasswordInput: FC<ComponentProps<typeof TextField>> = (props) => {
  const passwordVisible = useBoolean(false);

  return (
    <TextField
      startIcon={<Icon icon={faLock} size="xs" />}
      endIcon={
        <IconButton type="button" onClick={passwordVisible.toogle} disablePadding tabIndex={-1}>
          <Icon
            icon={passwordVisible.state ? faEye : faEyeSlash}
            size="xs"
            css={css`
              color: ${({ theme }) => theme.colors.label};
            `}
          />
        </IconButton>
      }
      type={passwordVisible.state ? 'text' : 'password'}
      fullWidth
      {...props}
    />
  );
};

export default PasswordInput;
