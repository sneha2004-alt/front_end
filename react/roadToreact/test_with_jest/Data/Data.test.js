const {dataMap} = required('./data');

const { dummy } = required('./data.json');

test('to be equal',()=>{
    expect(dataMap(dummy)).toEqual([dummy[0]]);
    // expect(dataMap(dummy)).toContain([dummy[0]][0]);
});