import { PageTransition } from '@/components/PageTransition';
import { AboutPage } from '@/pages/About/AboutPage';
import { BaseLayout } from '@/pages/BaseLayout/BaseLayout';
import { BlogDetailsPage } from '@/pages/Blog/BlogDetailsPage';
import { BlogPage } from '@/pages/Blog/BlogPage';
import { HomePage } from '@/pages/HomePage/HomePage';
import { NotFoundPage } from '@/pages/NotFound/NotFoundPage';
import { UsesPage } from '@/pages/Uses/UsesPage';
import { Route, Routes } from 'react-router';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route
          index
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="about"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />
        <Route
          path="blog"
          element={
            <PageTransition>
              <BlogPage />
            </PageTransition>
          }
        />
        <Route
          path="blog/:slug"
          element={
            <PageTransition>
              <BlogDetailsPage />
            </PageTransition>
          }
        />
        <Route
          path="uses"
          element={
            <PageTransition>
              <UsesPage />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFoundPage />
            </PageTransition>
          }
        />
      </Route>
    </Routes>
  );
};
