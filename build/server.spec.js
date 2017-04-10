'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
describe('SERVER.TS', () => {
    describe('Bootstrap', () => {
        it('should create and return a new server instance', () => {
            expect(server_1.Server.bootstrap()).toBeTruthy();
        });
    });
});
//# sourceMappingURL=server.spec.js.map