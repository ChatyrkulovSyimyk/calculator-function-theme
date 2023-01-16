const Wrapper = ({ children, dark }) => {
  return (
    <div>
      <h2 className="wrapper" background={dark === true ? "https://images.onlinetestpad.com/18/4a/6c90dc854b15bd593128c0cf3c0c.jpg" : "#f7f8f9"}>{children}</h2>
    </div>
  );
};

export default Wrapper;
