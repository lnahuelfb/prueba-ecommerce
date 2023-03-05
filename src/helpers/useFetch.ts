import { useState, useEffect } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    const res = await fetch(url)
    const data = await res.json()

    setLoading(false)
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data, loading }
}