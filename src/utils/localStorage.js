/* eslint-disable prettier/prettier */
export default function useLocalStorage() {
  const setAccessToken = (token) => {
    localStorage.setItem('accessToken', token);
  };

  const getAccessToken = () => localStorage.getItem('accessToken');

  return { setAccessToken, getAccessToken };
}
