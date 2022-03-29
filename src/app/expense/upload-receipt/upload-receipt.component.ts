import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ExpenseService } from '../expense.service';
import { ReceiptService } from '../receipt.service';

@Component({
  selector: 'app-upload-receipt',
  templateUrl: './upload-receipt.component.html',
  styleUrls: ['./upload-receipt.component.css']
})
export class UploadReceiptComponent implements OnInit {

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>
  // selectedFile?: any;
  // currentFile?: any;
  // fileInfo?: any;

  // submitted = false;

  constructor(private expenseService: ExpenseService, private activatedRoute: ActivatedRoute, private router: Router, private receiptService: ReceiptService) { }

  ngOnInit(): void {
    this.fileInfos = this.receiptService.getFiles();
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  submit(): void {
    this.progress = 0;
    if(this.selectedFiles){
      const file: File | null = this.selectedFiles.item(0)
      if(file){
        this.currentFile = file;
        this.receiptService.submit(this.currentFile).subscribe(
          (event: any) => {
            if(event.type === HttpEventType.UploadProgress){
              this.progress = Math.round(100 * event.loaded / event.total);
            }else if (event instanceof HttpResponse){
              this.message = event.body.message
              this.fileInfos = this.receiptService.getFiles();
            }
          },
          (err: any) => {
            console.log(err)
            this.progress = 0;
            if(err.error && err.error.message){
              this.message = err.error.message
            } else {
              this.message = 'Could not upload the file!'
            }
            this.currentFile = undefined;
          });
      }
      this.selectedFiles = undefined;
    }

   }

  // selectFile(event: any): void{
  //   this.selectedFile = event.target.files[0];

  //   let reader = new FileReader();
  //   reader.readAsDataURL(event.target.files[0]);
  //   reader.onload = (event) => {
  //     console.log(reader.result)
  //   }
  // }

  // submit(): void {
  //   let submitReceipt = new FormData();
  //   submitReceipt.append('file', this.selectedFile, this.selectFile.name);

  //   this.expenseService.uploadReceipt(submitReceipt).subscribe({ next: (event) => {
  //     this.submitted = true;

  //     if(this.submitted){
  //       this.router.navigate(['employee-pending'])
  //     }
  //   },
  //   error: (e) => console.log(e)
  // });

  // }

}
