
import {functions, Employee, Manager, Intern, Engineer} from '../Inquire/initInquire';

// given 4 args passed in the function the result returned should be a new Object
// with class of Employee

// name, age, email, and role properties should be a string
// the age should be parsed into a integer

// The email must contain a "@ and ."
// The employee should be a given a new ID Hashed

const a = 'test'
const b = 'test@gmail.com'
const c = 23
const d = 'Manager'



describe('make a new employee object', () => {

    let sample = new Employee(a, b, c, d)
    
    test('test type inferences', () => {

        for(const property in sample) {
            expect(property).not.toBe('' || null || undefined)
        }

        expect(sample.age).toEqual(expect.any(Number));
        expect(sample.id).toBe(undefined);

    });


    test('vaild email format', () => {
        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }

        expect(validateEmail(sample.email)).toBe(true)
    })

    test('methods returns correct values', () => {

        expect(sample.getEmail()).toEqual(expect.any(String));

    });

})




