import React, { FC, useState } from 'react';
import { Box, FormControlLabel, Stack, styled, Switch, Typography } from '@mui/material';
import ZipperIcon from '../../../assets/zipper.svg?react';
import { mockUser } from '../../../mock/mock-data.ts';
import './battery.scss';

interface Props {}

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 14,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 14,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 1,
    '&.Mui-checked': {
      transform: 'translateX(14px)',
      color: '#1A2B27',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#03DA9A' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));
const Battery: FC<Props> = () => {
  const [level] = useState<number>(mockUser.energyPercent);
  const [checked, setChecked] = React.useState(mockUser.isAutoRenew);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box
      bgcolor="#182724"
      color="primary.main"
      px="5px"
      py="2px"
      borderRadius={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      flex={1}
      height="100%"
    >
      <Stack flexDirection="row" justifyContent="space-between" width="100%" height="fit-content" alignItems="center">
        <Typography fontSize={14} fontWeight={600}>
          Энергия
        </Typography>
        <ZipperIcon />
      </Stack>

      <div className="battery-container">
        <div
          className="battery-level"
          style={{ height: `${level}%`, borderRadius: level > 97 ? '11px' : '0 0 11px 11px' }}
        ></div>
        <span className="battery-percentage">
          <Typography fontSize={40} fontWeight={700}>
            {level}
          </Typography>
          <Typography fontSize={18} fontWeight={700}>
            %
          </Typography>
        </span>
      </div>
      <Box pt="11px"></Box>
      <FormControlLabel
        labelPlacement="start"
        sx={{
          '.MuiFormControlLabel-label': { fontSize: '8px', pr: '4px' },
          marginLeft: 0,
          marginRight: 0,
        }}
        control={<AntSwitch size="small" checked={checked} onChange={handleChange} name="gilad" />}
        label="Автовозобновление"
      />
    </Box>
  );
};

export default Battery;
