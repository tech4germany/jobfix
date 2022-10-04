import { Component, OnInit } from '@angular/core';
import { JdDataService } from '../services/jd-data.service';
import { JobDescription } from '../interfaces/jobdescription';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { UserroleService, userRole } from '../services/userrole.service';

@Component({
  selector: 'app-listoverview',
  templateUrl: './listoverview.component.html',
  styleUrls: ['./listoverview.component.css']
})
export class ListoverviewComponent implements OnInit {

  jds?: any[];

  constructor(
    public db: JdDataService,
    private router: Router,
    public userRoleService: UserroleService) {
  }

  ngOnInit(): void {
    this.getJobDescriptionList();
  }

  onAddJobDescription(): void {
    this.router.navigate(['/home/newjobdescription'])
  }

  getJobDescriptionList(): void {
      this.db.getList().snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      ).subscribe(data => {
          this.jds = data;
        })
      }

  openToEditByDepartment(key: string) {
    // open hiring manager view to fill in new fields
    this.router.navigate(['/home/hiringmanager'], {state: {key: key}})
    console.log(key)
  }

  openToEditByHr(key: string) {
    // open human resources view to fill in new fields
    this.router.navigate(['/home/newjobdescription'], {state: {key: key}})
    console.log(key)
  }
}