import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

export function useRedux() {
  return {
    dispatch: useDispatch(),
    useAppSelect: useSelector((state: RootState) => state),
  }
}