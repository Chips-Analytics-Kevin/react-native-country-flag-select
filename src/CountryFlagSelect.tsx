import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { styles } from './styles/style';

interface Props {
  countryCode: string;
}

const flags: { [key: string]: any } = {
  US: require('./flags/fr.svg'),
  FR: require('./flags/fr.svg'),
  DE: require('./flags/de.svg'),
  ES: require('./flags/es.svg'),
  PT: require('./flags/pt.svg'),
};

const countryNames: { [key: string]: string } = {
  US: 'United States',
  FR: 'France',
  DE: 'Germany',
  ES: 'Spain',
  PT: 'Portugal',
};

export default function CountryFlagSelect({ countryCode }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState(countryCode);

  const flag = flags[selectedCountryCode];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCountrySelect = (code: string) => {
    setSelectedCountryCode(code);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.selectedCountry} onPress={toggleDropdown}>
        <SvgUri width={30} height={20} source={flag} />
        <Text style={styles.countryName}>{countryNames[selectedCountryCode]}</Text>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} size={20} color="#ccc" />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.countryList}>
          {Object.keys(flags).map((code) => (
            <TouchableOpacity key={code} onPress={() => handleCountrySelect(code)}>
              <SvgUri width={30} height={20} source={flags[code]} />
              <Text style={styles.countryName}>{countryNames[code]}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}