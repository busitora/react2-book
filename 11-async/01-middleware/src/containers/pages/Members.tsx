import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { userSlice, UserState } from 'redux/user';
import { User } from 'domains/github/models/user';
import Members from 'components/pages/Members';

const EnhancedMembers: FC = () => {
  const { orgCode = '' } = useParams();
  const dispatch = useDispatch();
  const users = useSelector<UserState, User[]>(state => state.users);
  const isLoading = useSelector<UserState, boolean>(state => state.isLoading);

  useEffect(() => {
    dispatch(userSlice.actions.getMembersStarted({ orgCode }));
  }, [orgCode, dispatch]);

  return <Members orgCode={orgCode} users={users} isLoading={isLoading} />;
};

export default EnhancedMembers;