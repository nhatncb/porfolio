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
import AdminResearch from 'containers/Admin/Research';
import AdminArtisticEducation from 'containers/Admin/Research/ArtisticEducation';
import ArtisticEducationEdit from 'containers/Admin/Research/ArtisticEducation/Edit';
import AdminTransversalityOfVoice from 'containers/Admin/Research/TransversalityOfVoice';
import TransversalityEdit from 'containers/Admin/Research/TransversalityOfVoice/Edit';
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
    path: 'books',
    element: <AdminBookList />,
    name: 'Books',
    icon: <BookOutlined />,
  },
  {
    path: 'books/create',
    element: <AdminBookCreate />,
    name: 'Create Book',
    hideInMenu: true,
  },
  {
    path: 'books/:id',
    element: <AdminBookEdit />,
    name: 'Edit Book',
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
    element: <AdminResearch />,
    name: 'Research',
    children: [
      {
        path: 'transversality',
        element: <AdminTransversalityOfVoice />,
      },
      {
        path: 'artistic-education',
        element: <AdminArtisticEducation />,
      },

      {
        path: '',
        element: <Navigate replace to="transversality" />,
      },
    ],
  },
  {
    path: 'research/artistic-education/edit',
    element: <ArtisticEducationEdit />,
    name: 'Artistic Education',
    hideInMenu: true,
  },
  {
    path: 'research/transversality/edit',
    element: <TransversalityEdit />,
    name: 'Transversality',
    hideInMenu: true,
  },
  {
    path: '',
    element: <Navigate replace to="art-works" />,
  },
];

export default adminRoutes;
