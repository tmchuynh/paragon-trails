"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatLanguagesWithIsoList = exports.formatLanguagesWithIso = exports.formatLanguages = exports.formatLanguagesList = exports.getLanguagesByNameList = exports.getLanguagesByIsoList = exports.getLanguageByName = exports.getLanguageByIso = exports.languages = void 0;
exports.languages = [
    {
        name: "Abkhazian",
        iso639_1: "ab",
    },
    {
        name: "Afar",
        iso639_1: "aa",
    },
    {
        name: "Afrikaans",
        iso639_1: "af",
    },
    {
        name: "Akan",
        iso639_1: "ak",
    },
    {
        name: "Albanian",
        iso639_1: "sq",
    },
    {
        name: "Amharic",
        iso639_1: "am",
    },
    {
        name: "Arabic",
        iso639_1: "ar",
    },
    {
        name: "Aragonese",
        iso639_1: "an",
    },
    {
        name: "Armenian",
        iso639_1: "hy",
    },
    {
        name: "Assamese",
        iso639_1: "as",
    },
    {
        name: "Avaric",
        iso639_1: "av",
    },
    {
        name: "Avestan",
        iso639_1: "ae",
    },
    {
        name: "Aymara",
        iso639_1: "ay",
    },
    {
        name: "Azerbaijani",
        iso639_1: "az",
    },
    {
        name: "Bambara",
        iso639_1: "bm",
    },
    {
        name: "Bashkir",
        iso639_1: "ba",
    },
    {
        name: "Basque",
        iso639_1: "eu",
    },
    {
        name: "Belarusian",
        iso639_1: "be",
    },
    {
        name: "Bengali",
        iso639_1: "bn",
    },
    {
        name: "Bislama",
        iso639_1: "bi",
    },
    {
        name: "Bosnian",
        iso639_1: "bs",
    },
    {
        name: "Breton",
        iso639_1: "br",
    },
    {
        name: "Bulgarian",
        iso639_1: "bg",
    },
    {
        name: "Burmese",
        iso639_1: "my",
    },
    {
        name: "Catalan",
        iso639_1: "ca",
    },
    {
        name: "Cebuano",
        iso639_1: "ceb",
    },
    {
        name: "Chichewa",
        iso639_1: "ny",
    },
    {
        name: "Chinese",
        iso639_1: "zh",
    },
    {
        name: "Corsican",
        iso639_1: "co",
    },
    {
        name: "Croatian",
        iso639_1: "hr",
    },
    {
        name: "Czech",
        iso639_1: "cs",
    },
    {
        name: "Danish",
        iso639_1: "da",
    },
    {
        name: "Dutch",
        iso639_1: "nl",
    },
    {
        name: "English",
        iso639_1: "en",
    },
    {
        name: "Esperanto",
        iso639_1: "eo",
    },
    {
        name: "Estonian",
        iso639_1: "et",
    },
    {
        name: "Finnish",
        iso639_1: "fi",
    },
    {
        name: "French",
        iso639_1: "fr",
    },
    {
        name: "Galician",
        iso639_1: "gl",
    },
    {
        name: "Georgian",
        iso639_1: "ka",
    },
    {
        name: "German",
        iso639_1: "de",
    },
    {
        name: "Greek",
        iso639_1: "el",
    },
    {
        name: "Gujarati",
        iso639_1: "gu",
    },
    {
        name: "Haitian Creole",
        iso639_1: "ht",
    },
    {
        name: "Hausa",
        iso639_1: "ha",
    },
    {
        name: "Hebrew",
        iso639_1: "he",
    },
    {
        name: "Hindi",
        iso639_1: "hi",
    },
    {
        name: "Hungarian",
        iso639_1: "hu",
    },
    {
        name: "Icelandic",
        iso639_1: "is",
    },
    {
        name: "Igbo",
        iso639_1: "ig",
    },
    {
        name: "Indonesian",
        iso639_1: "id",
    },
    {
        name: "Irish",
        iso639_1: "ga",
    },
    {
        name: "Italian",
        iso639_1: "it",
    },
    {
        name: "Japanese",
        iso639_1: "ja",
    },
    {
        name: "Javanese",
        iso639_1: "jv",
    },
    {
        name: "Kannada",
        iso639_1: "kn",
    },
    {
        name: "Kazakh",
        iso639_1: "kk",
    },
    {
        name: "Khmer",
        iso639_1: "km",
    },
    {
        name: "Korean",
        iso639_1: "ko",
    },
    {
        name: "Kurdish",
        iso639_1: "ku",
    },
    {
        name: "Kyrgyz",
        iso639_1: "ky",
    },
    {
        name: "Lao",
        iso639_1: "lo",
    },
    {
        name: "Latin",
        iso639_1: "la",
    },
    {
        name: "Latvian",
        iso639_1: "lv",
    },
    {
        name: "Lithuanian",
        iso639_1: "lt",
    },
    {
        name: "Luxembourgish",
        iso639_1: "lb",
    },
    {
        name: "Macedonian",
        iso639_1: "mk",
    },
    {
        name: "Malagasy",
        iso639_1: "mg",
    },
    {
        name: "Malay",
        iso639_1: "ms",
    },
    {
        name: "Malayalam",
        iso639_1: "ml",
    },
    {
        name: "Maltese",
        iso639_1: "mt",
    },
    {
        name: "Maori",
        iso639_1: "mi",
    },
    {
        name: "Marathi",
        iso639_1: "mr",
    },
    {
        name: "Mongolian",
        iso639_1: "mn",
    },
    {
        name: "Nepali",
        iso639_1: "ne",
    },
    {
        name: "Norwegian",
        iso639_1: "no",
    },
    {
        name: "Odia",
        iso639_1: "or",
    },
    {
        name: "Pashto",
        iso639_1: "ps",
    },
    {
        name: "Persian",
        iso639_1: "fa",
    },
    {
        name: "Polish",
        iso639_1: "pl",
    },
    {
        name: "Portuguese",
        iso639_1: "pt",
    },
    {
        name: "Punjabi",
        iso639_1: "pa",
    },
    {
        name: "Romanian",
        iso639_1: "ro",
    },
    {
        name: "Russian",
        iso639_1: "ru",
    },
    {
        name: "Samoan",
        iso639_1: "sm",
    },
    {
        name: "Scots Gaelic",
        iso639_1: "gd",
    },
    {
        name: "Serbian",
        iso639_1: "sr",
    },
    {
        name: "Sesotho",
        iso639_1: "st",
    },
    {
        name: "Sindhi",
        iso639_1: "sd",
    },
    {
        name: "Sinhala",
        iso639_1: "si",
    },
    {
        name: "Slovak",
        iso639_1: "sk",
    },
    {
        name: "Slovenian",
        iso639_1: "sl",
    },
    {
        name: "Somali",
        iso639_1: "so",
    },
    {
        name: "Spanish",
        iso639_1: "es",
    },
    {
        name: "Sundanese",
        iso639_1: "su",
    },
    {
        name: "Swahili",
        iso639_1: "sw",
    },
    {
        name: "Swedish",
        iso639_1: "sv",
    },
    {
        name: "Tagalog",
        iso639_1: "tl",
    },
    {
        name: "Tajik",
        iso639_1: "tg",
    },
    {
        name: "Tamil",
        iso639_1: "ta",
    },
    {
        name: "Tatar",
        iso639_1: "tt",
    },
    {
        name: "Telugu",
        iso639_1: "te",
    },
    {
        name: "Thai",
        iso639_1: "th",
    },
    {
        name: "Turkish",
        iso639_1: "tr",
    },
    {
        name: "Turkmen",
        iso639_1: "tk",
    },
    {
        name: "Ukrainian",
        iso639_1: "uk",
    },
    {
        name: "Urdu",
        iso639_1: "ur",
    },
    {
        name: "Uyghur",
        iso639_1: "ug",
    },
    {
        name: "Uzbek",
        iso639_1: "uz",
    },
    {
        name: "Vietnamese",
        iso639_1: "vi",
    },
    {
        name: "Welsh",
        iso639_1: "cy",
    },
    {
        name: "Xhosa",
        iso639_1: "xh",
    },
    {
        name: "Yiddish",
        iso639_1: "yi",
    },
    {
        name: "Yoruba",
        iso639_1: "yo",
    },
    {
        name: "Zulu",
        iso639_1: "zu",
    },
];
const getLanguageByIso = (iso) => {
    return exports.languages.find((lang) => lang.iso639_1 === iso);
};
exports.getLanguageByIso = getLanguageByIso;
const getLanguageByName = (name) => {
    return exports.languages.find((lang) => lang.name.toLowerCase() === name.toLowerCase());
};
exports.getLanguageByName = getLanguageByName;
const getLanguagesByIsoList = (isoList) => {
    return exports.languages.filter((lang) => isoList.includes(lang.iso639_1));
};
exports.getLanguagesByIsoList = getLanguagesByIsoList;
const getLanguagesByNameList = (nameList) => {
    return exports.languages.filter((lang) => nameList.some((name) => lang.name.toLowerCase() === name.toLowerCase()));
};
exports.getLanguagesByNameList = getLanguagesByNameList;
const formatLanguagesList = (languages) => {
    if (languages.length === 0)
        return "";
    if (languages.length === 1)
        return languages[0];
    const lastLanguage = languages[languages.length - 1];
    const otherLanguages = languages.slice(0, -1).join(", ");
    return `${otherLanguages}, and ${lastLanguage}`;
};
exports.formatLanguagesList = formatLanguagesList;
const formatLanguages = (languages) => {
    if (languages.length === 0)
        return "";
    if (languages.length === 1)
        return languages[0].name;
    const lastLanguage = languages[languages.length - 1].name;
    const otherLanguages = languages
        .slice(0, -1)
        .map((lang) => lang.name)
        .join(", ");
    return `${otherLanguages}, and ${lastLanguage}`;
};
exports.formatLanguages = formatLanguages;
const formatLanguagesWithIso = (languages) => {
    if (languages.length === 0)
        return "";
    if (languages.length === 1)
        return `${languages[0].name} (${languages[0].iso639_1})`;
    const lastLanguage = languages[languages.length - 1];
    const otherLanguages = languages
        .slice(0, -1)
        .map((lang) => `${lang.name} (${lang.iso639_1})`)
        .join(", ");
    return `${otherLanguages}, and ${lastLanguage.name} (${lastLanguage.iso639_1})`;
};
exports.formatLanguagesWithIso = formatLanguagesWithIso;
const formatLanguagesWithIsoList = (languages) => {
    if (languages.length === 0)
        return "";
    if (languages.length === 1) {
        const lang = (0, exports.getLanguageByIso)(languages[0]);
        return lang ? `${lang.name} (${lang.iso639_1})` : languages[0];
    }
    const lastLanguage = (0, exports.getLanguageByIso)(languages[languages.length - 1]);
    const otherLanguages = languages
        .slice(0, -1)
        .map((iso) => {
        const lang = (0, exports.getLanguageByIso)(iso);
        return lang ? `${lang.name} (${lang.iso639_1})` : iso;
    })
        .join(", ");
    return `${otherLanguages}, and ${lastLanguage
        ? `${lastLanguage.name} (${lastLanguage.iso639_1})`
        : lastLanguage}`;
};
exports.formatLanguagesWithIsoList = formatLanguagesWithIsoList;
