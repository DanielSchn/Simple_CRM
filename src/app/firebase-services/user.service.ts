import { Injectable, inject } from '@angular/core';
import { User } from '../../models/user.class';
import { Firestore, collection, onSnapshot, query, limit } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    firestore: Firestore = inject(Firestore);
    allUsers: User[] = [];
    unsubAllUsers;


    constructor() {
        this.unsubAllUsers = this.subAllUsers();
    }


    subAllUsers() {
        const q = query(this.getUserRef(), limit(100));
        return onSnapshot(q, (list) => {
            this.allUsers = [];
            list.forEach(element => {
                const userData = element.data();
                const user = new User(userData);
                user.customUserId = element.id;
                this.allUsers.push(user);
                console.log(this.allUsers);

            });
        });
    }

    
    getUserRef() {
        return collection(this.firestore, 'users');
    }


    ngOnDestroy() {
        this.unsubAllUsers();
    }

}

