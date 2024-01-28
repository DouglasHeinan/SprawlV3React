import {
    createSelector,
    createEntityAdaptor
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const usersAdaptor = createEntityAdaptor({});

const initialState = usersAdaptor.getInitialState();
