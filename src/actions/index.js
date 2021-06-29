const increment = (nr) => {
	return {
	  type: "INCREMENT",
	  payload:nr
	};
  };
  const decrement = () => {
	return {
	  type: "DECREMENT",
	};
  };
  const signin = () => {
	return {
	  type: "SIGN_IN",
	};
  };
  
  export {increment,decrement,signin}