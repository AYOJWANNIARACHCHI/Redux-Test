import { useSelector, useDispatch } from 'react-redux';
import { addMovie } from './store/movies';
import { setType, fetchUsers } from './store/users';
import { useEffect } from 'react';

const App = () => {
  const movies = useSelector((state) => state.movies.list);
  const users = useSelector((state) => state.users);
  console.log(movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers()).unwrap().then((response) => {
      console.log(response);
    }).catch(ereor => {
      console.log(ereor);
    })
  }, [])

  return (
    <>
      <h2>Movies</h2>
      <ul>
        {
          movies ? movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))
            : null}
      </ul>
      <hr />
      <button onClick={() => dispatch(addMovie({ id: 3, title: 'Jailer' }))}>Add Movie</button>
      <h3>User Type : {users.type}</h3>
      <button onClick={() => dispatch(setType('Admin'))}>
        Set Type
      </button>

      <hr />
      <div>
        {users.loading ? 'loading' : null}
      </div>

      <ul>
        {
          users ? users.users.map(users => (
            <li key={users.id}>{users.name}</li>
          ))
            : null}
      </ul>

      <button onClick={() => dispatch(fetchUsers())}>
        Get Uders
      </button>
    </>
  );
}

export default App;
