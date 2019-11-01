import React from 'react';

import { PushEvent } from './ActivityEvent/PushEvent';
import { CreateEventBranch } from './ActivityEvent/CreateEventBranch';
import { DeleteEventBranch } from './ActivityEvent/DeleteEventBranch';
import { IssueCommentEvent } from './ActivityEvent/IssueCommentEvent';
import { IssuesEventOpened } from './ActivityEvent/IssuesEventOpened';
import { PullRequestEventClosed } from './ActivityEvent/PullRequestEventClosed';
import { PullRequestEventOpened } from './ActivityEvent/PullRequestEventOpened';
import { PullRequestReviewCommentEventCreated } from './ActivityEvent/PullRequestReviewCommentEventCreated';
import { MemberEventAdded } from './ActivityEvent/MemberEventAdded';

export const ActivityEvent = ({ activity }) => {
  const { type, payload } = activity

  if (type === 'PushEvent') {
    return <PushEvent activity={activity} />
  }

  if (type === 'IssuesEvent' && payload.action === 'opened') {
    return <IssuesEventOpened activity={activity} />
  }

  if (type === 'IssueCommentEvent') {
    return <IssueCommentEvent activity={activity} />
  }

  if (type === 'CreateEvent' && payload.ref_type === 'branch') {
    return <CreateEventBranch activity={activity} />
  }

  if (type === 'DeleteEvent' && payload.ref_type === 'branch') {
    return <DeleteEventBranch activity={activity} />
  }

  if (type === 'PullRequestEvent' && payload.action === 'closed') {
    return <PullRequestEventClosed activity={activity} />
  }

  if (type === 'PullRequestEvent' && payload.action === 'opened') {
    return <PullRequestEventOpened activity={activity} />
  }

  if (type === 'PullRequestReviewCommentEvent' && payload.action === 'created') {
    return <PullRequestReviewCommentEventCreated activity={activity} />
  }

  if (type === 'MemberEvent' && payload.action === 'added') {
    return <MemberEventAdded activity={activity} />
  }

  return null
}
