import axios from "axios";
import { useEffect, useState } from "react";
import { Alert } from "react-native";



const useFetch = (endpoint , query) => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {...query},
    headers: {
      'X-RapidAPI-Key': 'c2f8253c06msh1444ee2c7280863p1cb700jsn5a9c6c4c6aeb',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    setisLoading(true)

    try {
      const response = await axios.request(options)
      setData(response.data.data)
      setisLoading(false)
    } catch (error) {
      seterror(error)
      Alert('there is an error')
    } finally {
      setisLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const Refetch = () => {
    setisLoading(true);
    fetchData();
  }

  
    return {data , isLoading , error , Refetch}
}

export default useFetch;