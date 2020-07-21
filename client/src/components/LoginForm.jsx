import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { login } from '../actions/auth';
import useSWR from 'swr';
import { fetchBugs } from '../actions/bugs';


export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let bugs = useSelector(state => state.bugs, shallowEqual);

  const fetcher = () => dispatch(fetchBugs());

  const { data, error } = useSWR(`${process.env.REACT_APP_API_KEY}/api/v1/bugs`, fetcher, { revalidateOnFocus: false });

  bugs = Object.values(bugs);

  if (!data) return 'Loading...';


  // useEffect(() => {
  //   dispatch(fetchBugs())
  //   .then(() => console.log('Done performing fetch'));
  // }, []);

  const bugsDivs = bugs.map(bug => {
    return (
      <div key={bug.id}>
        { bug.attributes.name }
        <img src={`${process.env.REACT_APP_API_URL}${bug.links.imageUrl}`} alt=""/>
        {/* <img src={`${bug.links.imageUrl}`} alt=""/> */}
      </div>
    )
  })

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        dispatch(login({ email, password }))
        .then((res) => console.log(res))
      }}>
        <div>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
      <div>
        hewwo i am the bug divs section!
      { bugsDivs }
      </div>
    </div>
  )
}
