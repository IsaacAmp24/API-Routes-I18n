import {Component, OnInit} from '@angular/core';
import {Patients} from "../../model/patients";
import {Examiners} from "../../model/examiners";
import {MentalState} from "../../model/mental-state";
import {MentalStateService} from "../../services/mental-state.service";
import {PatientsService} from "../../services/patients.service";
import {ExaminersService} from "../../services/examiners.service";

@Component({
  selector: 'app-card-mental',
  templateUrl: './card-mental.component.html',
  styleUrl: './card-mental.component.css'
})
export class CardMentalComponent implements OnInit{

  public patients: Array<Patients> = [];
  public examiners: Array<Examiners> = [];
  public mentalStates: Array<MentalState> = [];

  constructor(private mentalStateService: MentalStateService,
              private patientsService: PatientsService,
              private examinersService: ExaminersService
              ) {

    this.mentalStateService.getAll().subscribe((response: any) =>{
      this.mentalStates = response;
    });

    this.patientsService.getAll().subscribe((response: any) =>{
      this.patients = response;
    });

    this.examinersService.getAll().subscribe((response: any) =>{
      this.examiners = response;
    });

  }

  // methods to get data from the services
  getAllMentalStates(){
    this.mentalStateService.getAll().subscribe((response:any)=>{
      this.mentalStates= response;
    })
  }

  getAllPatients(){
    this.patientsService.getAll().subscribe((response:any)=>{
      this.patients= response;
    })
  }

  getAllExaminers(){
    this.examinersService.getAll().subscribe((response:any)=>{
      this.examiners= response;
    })
  }

  //funciones para el html
  getPatientName(data: MentalState): string {
    const patient = this.patients.find((patient => patient.id === data.patientId));
    return patient ? `${patient.firstName} ${patient.lastName}` : '';
  }

  getExaminerName(data: MentalState): string {
    const examiner = this.examiners.find((examiner => examiner.id === data.examinerId));
    return examiner ? `${examiner.firstName} ${examiner.lastName}` : '';
  }

  getBornDate(data: MentalState): string {
    const patient = this.patients.find((patient => patient.id === data.patientId));
    return patient ? patient.birthDate : '';
  }

  getExamDate(data: MentalState): string{
    return data.examDate;
  }

  getExaminerNationalProviderIdentifier(data: MentalState): string {
    const examiner = this.examiners.find((examiner => examiner.id === data.examinerId));
    return examiner ? examiner.nationalProviderIdentifier : '';
  }

  getPhotoURL(data: MentalState): string {
    const patient = this.patients.find((patient => patient.id === data.patientId));
    return patient ? patient.photoUrl : '';
  }


  ngOnInit(): void {
    this.getAllMentalStates();
    this.getAllPatients();
    this.getAllExaminers();
  }

}
