import axios from "axios";
import { helper } from "../helpers/common";

const getDataFootball = async () => {
  const url = `https://gw.vnexpress.net/football/standing?league_id=403`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  if (!helper.isEmptyObject(result)) {
    let resultArray = result["data"]["403"]["data"];
    resultArray.sort(helper.sortDataByGroup);
    return resultArray;
  }
  return {};
};

export const api = {
  getDataFootball,
};
