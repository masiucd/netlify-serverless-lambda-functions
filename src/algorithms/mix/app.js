const container = document.querySelector('.container');
const user = {
  avatar_url: 'https://avatars2.githubusercontent.com/u/176013?v=4',
  bio:
    'I create courses that make learning things like JavaScript easy and fun 🔥',
  blog: 'www.wesbos.com',
  company: 'me',
  created_at: '2010-01-04T10:11:44Z',
  email: null,
  events_url: 'https://api.github.com/users/wesbos/events{/privacy}',
  followers: 20066,
  followers_url: 'https://api.github.com/users/wesbos/followers',
  following: 31,
  following_url: 'https://api.github.com/users/wesbos/following{/other_user}',
  gists_url: 'https://api.github.com/users/wesbos/gists{/gist_id}',
  gravatar_id: '',
  hireable: true,
  html_url: 'https://github.com/wesbos',
  id: 176013,
  location: 'Hamilton, Ontario',
  login: 'wesbos',
  name: 'Wes Bos',
  node_id: 'MDQ6VXNlcjE3NjAxMw==',
  organizations_url: 'https://api.github.com/users/wesbos/orgs',
  public_gists: 52,
  public_repos: 260,
  received_events_url: 'https://api.github.com/users/wesbos/received_events',
  repos_url: 'https://api.github.com/users/wesbos/repos',
  site_admin: false,
  starred_url: 'https://api.github.com/users/wesbos/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/wesbos/subscriptions',
  type: 'User',
  updated_at: '2020-05-13T15:24:38Z',
  url: 'https://api.github.com/users/wesbos',
};

const filedsToShow = ['bio', 'blog', 'company', 'login', 'public_repos'];

function renderUser() {
  let html = ``;
  for (const val of filedsToShow) {
    html += `
      <li>
        ${val} : ${user[val]}
      </li>
    `;
  }
  return html;
}

container.innerHTML = renderUser();
