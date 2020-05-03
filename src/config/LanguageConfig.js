import en from '../translations/en.json';
const LanguageConfig = {
  languageList: async function () {
    let languageList = [
      {
        displayName: 'English',
        code: 'en',
      },
    ];
    return languageList;
  },
  I18ConfigResources: function () {
    let resources = {
      en: {
        translations: en,
      },
    };
    return resources;
  },
};
export default LanguageConfig;
