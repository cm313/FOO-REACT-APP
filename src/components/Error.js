import {useRouteError} from "react-router-dom";

// useRouteError will return a object which contains additional information about error

const Error = ()=>{

  const err = useRouteError();
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Something went Wrong</h2>
      <h3>
        {err.status} {err.statusText}
      </h3>
    </div>
  );
}

export default Error