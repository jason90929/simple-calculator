import updateObject from '../updateObject';

describe('updateObject', function () {
  test('合併兩物件並放於第三個物件上', function () {
    const oldObject = { key1: 'old' };
    const newObject = { key2: 'new' };
    const mergedObject = updateObject(oldObject, newObject);
    expect(mergedObject.key1).toBe('old');
    expect(mergedObject.key2).toBe('new');
  });

  test('兩物件本身不會有任何變動', function () {
    const oldObject = { key1: 'old' };
    const newObject = { key2: 'new' };
    void updateObject(oldObject, newObject);
    expect(oldObject.key1).toBe('old');
    expect(oldObject.key2).toBeUndefined();
    expect(newObject.key1).toBeUndefined();
    expect(newObject.key2).toBe('new');
  });

  test('兩物件重複 key 時，會後蓋前', function () {
    const oldObject = { key1: 'old' };
    const newObject = { key1: 'new' };
    const mergedObject = updateObject(oldObject, newObject);
    expect(mergedObject.key1).toBe('new');
    expect(mergedObject.key1).not.toBe('old');
  });
});
