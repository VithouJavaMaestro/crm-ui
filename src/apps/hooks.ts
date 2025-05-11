import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppStore} from "./store.ts";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppSelector = useSelector.withTypes<AppStore>();