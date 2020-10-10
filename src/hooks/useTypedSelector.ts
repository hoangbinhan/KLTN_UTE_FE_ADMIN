import { useSelector, TypedUseSelectorHook } from "react-redux";
// import { ROOT_STATE } from "@/configs/Redux/store";

// TODO: Better type by ROOT_STATE
export const useTypedSelector: TypedUseSelectorHook<{
  [key: string]: any;
}> = useSelector;
