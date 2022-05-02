import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkAuth } from "../Redux/actions";

export const Logout = () => {
  // Logout component, just log user out and take him to `/` homepage

  // suggestion: if you are storing anyting in redux it's a good idea to
  // empty it before loggin out. eg: order
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      checkAuth({
        auth: false,
        user: {},
      })
    );
    navigate("/");
  });

  return <></>;
};
