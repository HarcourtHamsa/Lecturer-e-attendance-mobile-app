import { ILoginData } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// set default axios URL
axios.defaults.baseURL = "https://attendance-0ck9.onrender.com";

// default axios headers
let config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
};

export async function login({ username, password }: ILoginData) {
  try {
    const response = await axios.post(
      "/auth/login/",
      { username, password },
      config
    );

    const data = await response.data;
    await storeData(data.key);

    return data;
  } catch (error) {
    return error.message;
  }
}

async function storeData(value) {
  try {
    await AsyncStorage.setItem("key", value);
  } catch (e) {
    console.log(e);
  }
}

export async function getStorageKey() {
  try {
    const value = await AsyncStorage.getItem("key");
    return value;
  } catch (e) {
    // error reading value
  }
}

export async function fetchCourses() {
  try {
    const response = await axios.get("/courses/", config);

    const data = response.data;
    return data;
  } catch (error) {
    return error.message;
  }
}

/**
 *
 * @param courseId number
 * @param longtitude number
 * @param latitude number
 * @param token string
 * @returns
 */
export async function startClassFnc({
  courseId,
  longtitude,
  latitude,
  token,
}: {
  courseId: number;
  longtitude: number;
  latitude: number;
  token: string;
}) {
  const authHeaderConfig = {
    headers: {
      ...config.headers,
      Authorization: "Token " + token,
    },
  };

  try {
    const response = await axios.post(
      "/classes/start/",
      {
        course: courseId,
        latitude: latitude,
        longtitude: longtitude,
      },
      authHeaderConfig
    );

    // console.log("start class fnc response: ", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

export async function endClassFnc({ token, courseId, classId }) {
  const authHeaderConfig = {
    headers: {
      ...config.headers,
      Authorization: "Token " + token,
    },
  };

  try {
    const response = await axios.put(
      `/classes/${classId}/`,
      { status: "ended", course: courseId },
      authHeaderConfig
    );

    const data = response.data;

    return data;
  } catch (error) {
    return error.message;
  }
}

export async function getUserFromRegNumber({ id }: { id: number }) {
  try {
    const response = await axios.get(`/accounts/${id}/`, config);

    const data = response.data;
    return data;
  } catch (error) {
    return error.message;
  }
}

export async function  getAttendanceList(courseId) {
  try {
    const response = await axios.get(`/classes/attendance/${courseId}/`, config);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getExamAttendanceList(courseId) {
  try {
    const response = await axios.get(`/exams/attendance/${courseId}`, config);
    const data = await response.data;
    return data;
  } catch (error) {
    return error.message;
  }
}

export async function markExamAttendance({ courseId, reg_no, token }) {
  const authHeaderConfig = {
    headers: {
      ...config.headers,
      Authorization: "Token " + token,
    },
  };

  try {
    const response = await axios.put(
      `/exams/${courseId}/`,
      { course: courseId, student: reg_no },
      config
    );
    const data = await response.data;
    return data;
  } catch (error) {
    return error.message;
  }
}
