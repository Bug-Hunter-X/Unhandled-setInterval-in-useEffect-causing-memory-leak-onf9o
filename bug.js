```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: The return value of setInterval is not being stored and cleared
    setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }, []);

  return <div>Count: {count}</div>;
}
```