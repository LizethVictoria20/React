import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [result, setState] = useState({ sprites: [] });
  const arr = []

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        fetch(data.url)
      })
  })
  return result
}
export default useInitialState;
