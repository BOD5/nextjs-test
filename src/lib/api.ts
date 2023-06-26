
export const getTools = async (category?: string) =>{
  return await fetch(`https://dummyjson.com/products/${category? 'category/' + category : ''}`).then((res) =>
    res.json()
  )}
export const getCategories = async () => {
  return await fetch("https://dummyjson.com/products/categories").then((res) =>
    res.json()
  )
}
export const getProduct = async (productId: string | number) => {
  return await fetch(`https://dummyjson.com/products/${productId}`).then((res) =>
    res.json()
  )
}