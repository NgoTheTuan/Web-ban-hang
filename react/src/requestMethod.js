import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjY2NWJhNzlmM2ZhZWY2YWU2ZjIxYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTExMDcyNywiZXhwIjoxNjUxMzY5OTI3fQ.V7NmX1bfPaTIhHRhLjFzUTFxfPr_N-SmyxeTFkTC4xk';

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});