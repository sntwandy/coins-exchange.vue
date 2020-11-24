const url = 'https://api.coincap.io/v2'

export const getAssets = async () => {
  try {
    const req = await fetch(`${url}/assets?limit=20`)
    const res = await req.json()
    return await res.data
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}
