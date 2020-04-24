import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

// import CustomSwitch from '../../utils/customSwitch';
import LoadingPage from '../pages/LoadingPage';

const SignInForm = lazy(() =>
  import(/* webpackChunkName: "signInForm" */ '../organisms/SIgnInForm')
);
const SignUpForm = lazy(() =>
  import(/* webpackChunkName: "signUpForm" */ '../organisms/SignUpForm')
);
const ChatsScreen = lazy(() =>
  import(/* webpackChunkName: "chatsScreen" */ '../pages/ChatsScreen')
);
const ChatRoom = lazy(() =>
  import(/* webpackChunkName: "chatRoom" */ '../pages/ChatRoom')
);
const CreateChat = lazy(() =>
  import(/* webpackChunkName: "createChat" */ '../pages/CreateChat')
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
    <Route path="/sign-in" exact>
      <Suspense fallback={<LoadingPage />}>
        <SignInForm />
      </Suspense>
    </Route>
    <Route path="/sign-up" exact>
      <Suspense fallback={<LoadingPage />}>
        <SignUpForm />
      </Suspense>
    </Route>
    <Route path="/chats" exact>
      <Suspense fallback={<LoadingPage />}>
        <ChatsScreen />
      </Suspense>
    </Route>
    <Route path="/chats/chat-room" exact>
      <Suspense fallback={<LoadingPage />}>
        <ChatRoom />
      </Suspense>
    </Route>
    <Route path="/chats/create-chat" exact>
      <Suspense fallback={<LoadingPage />}>
        <CreateChat />
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
