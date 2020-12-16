function updateObject(oldObject, newObject) {
  return {
    ...oldObject,
    ...newObject,
  };
}

export default updateObject;
