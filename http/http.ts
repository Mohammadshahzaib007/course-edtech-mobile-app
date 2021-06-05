import _axios from "axios";

const URL = "https://www.udemy.com/api-2.0/";

export const axios = _axios.create({
  baseURL: URL,
  headers: {
    Authorization:
      "Basic MWlOZWJFNjVLaFl0UVJ2dVdpbmN2eEoyYnRYWjVNQnM3Sm5FNjI0eTpMM0Exb1RPa3dqME5SdDJIUVdsUmlVZjZsakdYdzZqMUZVQmNlNHpJNk1uRm51aFNCNmVNQUlFTHNraG82d2t4ZkRqS1Y3cWZncXJWWXFMcGhrYU1TWGExN21HcmJuUEplQTczd3ZjNjBHRW03dXRmN09acFIybmpuWmk2SzBlWg==",
  },
});
console.log("rendring");
