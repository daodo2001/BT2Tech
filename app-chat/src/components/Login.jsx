import { useState } from "react";
function Login({ callback }) {
  const [name, setName] = useState("");
  const handleClick = () => {
    callback(name);
  };
  return (
    <div style={{height: 37 ,width: "auto", textAlign: "center"}}>
     <input placeholder="User name" style={{height: 37 ,width: 400, marginTop:15, borderRadius: 5}}
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
       <button style={{ height: 37,marginLeft: 5 }} type="button" class="btn btn-primary" onClick={handleClick}>Đăng nhập</button>
    </div>
  );
}

export default Login;
