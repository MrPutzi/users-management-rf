import { Component } from '@angular/core';
import {user} from "../../entities/user";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
users = [new user("Marek","marek@jano.sk"),
        new user("Jano","jano@marek.sk"),
        new user("Adolf","adolf@ss.de")
]
title = 'Zoznam použivateľov';
}
