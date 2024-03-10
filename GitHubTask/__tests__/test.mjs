import test from 'ava';
import { userModel } from '../models/userModel.js'; // Make sure to adjust the import path
test('User Validator For Add - Valid User', t => {
    const validUser = {
        email: 'test@example.com',
        userName: 'testuser',
        phone: '1234567890'
    };
    const result = userModel(validUser);
    t.deepEqual(result.error,undefined );
});
test('User Validator For Add - Invalid mail', t => {
    const invalidUser = {
        email: 'y0527607 628gmail.com',
        userName: 'abc',
        phone: '1234567891'
    };
    const result = userModel(invalidUser);
    t.not(result.error, null);
});
test('User Validator For Add - Invalid name', t => {
    const invalidUser = {
        email: 'y0527607628@gmail.com',
        userName: 'a',
        phone: '1234567891'
    };
    const result = userModel(invalidUser);
    t.not(result.error, null);
});
test('User Validator For Add - Invalid phone', t => {
    const invalidUser = {
        email: 'y0527607628@gmail.com',
        userName: 'a',
        phone: '123456'
    };
    const result = userModel(invalidUser);
    t.not(result.error, null);
});