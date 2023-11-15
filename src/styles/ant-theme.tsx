import type { ProLayoutProps } from '@ant-design/pro-layout';
import type { ThemeConfig } from 'antd';

const AntTheme: ThemeConfig = {
  token: {
    colorText: '#13161A',
    fontFamily: 'Noto Sans JP, sans-serif',
    motionDurationSlow: '0.1s',
    borderRadius: 8,
    fontSize: 14,
    controlOutlineWidth: 0,
    controlHeightSM: 32,
    controlHeight: 40,
    colorSuccess: '#51b873',
    colorError: '#E03C35',
    colorPrimary: '#00B61C',
  },
  components: {
    Breadcrumb: {
      fontSize: 12,
    },
    Card: {
      headerHeight: 64,
      headerFontSize: 18,
      borderRadiusLG: 0,
    },
    Skeleton: {
      controlHeightSM: 22,
    },
  },
};

export const layoutToken: ProLayoutProps['token'] = {
  sider: {
    colorTextMenuSelected: '#00B61C',
    colorTextMenuItemHover: '#00B61C',
    colorMenuBackground: '#fff',
    colorTextMenu: '#13161A',
    colorBgMenuItemSelected: ' #EBFAEC',
    menuHeight: 56,
  },
  pageContainer: {
    marginInlinePageContainerContent: 24,
    marginBlockPageContainerContent: 24,
    paddingBlockPageContainerContent: 16,
    paddingInlinePageContainerContent: 16,
  },
  header: {
    heightLayoutHeader: 73,
  },
};

export default AntTheme;
