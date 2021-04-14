 // if Role string matches the a string with role specifics than create class with class

 test('if role then make class role for employee extenison', () => {

    expect(functions.roleIs(sample.getRole())).toBe( sampleRole instanceof Employee );
    exoect(sample.getRole()).toBe(String);

    const correctRole = 'Manager' || 'Intern' || 'Engineer';

    expect(functions.roleIs(sample.getRole())).toBe(correctRole);
    expect(functions.setRole(sample.getRole())).toBe(Manager || Intern || Engineer)

})