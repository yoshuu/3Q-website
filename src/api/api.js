import axios from "axios";

const data = axios.create({
  baseURL: "https://api.airtable.com/v0/app4NIZthoTlA3i05",
  headers: {
    Authorization: "Bearer keyZZohwE7qoW0mev",
    Cookie: "brw=brw6vXnpZDnXonY3G",
  },
});

export async function GET(url) {
  try {
    const response = await data.get(url);
    return response;
  } catch (error) {
    console.log("沒有資料");
    return null;
  }
}
