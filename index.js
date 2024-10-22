import './index.css';

import {
  navbar,
  navbar_container,
  navbar_container_logo,
  navbar_container_searchBar,
  navbar_create,
  main,
  main_container,
  main_left,
  main_left_sidebar,
  main_left_create_post,
  main_right,
  main_right_message,
  main_right_friend_list,
  main_right_request_list
} from '@/js/common'

import buttonGroupToggle from '@/js/func/buttonGroupToggle';
const buttonGroup = main_right_message.querySelectorAll('span')
buttonGroupToggle(buttonGroup)