import { ViewStyle, FlexAlignType } from 'react-native';

interface Styles {
  container: ViewStyle;
  selectedCountry: ViewStyle;
  countryName: ViewStyle;
  countryList: ViewStyle;
}

export const styles: Styles = {
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  selectedCountry: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  countryName: {
    marginLeft: 10,
  },
  countryList: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    alignItems: 'flex-start' as FlexAlignType,
  },
};