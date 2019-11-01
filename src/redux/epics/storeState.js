import { tap, ignoreElements } from 'rxjs/operators';

export const storeState = (action$, store$) => store$.pipe(
  tap(state => {
    localStorage.setItem('githubState', JSON.stringify(state))
  }),
  ignoreElements(),
)
