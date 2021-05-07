const ConstantMap = function (data) {
  let constant = [];
  for (let key in data) {
    constant[key] = data[key].val;
  }
  let constantMap = {
    constant: constant,
    choices: data,
    findKeyById: function (id) {
      if (id === null) return id;
      const choices = this.choices;
      window.cc = choices;
      for (let item in choices) {
        if (choices[item].val === id) return item;
      }
    }
  };
  return constantMap;
};
const SEARCH_TYPE = ConstantMap({
  ALL: {label: 'All types', placeholder: 'All types', val: -1},
  SITE: {label: 'Sites', placeholder: 'type:site', val: 1},
  PAGE: {label: 'Pages', placeholder: 'type:page ', val: 2}
});

const pages = [
  {name: 'Demo Site', updateAt: '1620382169646'},
  {name: 'Java', updateAt: '1620295769646'},
  {name: 'Javascript', updateAt: '1620209369646'},
  {name: '.NET', updateAt: '1620122969646'},
  {name: 'Begin Ruby', updateAt: '1620036569646'},
  {name: 'Begin APS', updateAt: '1619950169646'},
];
const sites = [
  {name: 'Page A', updateAt: '1620382169646'},
  {name: 'Login', updateAt: '1620295769646'},
  {name: 'Register', updateAt: '1620209369646'},
  {name: 'Home', updateAt: '1620122969646'},
  {name: 'Tutorial', updateAt: '1620036569646'},
  {name: 'Learn', updateAt: '1619950169646'},
];

function search_pages(req, res) {
  res.json({pages});
}

function search_sites(req, res) {
  res.json({sites});
}

function search_all(req, res) {
  res.json({pages, sites});

}

module.exports = {search_pages, search_sites, search_all};
