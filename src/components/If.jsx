const If = ({ children, condition }) => {
  return <div>{condition && children}</div>;
};

export default If;
