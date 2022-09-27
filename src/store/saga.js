import {watchSearch} from './search/searchSaga';

export default function* rootSaga() {
  yield watchSearch();
}


// export function* watchSaga() {
//   yield takeEvery('SUBMIT', workerSaga);
// }
// function* workerSaga(action) {
//   yield console.log('работает');
// }

// function* generator(arr) {
//   for (const name of arr) {
//     yield name;
//   }
// }

// function* generator() {
//   let i = 0;
//   while (true) {
//     yield i++;
//   }
// }

// function root() {
//   const iterator = generator(['max', 'kate', 'nika', 'karol']);
//   console.log(iterator.next().value);
//   console.log(iterator.next().value);
//   console.log(iterator.next().value);
//   console.log(iterator.next().value);
//   console.log(iterator.next().value);
// }

// root();
