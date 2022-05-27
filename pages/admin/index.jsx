export async function getServerSideProps(context) {
  return {
    props: { test: "hello" },
  };
}

const Login = (props) => {
  console.log("Login | props: ", props);

  return <h1>Login Page</h1>;
};

export default Login;
