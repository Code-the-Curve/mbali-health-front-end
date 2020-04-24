import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import CustomSwitch from '../../utils/customSwitch';
import LoadingPage from '../pages/LoadingPage';

const SignInForm = lazy(() =>
  import(/* webpackChunkName: "signInForm" */ '../organisms/SIgnInForm')
);
// const LoginPage = lazy(() =>
//   import(/* webpackChunkName: "loginPage" */ '../pages/LoginPage')
// );
const ChatsScreen = lazy(() =>
  import(/* webpackChunkName: "chatsScreen" */ '../pages/ChatsScreen')
);
const ChatRoom = lazy(() =>
  import(/* webpackChunkName: "chatRoom" */ '../pages/ChatRoom')
);
const NotFoundPage = lazy(() =>
  import(/* webpackChunkName: "notFoundPage" */ '../pages/NotFoundPage')
);

const AppRoutes = () => (
  <Switch>
    <Route path="/" exact>
      <Suspense fallback={<LoadingPage />}>
        <ChatsScreen />
      </Suspense>
    </Route>
    <Route path="/login" exact>
      <Suspense fallback={<LoadingPage />}>
        <SignInForm />
      </Suspense>
    </Route>
    <Route path="/chats" exact>
      <Suspense fallback={<LoadingPage />}>
        <ChatsScreen />
      </Suspense>
    </Route>
    <Route path="/chats/:chatId" exact>
      <Suspense fallback={<LoadingPage />}>
        <ChatRoom />
      </Suspense>
    </Route>
    <Route>
      <Suspense fallback={<LoadingPage />}>
        <NotFoundPage />
      </Suspense>
    </Route>
  </Switch>
);

export default AppRoutes;
