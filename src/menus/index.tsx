import { LaptopOutlined, NotificationOutlined, UserOutlined, PieChartOutlined, DotChartOutlined, RadarChartOutlined } from '@ant-design/icons';

const menus = [
  {
    id: '1',
    path: '/',
    name: '欢迎页',
    icon: <LaptopOutlined />,
  },
  {
    id: '2',
    name: '主页',
    icon: <NotificationOutlined />,
    children: [
      {
        id: '2-1',
        path: '/home',
        name: '主页列表',
        children: [
          {
            id: '2-1-1',
            path: 'detail',
            hideInMenu: true,
            name: '主页详情',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    name: '关于',
    icon: <UserOutlined />,
    children: [
      {
        id: '3-1',
        path: '/about',
        name: '关于列表',
        children: [
          {
            id: '3-1-1',
            path: 'detail',
            hideInMenu: true,
            name: '关于详情',
          },
        ],
      },
    ],
  },
  {
    id: '4',
    name: '动态',
    icon: <PieChartOutlined />,
    children: [
      {
        id: '4-1',
        path: '/dynamic',
        name: '动态路由入口',
        children: [
          {
            id: '4-1-1',
            path: ':id',
            hideInMenu: true,
            name: '动态路由',
            children: [
              {
                id: '4-1-1-1',
                path: ':type',
                name: '通配路由',
              },

            ],
          },
        ],
      },
    ],
  },
];

export default menus;