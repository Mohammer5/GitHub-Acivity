import { Form } from 'react-final-form'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useMemo } from 'react'
import cx from 'classnames'

import { H1 } from '../components/H1';
import { Button } from '../components/fields/Button';
import { InputField } from '../components/fields/InputField';
import { SelectField } from '../components/fields/SelectField';
import { getUserName } from '../redux/selectors/getUserName';
import { getPageCount } from '../redux/selectors/getPageCount';
import { loadActivityData } from '../redux/namespaces/activity/actions';
import { numberBetween } from '../utils/validators/numberBetween';
import { required } from '../utils/validators/required';
import styles from './Home.module.css'

export const Home = ({
  userName,
  pageCount,
  onSubmit: createOnSubmit,
}) => {
  const history = useHistory()
  const onSubmit = useMemo(
    () => createOnSubmit(history),
    [ history, createOnSubmit ],
  )

  return (
    <div className={cx(styles.page)}>
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <H1>Get user activity</H1>
            <div className={styles.formContent}>
              <InputField
                name="userName"
                label="Username"
                placeholder="Mohammer5"
                help="Enter the username of the user you want to analyze the activity of"
                validate={required}
                defaultValue={userName}
              />

              <SelectField
                name="pageCount"
                label="Activity pages"
                help="SelectField the amount of pages of the paginated api should be requested (max 10)"
                validate={numberBetween(1, 10)}
                defaultValue={pageCount}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </SelectField>

              <Button primary>
                Show activity
              </Button>
            </div>
          </form>
        )}
      </Form>
    </div>
  )
}

export const ConnectedHome = connect(
  state => ({
    userName: getUserName(state),
    pageCount: getPageCount(state),
  }),
  dispatch => ({
    onSubmit: history => values => {
      dispatch(loadActivityData(values.userName, values.pageCount))
      history.push('/activity')
    }
  })
)(Home)
