import { crtDom } from "@/js/utils";
export class Sidebar {
  sidebarInfo = null
  dom = null
  constructor(sidebarInfo) {
    this.sidebarInfo = sidebarInfo
  }
  build = () => {
    const sidebar = crtDom('div');
    sidebar.classList.add('sidebar');

    this.sidebarInfo.forEach(item => {
      const menuItem = new MenuItem(item).build()
      sidebar.appendChild(menuItem);
    })

    this.dom = sidebar;
    return sidebar;
  }
}

class MenuItem {
  icon_class_list = null
  name = null
  dom = null
  constructor(item) {
    this.icon_class_list = item.icon_class_list
    this.name = item.name
  }

  build = () => {
    const menuItem = crtDom('a');
    menuItem.classList.add('menu-item');

    menuItem.innerHTML = `
      <span>
        <i class="${this.icon_class_list.join(" ")}"></i>
      </span>
      <h2>${this.name}</h2>
    `
    this.dom = menuItem
    return menuItem;
  }
}