import './styles/styles.scss'
import './index.html'
import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locale/en.json'
import es from './locale/es.json'
import fr from './locale/fr.json'
import ja from './locale/ja.json'
import nl from './locale/nl.json'
import ru from './locale/ru.json'
import zh from './locale/zh.json'

i18next.use(LanguageDetector).init({
  resources: {
    en: {
      translation: en
    },
    es: {
      translation: es
    },
    fr: {
      translation: fr
    },
    ja: {
      translation: ja
    },
    nl: {
      translation: nl
    },
    ru: {
      translation: ru
    },
    zh: {
      translation: zh
    },
  },
  fallbackLng: 'en',
  detection: {
    lookupQuerystring: 'lang',
  }
})

function initDataI18nAttr() {
  const elements = document.querySelectorAll(".i18nelement")
  for (let element of elements) {
    const key = element.getAttribute("data-i18n")
    const params = element.dataset
    element.innerHTML = i18next.t(key, params)
  }
}

function handleSelectOption() {
  const radioBtns = document.querySelectorAll('input[name="options"]')
  const continueBtn = document.querySelector('a.banner__continueBtn')

  radioBtns.forEach(elem => {
    if (elem.checked) continueBtn.href = elem.dataset.url
    elem.addEventListener('change', (e) => continueBtn.href = e.target.dataset.url)
  })
}

window.addEventListener('load', () => {
  initDataI18nAttr()
  handleSelectOption()
})
