// Libs
import React from "react";
import jwtDecode from "jwt-decode";
import Cookie from "js-cookie";
import LoginForm from "@/pages/LoginPage";
import { useRouter } from "@/hooks";

export const UserContext = React.createContext(null);

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export const UserProvider: React.FC<Props> = (props) => {
  const { children } = props;
  // const token = localStorage.getItem("token") || "";
  const token = Cookie.get("token") || "";
  const router = useRouter();
  if(token) {
    let infoToken: any = { username: '', role: "" };
    const tokenObj: any = jwtDecode(token);
    infoToken = {
      ...infoToken,
      username: tokenObj.username,
      role: tokenObj.role
    };
    infoToken = { ...infoToken };
    return (
      <UserContext.Provider value={infoToken}>{children}</UserContext.Provider>
    );
  }
  // Redirect to home
  router.push("/login");
  return <LoginForm />;
};
