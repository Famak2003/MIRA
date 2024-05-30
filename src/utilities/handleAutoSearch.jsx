function handleAutoSearch(value, setOption) {
  setOption(() => {
    if (!value || value.includes("@")) {
      return [];
    }
    return ["gmail.com", "yahoo.com", "bing.com"].map((domain) => ({
      label: `${value}@${domain}`,
      value: `${value}@${domain}`,
    }));
  });
}

export default handleAutoSearch;
