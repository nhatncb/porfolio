import {
  BookOutlined,
  FileTextOutlined,
  PictureOutlined,
  StarOutlined,
  TrophyOutlined,
  UserOutlined,
} from '@ant-design/icons';
import ArtworkCreate from 'containers/Admin/Artworks/Create';
import AdminArtworkEdit from 'containers/Admin/Artworks/Edit';
import AdminArtworkList from 'containers/Admin/Artworks/List';
import AdminBookCreate from 'containers/Admin/Books/Create';
import AdminBookEdit from 'containers/Admin/Books/Edit';
import AdminBookList from 'containers/Admin/Books/List';
import AdminNewsCreate from 'containers/Admin/News/Create';
import AdminNewsEdit from 'containers/Admin/News/Edit';
import AdminNewsList from 'containers/Admin/News/List';
import ResearchCreate from 'containers/Admin/Research/Create';
import ResearchList from 'containers/Admin/Research/List';
import ResearchContentEdit from 'containers/Admin/Research/ResearchContentEdit';
import StatementAdminContent from 'containers/Admin/Statement';
import StatementEdit from 'containers/Admin/Statement/Edit';
import AdminVerseCreate from 'containers/Admin/Verses/Create';
import AdminVerseEdit from 'containers/Admin/Verses/Edit';
import AdminVerseList from 'containers/Admin/Verses/List';
import { Navigate } from 'react-router';

const adminRoutes = [
  {
    path: 'statement',
    element: <StatementAdminContent />,
    name: 'Statement',
    icon: <UserOutlined />,
  },
  {
    path: 'statement/:id',
    element: <StatementEdit />,
  },
  {
    path: 'news',
    element: <AdminNewsList />,
    name: 'News',
    icon: <StarOutlined />,
  },
  {
    path: 'news/create',
    element: <AdminNewsCreate />,
    name: 'Create News',
    hideInMenu: true,
  },
  {
    path: 'news/:id',
    element: <AdminNewsEdit />,
    name: 'Edit News',
    hideInMenu: true,
  },
  {
    path: 'art-works',
    element: <AdminArtworkList />,
    name: 'Art works',
    icon: <PictureOutlined />,
  },
  {
    path: 'art-works/create',
    element: <ArtworkCreate />,
    name: ' Create Artworks',
    hideInMenu: true,
  },
  {
    path: 'art-works/:id',
    element: <AdminArtworkEdit />,
    name: ' Edit Artworks',
    hideInMenu: true,
  },
  {
    path: 'publications',
    element: <AdminBookList />,
    name: 'Publications',
    icon: <BookOutlined />,
  },
  {
    path: 'publications/create',
    element: <AdminBookCreate />,
    name: 'Create Publication',
    hideInMenu: true,
  },
  {
    path: 'publications/:id',
    element: <AdminBookEdit />,
    name: 'Edit Publication',
    hideInMenu: true,
  },
  {
    path: 'verses',
    element: <AdminVerseList />,
    name: 'Verses',
    icon: <FileTextOutlined />,
  },
  {
    path: 'verses/create',
    element: <AdminVerseCreate />,
    name: 'Create Verse',
    hideInMenu: true,
  },
  {
    path: 'verses/:id',
    element: <AdminVerseEdit />,
    name: 'Edit Verse',
    hideInMenu: true,
  },
  {
    path: 'research',
    icon: <TrophyOutlined />,
    element: <ResearchList />,
    name: 'Research',
  },
  {
    path: 'research/create',
    element: <ResearchCreate />,
    name: 'Create Research',
    hideInMenu: true,
  },
  {
    path: 'research/:id',
    element: <ResearchContentEdit />,
    name: 'Edit Research',
    hideInMenu: true,
  },

  {
    path: '',
    element: <Navigate replace to="art-works" />,
  },
];

export default adminRoutes;
