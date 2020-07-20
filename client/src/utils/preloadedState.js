import jwt_decode from 'jwt-decode';

export default function getPreloadedState() {
  const token = localStorage.getItem("token");

  if (token) {
    const data = jwt_decode(token);
    const { id, email } = data;

    return { auth: { user: { id, email } } };
  }

  return { };
}
