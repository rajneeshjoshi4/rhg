import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })

export interface UserInterface {
  position: number;
  name: string;
  fname: string;
  lname: string;
  phone: string;
  email: string;
  role: string;
  cname: string;
  desination: string;
  action: string;
};


export class UsersService {

  private users: UserInterface[] = [
    { position: 1, name: 'Test user 1', fname: "test1", lname: "Ltest1", phone: "1234567890", email: "test@test.com", role: "test", cname: "test", desination: "test", action: '' },
    { position: 2, name: 'Test user 2', fname: "test2", lname: "Ltest2", phone: "1234567890", email: "test@test.com", role: "test", cname: "test", desination: "test", action: '' },
    { position: 3, name: 'Test user 3', fname: "test3", lname: "Ltest3", phone: "1234567890", email: "test@test.com", role: "test", cname: "test", desination: "test", action: '' },
    { position: 4, name: 'Test user 4', fname: "test4", lname: "Ltest4", phone: "1234567890", email: "test@test.com", role: "test", cname: "test", desination: "test", action: '' },
    { position: 5, name: 'Test user 5', fname: "test5", lname: "Ltest5", phone: "1234567890", email: "test@test.com", role: "test", cname: "test", desination: "test", action: '' },
    { position: 6, name: 'Test user 6', fname: "test6", lname: "Ltest6", phone: "1234567890", email: "test@test.com", role: "test", cname: "test", desination: "test", action: '' },
    { position: 7, name: 'Test user 7', fname: "test7", lname: "Ltest7", phone: "1234567890", email: "test@test.com", role: "test", cname: "test", desination: "test", action: '' },
    { position: 8, name: 'Test user 8', fname: "test8", lname: "Ltest8", phone: "1234567890", email: "test@test.com", role: "test", cname: "test", desination: "test", action: '' },
    { position: 9, name: 'Test user 9', fname: "test9", lname: "Ltest9", phone: "1234567890", email: "test@test.com", role: "test", cname: "test", desination: "test", action: '' },
    { position: 10, name: 'Test user 10', fname: "test10", lname: "Ltest10", phone: "1234567890", email: "test@test.com", role: "test", cname: "test", desination: "test", action: '' },
    { position: 11, name: 'Test user 11', fname: "test11", lname: "Ltest11", phone: "1234567890", email: "test@test.com", role: "test", cname: "test", desination: "test", action: '' },
  ];

  usersUpdated = new Subject();

  
  addNewUser(data) {
    this.users.push(data);
    this.usersUpdated.next();

  }

  getUsers() {
    return [...this.users];
  }

  deleteUser() { }

  constructor() { }
}
