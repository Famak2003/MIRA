const debouncer = (value, conversation) => {
  const currentLastText = conversation[conversation.length - 1];
  if (currentLastText?.text === value?.text || !value?.text) {
    return false;
  }
  return true;
};

export { debouncer };
