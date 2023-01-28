import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";

//they are typed version of useSelector and useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

//now use useAppSelector to get state
//and use useApppDispatch to dispatch actions
//use them normaly you use useDispatch and useSelector
