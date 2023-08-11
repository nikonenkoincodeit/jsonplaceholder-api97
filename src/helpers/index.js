function addMarkup(ref, markup) {
  ref.innerHTML = markup;
}

function getParam(key, paramsString) {
  const searchParams = new URLSearchParams(paramsString);
  return searchParams.get(key);
}

export { addMarkup, getParam };
