import { crtDom } from "@/js/utils";
export function create_profile(img_src, name, info) {

  const profile = crtDom('a');
  profile.classList.add('profile');

  profile.innerHTML = `
    <div class="profile-photo">
      <img src="${img_src}">
    </div>

    <div class="profile-description">
      <h2>${name}</h2>
      <p>${info}</p>
    </div>
  `

  return profile;
}

export class Profile {
  img_src = null
  name = null
  info = null
  dom = null

  constructor(info) {
    this.img_src = info.img_src
    this.name = info.name
    this.info = info.at
  }

  build = () => {
    const profile = crtDom('a');
    profile.classList.add('profile');

    profile.innerHTML = `
      <div class="profile-photo">
        <img src="${this.img_src}">
      </div>

      <div class="profile-description">
        <h2>${this.name}</h2>
        <p>${this.info}</p>
      </div>
    `

    this.dom = profile;
    return profile;
  }
}