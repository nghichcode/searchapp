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

const sites = [
  {name: 'Demo Site', updateAt: '1620382169646', ownerId: 1, starred: true, trash: false},
  {name: 'Java', updateAt: '1620295769646', ownerId: 2, starred: true, trash: false},
  {name: 'Javascript', updateAt: '1620209369646', ownerId: 3, starred: false, trash: true},
  {name: '.NET', updateAt: '1620122969646', ownerId: 4, starred: true, trash: false},
  {name: 'Begin Ruby', updateAt: '1620036569646', ownerId: 1, starred: false, trash: true},
  {name: 'Begin APS', updateAt: '1619950169646', ownerId: 5, starred: true, trash: false},
];
const pages = [
  {name: 'Page A', updateAt: '1620382169646', ownerId: 1, starred: true, trash: true},
  {name: 'Login', updateAt: '1620295769646', ownerId: 2, starred: false, trash: false},
  {name: 'Register', updateAt: '1620209369646', ownerId: 3, starred: true, trash: false},
  {name: 'Home', updateAt: '1620122969646', ownerId: 4, starred: true, trash: false},
  {name: 'Tutorial', updateAt: '1620036569646', ownerId: 1, starred: true, trash: false},
  {name: 'Learn', updateAt: '1619950169646', ownerId: 5, starred: true, trash: false},
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
