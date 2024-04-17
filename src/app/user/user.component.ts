import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.class';
import { UserService } from '../firebase-services/user.service';
import { RouterLink } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatNativeDateModule,
    MatCardModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  //@Input() userList!: User;
  firestore: Firestore = inject(Firestore);
  //allUsersList: User[] = [];
  //users$!: Observable<User[]>;

  //unsubAllUsers;
  

  constructor(public dialog: MatDialog, private userService: UserService) {
   // this.unsubAllUsers = this.subAllUsers();
   }

  // ngOnInit(): void {
  //   const usersCollection = collection(this.firestore, 'users');
  //   this.users$ = collectionData(usersCollection, {idField: 'customIdName'}) as Observable<User[]>;
  //   this.users$.subscribe((changes: User[]) => {
  //     console.log(changes);
  //     this.allUsers = changes.map(user => new User(user));
  //   })
  // }


  // subAllUsers() {
  //   const q = query(this.getUserRef(), limit(100));
  //   return onSnapshot(q, (list) => {
  //     this.allUsers = [];
  //     list.forEach(element => {
  //       const userData = element.data();
  //       const user = new User(userData);
  //       user.customUserId = element.id;
  //       this.allUsers.push(user);
  //       console.log(this.allUsers);
        
  //     });
  //   });
  // }

  // getUserRef() {
  //   return collection(this.firestore, 'users');
  // }

  getList(): User[]{
    return this.userService.allUsers;
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}