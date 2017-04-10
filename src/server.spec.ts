'use strict' 
import {Server} from './server';

describe('SERVER.TS', () => {
    describe('Bootstrap', () => {
        it('should create and return a new server instance', () => {
            expect(Server.bootstrap()).toBeTruthy();
        })
    })
});
