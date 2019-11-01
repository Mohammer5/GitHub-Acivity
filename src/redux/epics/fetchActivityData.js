import { flatten } from 'lodash/fp';
import { from, of } from 'rxjs';
import { ofType } from 'redux-observable';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';

import {
  LOAD_ACTIVITY_DATA,
  loadingActivityDataError,
  setActivityData
} from '../namespaces/activity/actions';
import { getActivityApiUrl } from '../selectors/getActivityApiUrl';
import { getPageCount } from '../selectors/getPageCount';
//import mockData from '../../mockData/activity.json'

const paginateUrl = (url, page) => page === 0
  ? url
  : url + `?page=${page + 1}`

const createUrls = (url, pageCount) => {
  const urls = []

  for (let i = 0; i < pageCount; ++i) {
    urls.push(paginateUrl(url, i))
  }

  return urls
}

export const fetchActivityData = (action$, store$) => action$.pipe(
  ofType(LOAD_ACTIVITY_DATA),
  withLatestFrom(store$),
  switchMap(
    ([ action, state ]) => {
      const defaultUrl = getActivityApiUrl(state)
      const pageCount = getPageCount(state)

      const urls = createUrls(
        defaultUrl,
        pageCount,
      )

      const request = Promise.all(urls.map(url => fetch(url)))
        .then(responses => Promise.all(responses.map(r => r.json())))
        .then(flatten)

      return from(request)
    }
  ),
  map(setActivityData),
  catchError(error => of(loadingActivityDataError(error.message)))
)
