const [products, setProducts] = useState([]);
useEffect(() => {
  API.get("/products")
    .then((res) => setProducts(res.data))
    .catch((err) => console.error(err));
}, []);
