import { crtDom } from "@/js/utils";
export function create_post() {
  const label = crtDom('label');
  label.classList.add('btn', 'btn-primary');
  label.setAttribute('for', 'create-post');
  label.textContent = 'Create Post'
  return label
}