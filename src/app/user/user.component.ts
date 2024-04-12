import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { Firestore, collection, collectionData, onSnapshot } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.class';

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
    CommonModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  private firestore: Firestore = inject(Firestore);
  allUsers: User[] = [];
  users$!: Observable<User[]>;
  

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    const usersCollection = collection(this.firestore, 'users');
    this.users$ = collectionData(usersCollection, {idField: 'id'}) as Observable<User[]>;
    this.users$.subscribe((changes: User[]) => {
      console.log(changes);
      this.allUsers = changes.map(user => new User(user));
    })
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
