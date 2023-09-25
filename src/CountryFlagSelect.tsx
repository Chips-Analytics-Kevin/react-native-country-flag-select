import React from 'react';
import { SvgUri } from 'react-native-svg';

interface Props {
  countryCode: string;
}

const flags: { [key: string]: any } = {
  US: require('./flags/us.svg'),
  FR: require('./flags/fr.svg'),
  DE: require('./flags/de.svg'),
  ES: require('./flags/es.svg'),
  PT: require('./flags/pt.svg'),
};

export default function CountryFlagSelect({ countryCode }: Props) {
  const flag = flags[countryCode];

  if (!flag) {
    return null;
  }

  return <SvgUri uri={flag} />;
}