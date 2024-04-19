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

  firestore: Firestore = inject(Firestore);
  

  constructor(public dialog: MatDialog, private userService: UserService) {}


  getList(): User[]{
    return this.userService.allUsers;
  }

  
  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}