import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../components/redux/store/Store";

export const useAppDispatch: () => AppDispatch = useDispatch;