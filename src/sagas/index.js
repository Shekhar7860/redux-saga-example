import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {

  const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
    // .then(response => response.json());
  //   .then((response) => {
  //     response.json()
  //    //json response
  //  })
  //  .catch((err) => {
  //      console.log(err);
  //  });
   .then(resp => resp.json())
    .then(users => {
      console.log('users', users)
      return users;
    });
    

  yield put({ type: "NEWS_RECEIVED", json: json.articles || [{ error: json.message }] });
}

function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
