const browser = require('webextension-polyfill')

const plugin = {
  keyword: "Flags",
  subtitle: 'View Chrome flags page.',
  action: openFlags,
  icon: {
    path: 'images/chrome-icon.svg'
  }
}

async function openFlags() {
  await browser.tabs.create({url: "chrome://flags"})
}

module.exports = plugin
