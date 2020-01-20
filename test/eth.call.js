var testMethod = require('./helpers/test.method.js');

var method = 'call';

var tests = [{
    args: [{
        to: '0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b',
        data: '0x23455654',
        gas: 11,
        gasPrice: 11
    }],
    formattedArgs: [{
        to: '0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b',
        data: '0x23455654',
        gas: '0xb',
        gasPrice: '0xb'
    }, 'latest'],
    result: '0x31981',
    formattedResult: '0x31981',
    call: 'eth_'+ method
},{
    args: [{
        to: '0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b',
        data: '0x23455654',
        gas: 11,
        gasPrice: 11
    }, 11],
    formattedArgs: [{
        to: '0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b',
        data: '0x23455654',
        gas: '0xb',
        gasPrice: '0xb'
    }, '0xb'],
    result: '0x31981',
    formattedResult: '0x31981',
    call: 'eth_'+ method
}, {
    error: true, // fails because of the missing 0x prefix of the data property
    args: [{
        to: '0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b',
        gas: 11,
        gasPrice: 11,
        data: '1234'
    }],
    call: 'eth_'+ method
}];

testMethod.runTests('eth', method, tests);

